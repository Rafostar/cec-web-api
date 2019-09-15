const http = require('http');
const url = require('url');
const CecController = require('cec-controller');

var cecCtl = new CecController({ osdString: 'CEC-WEB-API' });
var ctlObj = {};
var busy = false;

cecCtl.once('ready', readyHandler);
cecCtl.on('error', console.error);
module.exports = cecCtl;

function readyHandler(controller)
{
	ctlObj = controller;

	cecCtl.server = http.createServer(requestListener);
	const port = (process.argv[2] > 0 && process.argv[2] <= 65535) ? process.argv[2] : 8080;

	cecCtl.emit('created-server', port);
	cecCtl.server.listen(port);
}

function requestListener(req, res)
{
	var data = url.parse(req.url, true);
	var result = getResult(data.pathname.split('/'));

	if(result)
	{
		res.writeHead(200);

		if(typeof result === 'function')
		{
			if(busy) return res.end('Previous function is still running!');

			busy = true;
			var value = (data.query) ? data.query.value : null;

			return result(value).then(response =>
			{
				busy = false;

				if(response === true) res.end('OK');
				else if(response === null) res.end('ERROR');
				else res.end(JSON.stringify(response, null, 2));
			});
		}

		return res.end(JSON.stringify(result, null, 2));
	}

	res.writeHead(404);
	res.end('Invalid Request!');
}

function getResult(keysArray)
{
	var result = Object.assign(ctlObj);

	for(var key of keysArray)
	{
		if(!key) continue;

		if(typeof result === 'object' && result[key])
			result = result[key];
		else
			return null;
	}

	return result;
}

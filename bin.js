#!/usr/bin/env node

const api = require('./index');

console.log('CEC-Controller initializing...');

api.once('ready', () =>
	console.log('CEC-Controller successfully initialized')
);

api.once('error', (err) =>
{
	console.error(err);
	api.closeClient().then(() =>
	{
		console.log('cec-client closed');
		process.exit(1);
	});
});

api.once('created-server', (port) =>
{
	api.server.once('listening', () =>
		console.log(`Server is listening on port: ${port}`)
	);
});

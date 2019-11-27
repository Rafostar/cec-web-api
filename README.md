# cec-web-api
[![License](https://img.shields.io/github/license/Rafostar/cec-web-api.svg)](https://github.com/Rafostar/cec-web-api/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/cec-web-api.svg)](https://www.npmjs.com/package/cec-web-api)
[![Downloads](https://img.shields.io/npm/dt/cec-web-api.svg)](https://www.npmjs.com/package/cec-web-api)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TFVDFD88KQ322)
[![Donate](https://img.shields.io/badge/Donate-PayPal.Me-lightgrey.svg)](https://www.paypal.me/Rafostar)

Requires CEC capable device (e.g. Raspberry Pi or USB-CEC adapter).<br>
Additionally `cec-client` must be installed. On Raspbian it is included in cec-utils package.

### Installation
API can be used as both core node module or a binary app.<br>
Install it as an app system-wide with below command:
```
sudo npm install cec-web-api -g
```
Start server with:
```
cec-web-api [port] [--hdmi-ports=<number>]
```
Port number is optional (default: 8080).<br>
Number of HDMI ports in TV (used for `changeSource` function) can also be specified (default: 3).

### Usage
Requests to your host will return controller object. Navigate through it like usual in JavaScript replacing dots with slashes. Use `?value=x` to pass args to available functions. Below example shows how to switch dev0 (TV) HDMI source to a second port.
```
http://ip:port/dev0/changeSource?value=2
```
For more info on HDMI-CEC usage and available functions visit [cec-controller](https://github.com/Rafostar/cec-controller) GitHub page.

## Donation
If you like my work please support it by buying me a cup of coffee :-)

[![PayPal](https://github.com/Rafostar/gnome-shell-extension-cast-to-tv/wiki/images/paypal.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TFVDFD88KQ322)

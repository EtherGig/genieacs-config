const hourly = Date.now(3600000);
const fivemin = Date.now(300000)

// Refresh basic parameters hourly
declare("InternetGatewayDevice.DeviceInfo.HardwareVersion", {path: hourly, value: hourly});
declare("InternetGatewayDevice.DeviceInfo.SoftwareVersion", {path: hourly, value: hourly});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANIPConnection.*.MACAddress", {path: hourly, value: hourly});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANIPConnection.*.ExternalIPAddress", {path: hourly, value: hourly});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANPPPConnection.*.Username", {path: hourly, value: hourly});
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.SSID", {path: hourly, value: hourly});
// Don't refresh password field periodically because CPEs always report blank passowrds for security reasons
declare("InternetGatewayDevice.LANDevice.*.WLANConfiguration.*.KeyPassphrase", {path: hourly, value: 1});
declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.HostName", {path: hourly, value: hourly});
declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.IPAddress", {path: hourly, value: hourly});
declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.MACAddress", {path: hourly, value: hourly});
//my config
declare("VirtualParameters.OpticalTemperature", {path: fivemin, value: fivemin});
declare("VirtualParameters.OpticalRXPower", {path: fivemin, value: fivemin});
declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.TotalAssociations", {path: fivemin, value: fivemin});
declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.AssociatedDevice.*.*", {path: fivemin, value: fivemin});

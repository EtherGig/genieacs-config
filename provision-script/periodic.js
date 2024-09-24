const interval = Date.now(300000)

//my config
declare("VirtualParameters.OpticalTemperature", {path: interval, value: interval});
declare("VirtualParameters.OpticalRXPower", {path: interval, value: interval});
declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.TotalAssociations", {path: interval, value: interval});
declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.AssociatedDevice.*.*", {path: interval, value: interval});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANPPPConnection.*.Username", {path: interval, value: interval});
declare("InternetGatewayDevice.WANDevice.*.WANConnectionDevice.*.WANPPPConnection.*.Password", {path: interval, value: interval});

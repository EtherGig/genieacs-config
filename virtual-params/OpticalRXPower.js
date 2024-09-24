const now = Date.now();
let ProductClass = declare("DeviceID.ProductClass", {value: 1}).value[0]
let signal = "N/A"

switch (ProductClass) {
  case "ZXHN F450(EPON ONU)":
  case "GM630":
  case "GM220-S":
    let data = declare("InternetGatewayDevice.WANDevice.1.X_CT-COM_EponInterfaceConfig.RXPower",{value: 1}).value[0];
    signal = Math.ceil(10 * Math.log10(data / 10000)).toString();
    break;
  case "HS8145C5":
    signal = declare("InternetGatewayDevice.WANDevice.1.X_GponInterafceConfig.RXPower",{value: 1}).value[0];
    break;
  default:
    signal = declare("InternetGatewayDevice.WANDevice.1.X_CT-COM_EponInterfaceConfig.RXPower",{value: 1}).value[0];
    break;
}

return {writable: false, value: [`${signal} dBm`, 'xsd:string']};
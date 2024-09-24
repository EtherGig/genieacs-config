const now = Date.now();
let ProductClass = declare("DeviceID.ProductClass", {value: 1}).value[0]
let temperature = "N/A"

switch (ProductClass) {
  case "ZXHN F450(EPON ONU)":
  case "GM630":
  case "GM220-S":
    let data = declare("InternetGatewayDevice.WANDevice.1.X_CT-COM_EponInterfaceConfig.TransceiverTemperature",{value: 1}).value[0];
    temperature = Math.round(data / 255);
    break;
  case "HS8145C5":
    temperature = declare("InternetGatewayDevice.WANDevice.1.X_GponInterafceConfig.TransceiverTemperature",{value: 1}).value[0];
    break;
}

return {writable: false, value: [`${temperature}°C`, 'xsd:string']};
let m = "";
const instanceIndex = '1';

if (args[1].value) {
  m = args[1].value[0];
  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.PreSharedKey.1.KeyPassphrase`, null, {value: m});
  declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.KeyPassphrase`, null, {value: m});
}
else {
  let psk = declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.PreSharedKey.1.KeyPassphrase`, {value: Date.now()});
  let kp = declare(`InternetGatewayDevice.LANDevice.1.WLANConfiguration.${instanceIndex}.KeyPassphrase`, {value: Date.now()});
  if (psk.size) {
    m = psk.value[0];
  } else if (kp.size) {
    m = kp.value[0];
  }
}

return {writable: true, value: [m, "xsd:string"]};
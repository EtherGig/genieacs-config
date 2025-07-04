let m = "";

let xhw0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANIPConnection.*.X_HW_VLAN`, {value: Date.now()});
let xhw1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.*.WANPPPConnection.*.X_HW_VLAN`, {value: Date.now()});
let xcmcc0 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.*.X_CMCC_VLANIDMark`, {value: Date.now()});
let xcmcc1 = declare(`InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.*.X_CMCC_VLANIDMark`, {value: Date.now()});
if (xhw0.size || xhw1.size) {
m = "XHW";
} else if (xcmcc0.size || xcmcc1.size) {
m = "XCMCC";
} else {
m = "Other"
}

return {writable: false, value: [m, "xsd:string"]};
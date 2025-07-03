// INFORM PROVISION - Hanya parameter koneksi ACS
const daily = Date.now() - 86400000; // 24 jam yang lalu
const url = "http://110.110.0.2:7547";
const informInterval = 300; // Interval lebih panjang (5 menit)
const AcsUser = "admin";
const AcsPass = "admin";
const ConnReqUser = "dots";
const ConnReqPass = "dots";

// Penanganan yang lebih baik untuk deklarasi dengan validasi
let brandDeclaration = declare('DeviceID.Manufacturer', {value: daily});
const brand = brandDeclaration && brandDeclaration.value && brandDeclaration.value[0] ? brandDeclaration.value[0] : '';

// Hanya parameter koneksi ACS
if (brand !== "MikroTik") {
    declare("InternetGatewayDevice.ManagementServer.URL", {value: daily}, {value: url});
    declare("InternetGatewayDevice.ManagementServer.Username", {value: daily}, {value: AcsUser});
    declare("InternetGatewayDevice.ManagementServer.Password", {value: daily}, {value: AcsPass});
    declare("InternetGatewayDevice.ManagementServer.ConnectionRequestUsername", {value: daily}, {value: ConnReqUser});
    declare("InternetGatewayDevice.ManagementServer.ConnectionRequestPassword", {value: daily}, {value: ConnReqPass});
    declare("InternetGatewayDevice.ManagementServer.PeriodicInformEnable", {value: daily}, {value: true});
    declare("InternetGatewayDevice.ManagementServer.PeriodicInformInterval", {value: daily}, {value: informInterval});
} else {
    declare("Device.ManagementServer.URL", {value: daily}, {value: url});
    declare("Device.ManagementServer.Username", {value: daily}, {value: AcsUser});
    declare("Device.ManagementServer.Password", {value: daily}, {value: AcsPass});
    declare("Device.ManagementServer.ConnectionRequestUsername", {value: daily}, {value: ConnReqUser});
    declare("Device.ManagementServer.ConnectionRequestPassword", {value: daily}, {value: ConnReqPass});
    declare("Device.ManagementServer.PeriodicInformEnable", {value: daily}, {value: true});
    declare("Device.ManagementServer.PeriodicInformInterval", {value: daily}, {value: informInterval});
}


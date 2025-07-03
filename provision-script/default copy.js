// DEFAULT PROVISION - Parameter monitoring dan update
const daily = Date.now() - 86400000; // 24 jam yang lalu
const hourly = Date.now() - 3600000; // 1 jam yang lalu
const minutes = Date.now() - 300000; // 5 menit yang lalu

// Penanganan yang lebih baik untuk deklarasi dengan validasi
let brandDeclaration = declare('DeviceID.Manufacturer', {value: daily});
const brand = brandDeclaration && brandDeclaration.value && brandDeclaration.value[0] ? brandDeclaration.value[0] : '';

// Virtual Parameters untuk monitoring
declare("VirtualParameters.RXPower", {path: hourly, value: hourly});
declare("VirtualParameters.pppoeIP", {path: minutes, value: minutes});
declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.TotalAssociations", {path: minutes, value: minutes});
declare("VirtualParameters.pppoeUsername", {path: minutes, value: minutes});
declare("VirtualParameters.getdeviceuptime", {path: minutes, value: minutes});

if (brand !== "MikroTik") {
    // Informasi perangkat dasar
    declare("InternetGatewayDevice.DeviceInfo.HardwareVersion", {path: daily, value: daily});
    declare("InternetGatewayDevice.DeviceInfo.SoftwareVersion", {path: daily, value: daily});
    
    // Wireless - Parameter penting saja
    declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.SSID", {path: hourly, value: hourly});
    declare("InternetGatewayDevice.LANDevice.1.WLANConfiguration.*.Enable", {path: hourly, value: hourly});
    
    // Host Update - Parameter penting saja
    declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.HostName", {path: minutes, value: minutes});
    declare("InternetGatewayDevice.LANDevice.*.Hosts.Host.*.IPAddress", {path: minutes, value: minutes});
}
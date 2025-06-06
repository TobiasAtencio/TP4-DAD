// Ejercicio 1: Crear un objeto literal para un dispositivo de red
const router = {
    modelo: "AX6000",
    marca: "TP-Link",
    puertos: 4,
    velocidad: 1200, // Mbps
    soportaWifi: true
};

// Ejercicio 2: Array de dispositivos de red
const dispositivosRed = [
    { tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
    { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
    { tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
    { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
    { tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180 }
];

// Ejercicio 3: Filtrar dispositivos por marca
const dispositivosCisco = dispositivosRed.filter(dispositivo => dispositivo.marca === "Cisco");

// Ejercicio 4: Mapear direcciones IP
const servidores = [
    { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
    { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
    { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
    { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
    { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

const direccionesIP = servidores.map(servidor => servidor.ip);

// Ejercicio 5: Filtrar y ordenar paquetes de datos
const paquetesDatos = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const paquetesFiltradosOrdenados = paquetesDatos.filter(paquete => paquete.tamaño > 1000)
    .sort((a, b) => b.prioridad - a.prioridad);

// Ejercicio 6: Calcular estadísticas de red
const traficoRed = {
    "08:00": 1250,
    "09:00": 1870,
    "10:00": 2100,
    "11:00": 1950,
    "12:00": 1600,
    "13:00": 1300,
    "14:00": 1700,
    "15:00": 2200,
    "16:00": 1800,
    "17:00": 1500
};

const totalDatosTransferidos = Object.values(traficoRed).reduce((total, cantidad) => total + cantidad, 0);
const horaMayorTrafico = Object.keys(traficoRed).reduce((maxHora, hora) => traficoRed[hora] > traficoRed[maxHora] ? hora : maxHora);

// Ejercicio 7: Analizar conexiones de red
const conexiones = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" }
];

const conexionesPorProtocolo = conexiones.reduce((conteo, conexion) => {
    conteo[conexion.protocolo] = (conteo[conexion.protocolo] || 0) + 1;
    return conteo;
}, {});

// Ejercicio 8: Filtrar y transformar alertas de seguridad
const alertasSeguridad = [
    { nivel: "alto", mensaje: "Intrusión detectada en la red", ip: "192.168.1.5" },
    { nivel: "medio", mensaje: "Acceso no autorizado a un servidor", ip: "192.168.1.10" },
    { nivel: "alto", mensaje: "Ataque DDoS en el firewall", ip: "192.168.1.12" }
];

const alertasAdministracion = alertasSeguridad
    .filter(alerta => alerta.nivel === "alto")
    .map(alerta => `ALERTA: ${alerta.mensaje} en la IP ${alerta.ip}`);

// Ejercicio 9: Combinar datos de dispositivos y conexiones
const informeActividad = conexiones.map(conexion => ({
    origen: conexion.origen,
    destino: conexion.destino,
    protocolo: conexion.protocolo
}));

// Ejercicio 10: Analizar y optimizar topología de red
const topologiaRed = {
    nodos: [
        { id: "A", tipo: "Router", ubicacion: "Planta 1" },
        { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
        { id: "C", tipo: "Switch", ubicacion: "Planta 2" }
    ],
    conexiones: [
        { origen: "A", destino: "B", ancho_banda: 1000 },
        { origen: "B", destino: "C", ancho_banda: 100 }
    ]
};

const conexionesPorNodo = topologiaRed.conexiones.reduce((conteo, conexion) => {
    conteo[conexion.origen] = (conteo[conexion.origen] || 0) + 1;
    conteo[conexion.destino] = (conteo[conexion.destino] || 0) + 1;
    return conteo;
}, {});

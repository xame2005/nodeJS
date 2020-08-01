const os = require ("os");

//Nos muestra la arquitectura del equipo
console.log(os.arch());

//Nos muestra el sistema operativo sobre el cual se trabaja
console.log(os.platform());

//Nos muestra la cantidad de nucleos del procesador
console.log(os.cpus());

//Muestra errores y señales del sistema
console.log(os.constants);

//Muestra la cantidad de memoria RAM disponible
console.log(os.freemem());

//Muestra el directorio raiz
console.log(os.homedir());

//Muestra el directorio temporal
console.log(os.tmpdir());

//Muestra el hostname
console.log(os.hostname());

//Muestra interfaces de red activas
console.log(os.networkInterfaces());
//Realiza una impresión en pantalla del parámetro
console.log("Algo");

//Util para hacer testing y saber si el código se está ejecutando correctamente
console.info("Algo");

//muestra en consola un log con un color distinto para identificar errores
console.error("Ocurrió un error");

//Muestra en consola una advertencia con un color distinto al del log y al del error
console.warn("Advertencia")

var tabla = [
    {
        a:1,
        b:"Z"
    },
    {
        a:2,
        b:"S"    
    }
]

console.table(tabla);

//console.count sirve para loguear un contador de algo en específico
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
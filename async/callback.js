//Función hola que recibe dos parámetros, una variable nombre y un callback
//Hacemos un timeout que recibe dos parámetros, una función y los milisegundos
//la función anidada recibe un console log que imprime el string hola y el valor de nombre
//se llama la función callback y se pasa el parámetro de la variable nombre
function hola (nombre, miCallback) {
        setTimeout(function () {
            console.log("Hola " + nombre)
        miCallback(nombre);
    }, 1500)
}


function adios (nombre, otroCallback) {
    setTimeout(() => {
        console.log ("Adios " + nombre);
        otroCallback();
    }, 1000);
}

console.log("iniciando proceso");
hola("Samuel", function (nombre){
    adios(nombre, function(){
        console.log("Terminando proceso...")
    })
})

//Creación de dos funciónes asíncronas que reciben callbacks como parámetros
//Dentro de la primera función se llama a la segunda como callback para -
// anidar funciones anidadas.
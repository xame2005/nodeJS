function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Blah blah blah blah...");
            resolve();
            reject("Hubo un error en la función hablar");
        });
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    })

}

//--
console.log("Iniciando Proceso")
hola("Samuel")
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Proceso Terminado")
    })
    .catch(error =>{
        console.log("Ha habido un error")
        console.log(error);
    })
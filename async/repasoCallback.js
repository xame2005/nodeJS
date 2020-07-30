function estoySiendoAsincrona(callback) {
    setTimeout(() => {
        console.log("Estoy siendo asíncrono");
        callback();
    }, 1000);
}

console.log("Iniciando Proceso");
estoySiendoAsincrona(function(){
    console.log("Terminando proceso")
})
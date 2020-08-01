//No es necesario requerir el módulo ya que viene instalado por defecto en node
//const process = require ("process");

process.on("beforeExit", ()=>{
    console.log("El proceso está a punto de terminar");
});

process.on("Exit", ()=>{
    console.log("El proceso acabó");
    setTimeout(() => {
        console.log("Esto no se va a ejecutar nunca ya que está fuera del event loop")
    }, 0);
})

process.on("uncaughtException", (err, origen)=>{
    console.error("Se nos ha olvidado capturar un error");
    console.error(err);
});
process.on("uncaughtRejection");

funcionQueNoExiste();
console.log("Esto si el error no se recoge, no sale");
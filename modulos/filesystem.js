const fs = require ("fs");

function leer (ruta, cb) {
    fs.readFile(ruta, (err, data)=>{
        //Archivo Leido
        cb(data.toString());
    })
}

function escribir (ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err, ){
        if (err){
            console.error("No se ha podido modificar el documento", err);
        }else {
            console.log("Se ha escrito correctamente");
        }
    })
}

function borrar (ruta, cb) {
    fs.unlink(ruta, cb)
}

leer(__dirname + "/archivoDeLectura.txt", console.log);
escribir(__dirname + "/archivo1.txt", "Soy el archivo1.txt", console.log())
//borrar(__dirname+ "/archivo1.txt", console.log)
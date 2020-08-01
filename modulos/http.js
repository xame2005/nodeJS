const http = require ("http");

http.createServer(router).listen(3000);

function router(req, res){
    console.log("Nueva petición!");
    console.log(req.url);

    switch (req.url) {
        case "/hola":
            res.write("Hola, qué tal!");
            res.end();
            break;

        default:
            res.write("Error 404, no sé lo que quieres")
    }

    //Enviando una respuesta a la petición del usuario
    res.write("Utilizando HTTP desde NodeJS.")
    res.writeHead(201,{"Content-type": "text/plain"})

    res.end();
}

console.log("Escuchando en el puerto 3000")
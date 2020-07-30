function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function() {
    console.log("Blah blah blah blah...");
    callbackHablar;
  });
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

//--
console.log("iniciando proceso");
hola("Samuel", function (nombre) {
  hablar(function () {
    adios(nombre, function () {
      console.log("Terminando proceso...");
    });
  });
});

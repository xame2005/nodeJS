const { exec, spawn } = require("child_process");
const { stdout, stderr } = require("process");

exec("node modulos/consola.js", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function(dato){
    console.log(dato.toString);
});

proceso.stdout.on("exit", function(){
    console.log("El proceso terminó");
})

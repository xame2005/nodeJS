//contenido de modulos en la variable global
console.log(global);

//Uso de setInterval, clearInterval
let i=0;
let interval = setInterval(() => {
    if (i===3){
        clearInterval(interval);
    }
    i++
    console.log("Samuel")
}, 1000);

//Uso de setImmediate
setImmediate(function(){
    console.log("Hola")
})

console.log(process);

console.log(__dirname);

console.log(__filename);
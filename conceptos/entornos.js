const nombre = process.env.NOMBRE || "Sin nombre";
const web = process.env.WEB || "No tengo Web"

console.log("Hola " + nombre);
console.log("Mi web es " + web);
const nombre = process.env.NOMBRE || "Sin nombre";
const web = process.env.WEB || "No tengo Web";
const email = process.env.EMAIL || "sin correo electrónico"

console.log("Hola " + nombre);
console.log("Mi web es " + web);
console.log("mi correo es " + email)
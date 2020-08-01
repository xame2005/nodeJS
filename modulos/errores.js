function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3+z;
}

function seRompeAsincrona (){
    setTimeout(() => {
        try {
           return 3+z; 
        } catch(err) {
            console.log("Error en mi función asíncrona")
            console.error(err);
        }
        
    }, 1000);
}

try{
   //otraFuncion();
   seRompeAsincrona(function (){
       console.log("Hay un error asíncrono");
   }); 
} catch(err){
    console.error("Vaya, algo se ha roto");
    console.log(err.message)
}

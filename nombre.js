// Creamos la variable nombre y el metodo callback

let nombre = (nom, callback) => { 
    var miNombre = "Nombre: " + nom;
    callback(miNombre); // 2
  }
  
// Imprimimos los datos que tenga la variable logNombre
  let logNombre = (nom) => {
    console.log(nom);
  }


// Ingresamos el nombre que queremos mostrar.

nombre("Urcelay Montellano Yossi Alberto", logNombre); 

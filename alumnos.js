// Creamos nuestros datos: //

let alumnos = [{
        matricula: 123,
        nombre: "Yossi Alberto Urcelay Montellano ",
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4953
    }, {
        matriula: 345,
        nombe: "Yessica Daniela Cordero Perez",
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4952
    }, {
        matricula: 678,
        nombre: 'Jorge Salinas Cuevas',
        licenciatura: "Ingenieria en Informatica",
        grupo: 4951
    }]
    
// Creamos la promesa y el metodo para consultar en la base de datos alumnoDB //

    let getAlumno = (matricula) => {
        return new Promise((resolve, reject) => {
        let alumnoDB = alumnos.find(alumno => alumno.matricula === matricula)
        if (!alumnoDB) {
            reject(`No existe el matricula= ${matricula} del alumno dentro de la base datos`);
        } else {
            resolve(alumnoDB);
        }
    });
}
    
// Consula los datos del alumno ingresando la matricula //

getAlumno(001).then(res => {
    console.log(res); 
}).catch(error => {
    console.log(error);
});
let aleatorio = Math.random();

let valueAppearances = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function ciclofor(min, max){
    for (let step = 1; step < 1000; step++) {
        let randomIndex = random(min, max);
        valueAppearances.push(randomIndex);
      }
}

let getNumeros = (min, max) => {
    return new Promise((resolve, reject) => {
        if (min <= 0 && max >= 1001) {
            reject(`no se puede generar los numeros`);
        } else {
            resolve(ciclofor(min, max));
            
        }
    });
}

let getSPromedio = (min, max) => {
        return new Promise((resolve, reject) => {
        if (min <= 0 && max >= 1001) {
            reject(`no se puede generar el promedio`);
            } else {
                resolve(
                total = valueAppearances.reduce((a, b) => a + b, 0),
                division = total/1000
                );
            }
        });
    }

let getPromedioF = async(min,max) => {
    let consulta = await getNumeros(min,max);
    let consulta2 = await getSPromedio(consulta);
    return 'Suma: '+consulta2+ ',Pro: '+division;
}

getPromedioF(1,10).then((consulta2) => {
    console.log(consulta2);
}).catch((errores) => {
    console.log(errores);
});
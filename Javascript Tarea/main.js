/*archivo json con las caracteristicas de autos, modelos, etc.*/ 
const cars = require('./cars.json');

/*variables contador*/
let contador_modelo = 0;
let contador_color = 0;
let contador_luxury = 0;

/*array vacio*/
let arrayModelos = [];
/*array para buscar auto por año */
let arrayBuscaPorAño =[];


/*buscar por color*/
for(let i=0; i<cars.length; i++){
    if(cars[i].color ==='Red'){
        contador_color = contador_color + 1;
 }
}


/*Buscar y guardar los autos de año mayor a 2010 */
for(let i=0; i<cars.length; i++){
    if(cars[i].year>2010){
        /*console.log(cars[i].brand+'-'+cars[i].model+ ' '+cars[i].year);*/
        arrayModelos.push(cars[i]);
        contador_modelo = contador_modelo + 1;
    }
}

/**imprimir la cantidad de autos */
console.log(contador_modelo);

/**imprimir la cantidad de autos con color rojo */
console.log(contador_color);



/**imprimir el array con los autos de modelo mayor a 2010 */
for(let i = 0; i < arrayModelos.length; i++){
    console.log('["'+ arrayModelos[i].brand+'-'+arrayModelos[i].model+' '+arrayModelos[i].year+'"]');
}

/**añadir el campo luxury tax a cada uno de los elementos del array cars */
for(let i = 0; i < cars.length; i++){
    cars[i].luxuryTax= false;
}

/*cambiar los valores de luxury tax*/ 
for(let i = 0; i < cars.length; i++){
    if(cars[i].brand === 'Jaguar' || cars[i].brand === 'Aston Martin'){
        cars[i].luxuryTax = true;
    }else{
        cars[i].luxuryTax = false;
    }
}


for(let i = 0; i < cars.length; i++){
    if(cars[i].luxuryTax === true){
        contador_luxury = contador_luxury +1;
    }else{
        contador_luxury = contador_luxury;
    }
}

/**imprime los autos con luxuryTax = true */
console.log(contador_luxury);


obtenerAutosPorAño();


function obtenerAutosPorAño (año){

    año = 2011;
    let contadorAutoAño = 0;
    
    /*contador para saber la cantidad de autos por año*/
    for(let i = 0; i < cars.length; i++){
        if(cars[i].year === año){
            arrayBuscaPorAño.push(cars[i]);
            contadorAutoAño = contadorAutoAño + 1 ;
        }else{
            contadorAutoAño = contadorAutoAño;
        }
    }
    console.log(contadorAutoAño);

    for(let i = 0; i < arrayBuscaPorAño.length; i++){
        console.log(arrayBuscaPorAño[i].model+"-"+arrayBuscaPorAño[i].year);

    }
    
}

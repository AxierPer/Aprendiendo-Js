/*
*===================================================
*=          FUNCIONES SIN PARAMETRO                =
*===================================================
*/ 
var globales = 10;
console.log('globales es: ',globales);


//TODO: Declarar la funcion
function saludo(){
    //TAREA DE LA FUNCION
    console.log('Hola');
};

//? Ejecutar la funcion
saludo();


/*
*===================================================
*=          FUNCIONES CON PARAMETRO                =
*===================================================
*/ 

function operacion(digito1,digito2){
    var resultado = digito1 + digito2
    globales = resultado;
    console.log('resultado es: ',resultado);
    console.log('globales operacion es: ',globales);
};

operacion(5,7);

/*
*===================================================
*=       FUNCIONES CON RETORNO SIN PARAMETRO       =
*===================================================
*/ 
function retorno1(){
    var number = 5;
    return number;
}

console.log(retorno1());


/*
*===================================================
*=       FUNCIONES CON RETORNO CON PARAMETRO       =
*===================================================
*/ 
function retorno2(number){

    return number;
}

console.log(retorno2(25));
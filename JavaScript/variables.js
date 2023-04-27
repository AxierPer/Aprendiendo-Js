/*
*===================================================
*=                       VARIABLES                 =
*===================================================
*/ 

//?Variables numericas
var number = 5;
console.log('Number ',number);

//?Variables de Texto
var string = 'palabaras';
console.log('String ',string);

//?Variables Booleanas
var bool = true;
console.log('I love Mishell',bool);

//?Variables de tipo arreglo(Array)
var colors =['red', 'blue', 'yellow', number, string, bool];
console.log(colors);

//?Variables de tipo objeto(Object) o tipo Json
var juice = {
    fruit: 'Apple',
    edulcorante: 'Suggar',
    liquido: 'milk'
};
console.log('ingredientes del jugo ',juice);

/*
?Variables DOM (Modelo de Objetos del Documento) 
?El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante JavaScript para cambiar dinamicamente los contenidos y aspecto de la pagina.
*/
var caja = document.querySelector("#caja");
console.log('caja ',caja);

caja.style.width = '200px';
caja.style.height = '200px';
caja.style.background = 'blue';

var cajas = document.querySelectorAll(".cajas");
console.log('cajas ',cajas);


/*
*===================================================
*=                                                 =
*===================================================
*/  
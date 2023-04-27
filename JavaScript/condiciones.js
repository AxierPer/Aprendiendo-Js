/*
*===================================================
*=                  CONDICIONES                    =
*===================================================
*/ 
var a = 10;
var b = 10;

if (a > b){
    console.log('a es mayor que b');
}
else if(a < b ){
    console.log('a es mayor que b');
}
else if (a == b){
    console.log('a y b son iguales');
}
else{
    console.log('falta un valor por digitar');
}

/*
*===================================================
*=                     CAMBIOS                     =
*===================================================
*/
var dia = 'lunes';

switch(dia){
    case 'sabado': console.log('voy a estudiar CSS');
    break;

    case 'martes': console.log('voy a estudiar HTML');
    break;

    case 'jueves': console.log('voy a estudiar Angular');
    break;

    case 'domingo': console.log('voy a estudiar NodeJS');
    break;

    default: console.log('voy a estudiar JavaScript');
};
/*
*===================================================
*=                    CICLO FOR                    =
*===================================================
*/

for (var i = 0; i < 5; i++){
    console.log(i);
}

var cajas = document.querySelectorAll('.cajas');
console.log('cajas', cajas)
cajas[0].style.width = '50px'
cajas[0].style.height = '50px'  
cajas[0].style.background = 'red'

for (var i = 0; i < cajas.length; i++){
    cajas[i].style.width = '50px'
    cajas[i].style.height = '50px'  
    cajas[i].style.background = 'red'
    cajas[i].style.marginRight = '10px'
    cajas[i].style.float = 'left'
}


/*
*===================================================
*=                    CICLO WHILE                  =
*===================================================
*/

var n = 0;
while (n < 5) {
    n++
    console.log(n);
}

/*
*===================================================
*=                  CICLO DO WHILE                 =
*===================================================
*/

var p = 1;

do{
    console.log('p',p)
    p++
}
while (p <= 5) {
    
}
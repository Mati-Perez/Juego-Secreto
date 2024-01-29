let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados= [];
let numeroMaximo=10;

condicionesIniciales();

//DOM DOCUMENTO OBJECT MODEL

function verificarIntento(){

   // let numeroDeUsuario=document.querySelector('input');

    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número! En solo ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','Fallaste! El número es menor');
        } else{
            asignarTextoElemento('p','Fallaste! El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
   // let valor caja=document.querySelector('#valorUsuario');
    //valorCaja.value=''; //vacio

    document.querySelector('#valorUsuario').value='';

}

function asignarTextoElemento(elemento,texto){

    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(`Numero generado aleatoriamente: ${numeroGenerado}`);
    console.log(`Lista de numeros: ${listaNumerosSorteados}`);

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Se agotaron todos los numeros posibles');

    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }}



}

function condicionesIniciales(){

    asignarTextoElemento('h1','JUEGO DEL NÚMERO SECRETO!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){

    //limpiar la caja
    limpiarCaja();
    
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);


}

//CNTRL + F BUSCAR LETRA, COMO EN EL PDF
//array.pop() --> elimina el ultimo elemento, asi como array.push agrega
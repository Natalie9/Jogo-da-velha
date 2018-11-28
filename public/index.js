var database = firebase.database();

var cont=1;
var carac='O';
function jogar(event, posicao) {
    var posicao = event.posicao;
    console.log(posicao);
    firebase.database().ref('posicao/' +carac).set(posicao);
    validarUsuario();
    var i;
    for (i = 1; i <= 9; i++) {
        if (posicao == i) {
            document.getElementById(i).innerHTML = carac;
        }
    }   
}
function teste(event, posicao){
    console.log(posicao);
}

function text(event, posicao) {
    var texto = event.value;
    firebase.database().ref('texto/' + cont + '/' +campo).set(texto);
}
function validarUsuario(){
    
    if (cont==1){
        carac ="O";
    }
    else{
        carac ="X";
    }
}

function decrescer(){
    cont = 1;
    document.getElementById('usuario').innerHTML='1';
    validarUsuario();
}
function acrescentar(){
        cont = 2;
    document.getElementById('usuario').innerHTML='2';
    validarUsuario();
}

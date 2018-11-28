// var database = firebase.database();
var cont=1;
var carac;
function jogar() {
    var posicao = document.querySelector("#posicao").value;
    // firebase.database().ref('posicao/' + posicao).set();
    validarUsuario();
    var i;
    for (i = 1; i <= 9; i++) {
        if (posicao == i) {
            document.getElementById(i).innerHTML = carac;
        }
    }

   
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

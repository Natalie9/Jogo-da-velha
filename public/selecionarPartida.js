var database = firebase.database();

var display = document.getElementById("display");

var jogo=1;
var usuario = "";

display.innerHTML = "Sem usuario";

var jogador =1;

function decrescer() {
    if(jogo!=1){
        jogo = 1;
        document.getElementById('jogo').innerHTML = jogo;
    }

}
function acrescentar() {
    jogo ++;
    document.getElementById('jogo').innerHTML = jogo;
}


function decrescerJogador() {
    jogador = 1;
    document.getElementById('jogador').innerHTML = 'X';
}
function acrescentarJogador() {
    jogador = 2;
    document.getElementById('jogador').innerHTML = 'O';
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        usuario = user.email;
        display.innerHTML = "Bem vindo " + usuario;
        
    } else {
        
        display.innerHTML = "Sem jogador logado"
    }
});

function iniciar(){
    firebase.database().ref('Joo ' + jogo + '/Jogador/' + jogador).set(usuario);
    console.log("gravado!");
}

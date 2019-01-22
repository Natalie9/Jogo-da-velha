var database = firebase.database();


var caracter = 'O';

var jogadas = "";
var posicoes = new Array();



var cont = 0;
var display = document.getElementById("display");

var jogador = document.getElementById("jogador");
var jogo = 1;

var usuario = "";

var marcador = new Array();




firebase.auth().onAuthStateChanged(function (user) {
    
    if (user) {
        var user = firebase.auth().currentUser;
        firebase.database().ref('cadastro/' + user.uid + '/nome/').on('value', function (snapshot) {
        display.innerHTML  = "Bem-vindo " + snapshot.val()});
        
    } else {
        display.innerHTML = "Sem jogador logado"
        
    }
});

function verificarPlacar() {
    firebase.database().ref('Jogo ' + jogo + '/Jogadas/').on('value', function (snapshot) {
        marcador = snapshot.val();
        var i;
        for (i = 0; i <= 8; i++) {
            if (marcador[i])
                document.getElementById(i).innerHTML = marcador[i];
            else
                document.getElementById(i).innerHTML = " ";
        }
    });
}


function iniciar() {
    firebase.database().ref('Jogo ' + jogo + '/Jogador/' + jogador).set(usuario);
    window.location.replace("jogo.html");

}

function decrescerJogador() {
    jogador = "O";
    document.getElementById('jogador').innerHTML = 'X';
}
function acrescentarJogador() {
    jogador = "X";
    document.getElementById('jogador').innerHTML = 'O';
}


function jogar(event, posicao) {

    cont++;
    validarUsuario();

    firebase.database().ref('Jogo ' + jogo + '/Jogadas/' + posicao).set(jogador);

    document.getElementById(posicao).innerHTML = marcador[posicao];


    verificarPlacar();
    testarVitoria();
}

function validarUsuario() {
    if (jogador == "O") {
        acrescentarJogador();
    }
    else {
        decrescerJogador();
    }
}
function vencido(mensagem) {
    alert("Fim de jogo! " + mensagem);
    jogo++;
    cont = 0;

    var i;
    for (i = 0; i <= 8; i++) {
        document.getElementById(i).innerHTML = '';
        posicoes[i] = null;
    }
}

function decrescer() {
    if(jogo!=1){
        jogo --;
         document.getElementById('jogo').innerHTML = jogo;
    }
    
}
function acrescentar() {
    jogo++;
    document.getElementById('jogo').innerHTML = jogo;
}

function testarVitoria() {
    var linha, coluna;
    for (linha = 0; linha <= 8; linha = linha + 3) {
        if (posicoes[linha] == posicoes[linha + 1] && posicoes[linha] == posicoes[linha + 2] && posicoes[linha + 1] != null) {
            setTimeout(function () { vencido("Jogador " + caracter + " venceu!"); }, 100);
        }

    }
    for (coluna = 0; coluna <= 8; coluna++) {
        if (posicoes[coluna] == posicoes[coluna + 3] && posicoes[coluna] == posicoes[coluna + 6] && posicoes[coluna] != null) {
            setTimeout(function () { vencido("Jogador " + caracter + " venceu!"); }, 100);
        }
    }
    if (posicoes[0] == posicoes[4] && posicoes[0] == posicoes[8] && posicoes[0] != null) {
        setTimeout(function () { vencido("Jogador " + caracter + " venceu!"); }, 100);
    }
    if (posicoes[2] == posicoes[4] && posicoes[2] == posicoes[6] && posicoes[2] != null) {
        setTimeout(function () { vencido("Jogador " + caracter + " venceu!"); }, 100);
    }
    if (cont == 9) {
        setTimeout(function () { vencido("Empate!"); }, 100);

    }

}
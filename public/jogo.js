var database = firebase.database();

var jogador = 1;
var caracter = 'O';

var jogadas = "";
var posicoes = new Array();

var jogo = 1;

var cont=0; 

    
console.log(usuarioEmail);


function jogar(event, posicao) {
    cont++;
    validarUsuario();   
    posicoes[posicao] = caracter;

    jogadas = posicoes.toString();
   
    firebase.database().ref('Jogo '+ jogo +'/Jogadas/').set(jogadas);
    
    document.getElementById(posicao).innerHTML = caracter;

    testarVitoria();
}

function validarUsuario() {
    if (jogador == 1) {
        acrescentar();
        caracter = "O";
    }
    else {
        caracter = "X";
        decrescer();
    }
}
function vencido(mensagem){
    alert("Fim de jogo! "+ mensagem);
    jogo++;
    cont =0;
   
    var i;
    for(i=0;i<=8;i++){
        document.getElementById(i).innerHTML = '';
        posicoes[i]=null;
    }
}
function decrescer() {
    jogador = 1;
    document.getElementById('usuario').innerHTML = '1';
}
function acrescentar() {
    jogador = 2;
    document.getElementById('usuario').innerHTML = '2';
}

function testarVitoria() {
    var linha, coluna;
    for(linha=0; linha<=8; linha=linha+3){
        if(posicoes[linha]==posicoes[linha+1]&&posicoes[linha]==posicoes[linha+2]&&posicoes[linha+1]!=null){
            setTimeout(function(){ vencido("Jogador " + caracter + " venceu!");}, 100);
        }
        
    }
    for(coluna=0; coluna<=8; coluna++){
        if(posicoes[coluna]==posicoes[coluna+3]&&posicoes[coluna]==posicoes[coluna+6]&&posicoes[coluna]!=null){
            setTimeout(function(){ vencido("Jogador " + caracter + " venceu!");}, 100);
        }
    }
    if(posicoes[0]==posicoes[4]&&posicoes[0]==posicoes[8]&&posicoes[0]!=null){
        setTimeout(function(){ vencido("Jogador " + caracter + " venceu!");}, 100);
    }
    if(posicoes[2]==posicoes[4]&&posicoes[2]==posicoes[6]&&posicoes[2]!=null){
        setTimeout(function(){ vencido("Jogador " + caracter + " venceu!");}, 100);
    }
    if(cont==9){
        setTimeout(function(){ vencido("Empate!"); }, 100);
        
    }

}
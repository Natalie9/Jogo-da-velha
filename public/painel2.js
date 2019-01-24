var database = firebase.database();

var display = document.getElementById("display");
var btnNovaPartida = document.getElementById("partida");



var jogador= "O"

var inputPartida = document.getElementById("inputPartida");



btnNovaPartida.addEventListener('click', function () {
	var user = firebase.auth().currentUser;
	var usuario = user.uid
	var part = inputPartida.value
	console.log(usuario)
	firebase.database().ref('jogos/' + inputPartida.value).child(user.uid).set({
			jogador: jogador,
		});
	firebase.database().ref('jogadores/' + usuario + '/partida/').set(part);
	//window.location.replace("jogo.html");
})


function decrescerJogador() {
	jogador = "X";
	document.getElementById('jogador').innerHTML = 'X';
}
function acrescentarJogador() {
	jogador = "O";
	document.getElementById('jogador').innerHTML = 'X';
}
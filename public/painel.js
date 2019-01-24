var database = firebase.database();


var display = document.getElementById("display");
var btnNovaPartida = document.getElementById("partida");

var nickname





firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		console.log("idd: "+user.uid)
		buscarnick(user.uid);
		setTimeout(imprimir, 6000);


	} else {
		console.log("nops")
	}
});

function imprimir() {
	display.innerHTML  = "Bem-vindo " + nickname
}

function buscarnick(id){

	firebase.database().ref('jogadores/' + id + '/nickname').on('value', function (snapshot) {
		console.log(snapshot.val()+" 2")
		nickname = snapshot.val()
		return snapshot.val()
	});
	
}



btnNovaPartida.addEventListener('click', function () {


	inputEmailconvite = prompt("Digite o nickname para convite:");

	firebase.database().ref('cadastro/' + inputEmailconvite + '/id').on('value', function (snapshot) {
		console.log("console convite " + snapshot.val())
		buscarnick(snapshot.val())
		firebase.database().ref('jogadores/' +  snapshot.val() + '/convite/' + nickname).set(true)
		
	}
	)



	


});


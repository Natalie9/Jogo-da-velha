var inputEmail = document.getElementById("inputEmail");
var inputSenha = document.getElementById("inputSenha");

var btnLogin = document.getElementById("btnLogin");
var btnCadastrar = document.getElementById("btnCadastrar");
//TODO resgatar nome quando se cadastra pelo google

var display = document.getElementById("display");

var usuario = new Object();
var usuarioEmail;

var nome;



firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		usuario = user.email;
	} else {
		display.innerHTML = "Sem jogador logado"
	}
});

function cadastrar(){

	
}
btnCadastrar.addEventListener('click', function (){

	inputNome = prompt("Digite seu nickname:");


	firebase.auth().createUserWithEmailAndPassword(inputEmail.value, inputSenha.value).then((newUser) => {
		var user = firebase.auth().currentUser;
		var usuario = user.uid
		
		firebase.database().ref('cadastro/').child(inputNome).set({
			email: inputEmail.value,
			id: user.uid
		});
		console.log("usu: "+usuario)
		firebase.database().ref('jogadores/').child(usuario).set({
			email: inputEmail.value,
			nickname: inputNome,
			partida: "nenhuma"
		});
		
	});

	
	display.innerHTML = "Bem vindo " + inputNome;
	setTimeout(proximaPagina, 10000);

		

	});
function proximaPagina(){
	window.location.replace("painel2.html");
}



btnLogin.addEventListener('click', function () {
	firebase
	.auth()
	.signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
	.then(function () {
		var user = firebase.auth().currentUser;
		display.innerHTML = "Bem vindo " + inputEmail.value;

		window.location.replace("painel2.html");
	})
	.catch(function (error) {
		console.error(error.code);
		console.error(error.message);
		alert("Falha ao logar, verifique o erro no console");
	});

})






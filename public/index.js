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


btnCadastrar.addEventListener('click', function () {

    inputNome = prompt("DIgite seu nome:");

    firebase.auth().createUserWithEmailAndPassword(inputEmail.value, inputSenha.value).then((newUser) => {
        var user = firebase.auth().currentUser;
        firebase.database().ref('cadastro/').child(user.uid).set({
            email: inputEmail.value,
            nome: inputNome
        });
        display.innerHTML = "Bem vindo " + inputNome;
        //window.location.replace("jogo.html");
    });


});

btnLogin.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
        .then(function () {
            var user = firebase.auth().currentUser;
            display.innerHTML = "Bem vindo " + inputEmail.value;
            
            window.location.replace("jogo.html");
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert("Falha ao logar, verifique o erro no console");
        });

})






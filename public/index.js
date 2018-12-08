var inputEmail = document.getElementById("inputEmail");
var inputSenha = document.getElementById("inputSenha");

var btnLogin = document.getElementById("btnLogin");
var btnCadastrar = document.getElementById("btnCadastrar");
var btnGoogle = document.getElementById("btnGoogle");

var display = document.getElementById("display");

var usuario = new Object();
var usuarioEmail;


btnCadastrar.addEventListener('click', function () {
   
    firebase
        .auth()
        .createUserWithEmailAndPassword(inputEmail.value, inputSenha.value)
        .then(function () {
            display.innerHTML="Bem vindo "+ inputEmail.value;
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert("Falha ao cadastrar, verifique o erro no console");
        });

});

btnLogin.addEventListener('click', function(){
    firebase
    .auth()
    .signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
    .then(function () {
        display.innerHTML="Bem vindo "+ inputEmail.value;
        usuario.email= inputEmail.value;
        usuarioEmail= inputEmail.value;
        window.location.replace("jogo.html");
    })
    .catch(function (error) {
        console.error(error.code);
        console.error(error.message);
        alert("Falha ao logar, verifique o erro no console");
    });

})


btnGoogle.addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    singIn(provider);})

function singIn(provider){
    firebase 
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
        console.log(result);
        var token = result.credential.acessToken;
        display.innerHTML="Bem vindo "+ result.user.display;
    })
    .catch(function (error) {
        console.error(error.code);
        alert("Falha na autenticação");
    });
}
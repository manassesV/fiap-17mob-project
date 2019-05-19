var button = document.getElementById("cadastrar");
var voltar = document.getElementById("voltarcadastrar");
var login = document.getElementById("login");
var cadastraruser = document.getElementById("cadastraruser");
var sair = document.getElementById("sair");


//Configurar firebase
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqYDl9R3OOBMUAqfnPcqz6uILztYUWY8k",
    authDomain: "project-f2368.firebaseapp.com",
    databaseURL: "https://project-f2368.firebaseio.com",
    projectId: "project-f2368",
    storageBucket: "project-f2368.appspot.com",
    messagingSenderId: "582357917478",
    appId: "1:582357917478:web:f5131418e2f9c868"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (button != null) {
    button.addEventListener("click", function () {
        window.location = "cadastrar.html"
    });
}

if (voltar != null) {
    voltar.addEventListener("click", function () {
        window.location = "index.html"
    });
}


if (login != null) {
    login.addEventListener('click', function () {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        console.log(email)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (firebaseUser) {
                window.location = "principal.html" 
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    });
}

if (cadastraruser != null) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    cadastraruser.addEventListener('click', function () {
        firebase.auth().createUserWithEmailAndPassword(email, password) .then(function (firebaseUser) {
            window.location = "principal.html" 
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    });
}


if (sair != null) {
    sair.addEventListener('click', function () {
        firebase.auth().signOut().then(function() {
            window.location = "index.html";
          }).catch(function(error) {
            alert(error);
          });
    });
}
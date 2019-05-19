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

var home = document.getElementById("home");
var voltar = document.getElementById("sair");


var app = {
    initialize: function () {
        document.addEventListener('deviceready', () => {
            console.log(navigator.camera);
        }, false);
    }
};

document.getElementById('camera').addEventListener('click', () => {
    let options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 720,
        correctOrientation: true
    }

    takePicture(options)
})

var takePicture = (options) => {
    navigator.camera.getPicture((image_data) => {

        var nomecompleto = document.getElementById("nomecompleto").value;
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: nomecompleto,
            photoURL: "gs://project-f2368.appspot.com/image.jpeg"
        }).then(function () {
            console.log(nomecompleto);
        }).catch(function (error) {
            console.log(error);

        });

        var image = document.getElementById('image');
        image.src = "data:image/jpeg;base64," + image_data;

        var storageRef = firebase.storage().ref();

        const uploadTastk = firebase.storage().ref().child(nomecompleto  + '.jpeg')
            .putString(image_data, 'base64', { contentType: 'image/jpeg' })
        uploadTastk.then(
            (response) => {
                alert("Upload do nome e imagem com sucesso");
            },
            (failedReason) => {
                alert("Erro ao fazero upload");

            }
        )
    },
        (error) => {
            console.log(error)
        }, options)
}

if (voltar != null) {
    voltar.addEventListener("click", function () {
      window.location = "index.html"
    });
  }
  
  


if (home != null) {
    home.addEventListener("click", function () {
        window.location = "principal.html"
    });
}




app.initialize();
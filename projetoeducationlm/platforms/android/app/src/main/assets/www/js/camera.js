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

        var image = document.getElementById('image');
        image.src = "data:image/jpeg;base64," + image_data;
    
        var blob = new Blob(image_data.blob, {type: 'image/jpeg'});
            enviarFirebase(blob, nombreParaGuardar);
    },
        (error) => {
            console.log(error)
        }, options)
}

function enviarFirebase(file, nombre) {
    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('images/' + nombre).put(file);
    uploadTask.on('state_changed', function (snapshot) {
        console.info(snapshot);
    }, function (error) {
        console.error(error);
    }, function () {
        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log(downloadURL);
    });
}




app.initialize();
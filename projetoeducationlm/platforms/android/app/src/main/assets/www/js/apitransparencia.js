var sair = document.getElementById("sair");
var editar = document.getElementById("editar");
var voltar = document.getElementById("sair");

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api-pacientes.herokuapp.com/pacientes', true)

request.onload = function () {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(dados => {
      var newRow = $("<tr>");
      var cols = "";

      cols += '<td>' + dados.nome + '</td>';

      cols += '<td>' + dados.peso + '</td>';

      cols += '<td>' + dados.altura + '</td>';

      cols += '<td>' + dados.gordura + '</td>';

      cols += '<td>' + dados.imc + '</td>';

      newRow.append(cols);

      $("#products-table").append(newRow);
    })
  } else {
    console.log('error')
  }


}


// Send request
request.send()

if (voltar != null) {
  voltar.addEventListener("click", function () {
    window.location = "index.html"
  });
}


if (editar != null) {
  editar.addEventListener("click", function () {
    window.location = "edit.html"
  });
}


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    var users = document.getElementById("user");
    users.innerText = user.displayName;

    var storageRef = firebase.storage().ref();

    const image = storageRef.child(user.displayName +'.jpeg');
    const urlPromise = image.getDownloadURL();
    urlPromise.then(url => {
      document.getElementById("imagem").src = url;
    })

  } else {
    console.log("erro");
  }
});
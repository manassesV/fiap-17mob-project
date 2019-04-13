
var $ = document;

 $.getElementById('login').addEventListener
 ('click', function(){

    alert($.getElementById("first_name").value)
    alert($.getElementById("last_name").value)
    cordova.plugins.firebase.auth.createUserWithEmailAndPassword("manavitorino@gmail.com",
     "pa55w0rd");

 })
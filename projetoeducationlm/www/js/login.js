
var $ = document;

 $.getElementById('login').addEventListener
 ('click', function(){

    var email = $.getElementById("first_name")
    var password = $.getElementById("last_name")
    var lbemail = $.getElementById("lbemail")
    var lbpassword = $.getElementById("lbpassword")
    var contErro = 0;


    if(email.value == ""){
		lbemail.innerHTML = "Favor preencher o Email";
		lbemail.style.display = 'block';
		contErro += 1;
	}else{
		lbemail.style.display = 'none';
	}
 
    
    if(password.value == ""){
		lbpassword.innerHTML = "Favor preencher a Senha";
		lbpassword.style.display = 'block';
		contErro += 1;
	}else{
		lbpassword.style.display = 'none';
    }
    
    if(contErro == 0){

        firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorCode+errorMessage);
            // ...
          });
    }


 })
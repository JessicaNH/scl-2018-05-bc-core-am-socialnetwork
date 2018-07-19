
//validacion datos de Usuario
function logInOrRegister( ){
  if ($("#email").val() == "") {
    alert("ingresa el email!!!");
    return;
  }

  if ($("#password").val() == "") {
    alert("ingresa la password!!!");
    return;
  }

  authenticate();
}

//authenticacion de mail y password
function authenticate(){
    console.log("cualquier cosa");
    const emailValue = email.value;
    const passwordValue = password.value; 
  
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
          console.log("Usuario registrado");
      })
      .catch((error)=>{
          console.log("Error de firebase > "+error.code);
          console.log("Error de firebase, mensaje > "+error.message);
      });      
  }


//authenticacion con google y facebook
var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

$('#logingoogle').click(function(){
  firebase.auth()
  .signInWithPopup(providerGoogle)
  .then(function(result){
    console.log(result.user);
  });
});

$('#loginfacebook').click(function(){
  providerFacebook.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth()
  .signInWithPopup(providerFacebook)
  .then(function(result){
    console.log(result.user);
  });
});

//data base


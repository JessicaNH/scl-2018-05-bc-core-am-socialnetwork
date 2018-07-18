

  function logInOrRegister(){
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
  firebase.auth()
  .signInWithPopup(providerFacebook)
  .then(function(result){
    console.log(result.user);
  });
});

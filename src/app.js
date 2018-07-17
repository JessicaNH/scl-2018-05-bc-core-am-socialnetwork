window.onload = ()=>{

  function register(){
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


var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();

$('#logingoogle').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result){
    console.log(result.user);
  });
});
}
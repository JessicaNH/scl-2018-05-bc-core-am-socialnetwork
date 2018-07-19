
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

//database firebase
// Usaremos una colección para guardar los mensajes, llamada messages
function sendMessage(){
  const currentUser = firebase.auth().currentUser;
  const messageAreaText = messageArea.value;

  //Para tener una nueva llave en la colección messages
  const newMessageKey = firebase.database().ref().child('messages').push().key;

  firebase.database().ref(`messages/${newMessageKey}`).set({
      creator : currentUser.uid,
      //aqui iria un receptor...a quien le quiero enviar el mensaje
      creatorName : currentUser.displayName,
      text : messageAreaText
  }).then(()=>{
    console.log("Mensaje se guardò")
  }).catch(
    (error)=>{
      console.error("Error al guardar mensaje", error)
    }
  );
}


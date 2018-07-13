var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();

$('#logingoogle').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result){
    console.log(result.user);
  });
});

/*
  const auth = firebase.auth();
  function signUp(event){
    event.preventDefault();
console.log("blala")
      var email = document.getElementById("#email", "#email2");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed up")
  }
*/


let signUp = document.querySelector("#signUp");
let email= document.querySelector("#email");
let password= document.querySelector("#password")
  signUp.addEventListener('click', function (event) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function (result) {
      console.log("ccc")
        window.location.replace('../index.html');
        window.location.href = ("../index.html");
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});


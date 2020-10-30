  let btnLogin = document.querySelector("#login");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");


btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function (result) {
        window.location.replace('./homePage.html');
        window.location.href = ("./homePage.html");
        

    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });

});


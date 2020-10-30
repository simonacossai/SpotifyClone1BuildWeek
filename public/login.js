let btnLogin = document.querySelector("#login");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(function (result) {
      loginSuccesfull();
      window.location.replace('./homePage.html');
      window.location.href = ("./homePage.html");
      

  }).catch(function (error) {
      loginNotSuccesfull()
     
  });

});

loginSuccesfull = () => {
  let getBalloon = document.querySelector(".addRemove");
  getBalloon.innerText = "Succesfull Login"
      getBalloon.classList.remove("d-none");
}
loginNotSuccesfull = () =>{
  let getBalloon = document.querySelector(".fail");
  getBalloon.innerText = "Wrong Password/Name"
      getBalloon.classList.remove("d-none");
      setTimeout(function () {
          getBalloon.classList.add("d-none");
        }, 3000);
};
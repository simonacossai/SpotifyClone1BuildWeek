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
    getBalloon.classList.add("bg-success")
    getBalloon.style = "color:white; text-align:center"
        getBalloon.classList.remove("d-none");
}
loginNotSuccesfull = () =>{
    let getBalloon = document.querySelector(".addRemove");
    getBalloon.innerText = "Wrong Password/Name"
    getBalloon.classList.add("bg-danger")
    getBalloon.style = "color:white; border-color: red;text-align:center"
        getBalloon.classList.remove("d-none");
        setTimeout(function () {
            getBalloon.classList.add("d-none");
          }, 3000);
};
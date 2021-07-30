var logInBtn = document.getElementById("logInBtn");

function login (){
    axios.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        headers:{
            "Content-Type": "application/json"
        },
        data: {
            email:"eve.holt@reqres.in",
            password: "cityslicka"
        }
    }).then(loginSuccess).catch(loginError);
}

function loginSuccess(response){
    console.log(response);
    Cookies.set('token', response.data.token);
    window.location = "pages/home.html";
}

function loginError(error){
    console.error(error);
    alert("Login invalid. Try again")
}


logInBtn.addEventListener("click", login);
axios.request({
    method: "GET",
    url: "https://reqres.in/api/unknown"
}).then(getSuccess).catch(getError);

// Color Info display
// created loop to go through each item in response object
// created div to hold items and added to parent element
function getSuccess(response){
    console.log(response);
    if( Cookies.get("token") != undefined){
        let loginMessage = document.createElement('div');
        loginMessage.innerHTML = "Welcome!"
        document.body.appendChild( loginMessage);
        for(i=0; i<response.data.data.length; i++){
            let colorInfo = document.createElement('div');
            colorInfo.innerHTML = response.data.data[i].name +" "+ response.data.data[i].year;
            let colorBox = document.createElement('div');
            colorBox.style.width = "25px";
            colorBox.style.height = "25px";
            colorBox.style.backgroundColor = response.data.data[i].color;
            colorInfo.appendChild(colorBox);
            document.body.appendChild(colorInfo);
        } 
        let logout = document.createElement('button');
        logout.innerHTML = "Logout";
        document.body.appendChild(logout);
        logout.addEventListener("click", loggingOut)
    }else {
        let failMessage = document.createElement('div');
        failMessage.innerHTML = "You are not logged in"
        document.body.appendChild(failMessage);
        let backToLogin = document.createElement('button');
        backToLogin.innerHTML = "Go Back";
        failMessage.appendChild(backToLogin);
        backToLogin.addEventListener("click", returnToLogin);
    }
    
}

function getError(error){
    console.error(error);
}

function redirectToLogin (){
    let isLoggedIn = true;
    if (isLoggedIn !== true){
        redirect
    }
}

function returnToLogin (){
    window.location = "../index.html";
}

function loggingOut (){
    Cookies.remove("token");
    returnToLogin();
}
    



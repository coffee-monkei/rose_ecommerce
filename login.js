const USER_LOG = {
    email: "zimmmer22@gmail.com",
    password: "chamito222"
};
function login (){
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;

    console.log(password);
    console.log(email);
    console.log(USER_LOG.password);
    console.log(USER_LOG.email);
    console.log(typeof email);
    console.log(typeof USER_LOG.email);

    
    if(password === USER_LOG.password && email === USER_LOG.email){
        localStorage.setItem("password", USER_LOG.password)
        localStorage.setItem("email", USER_LOG.email)
        console.log("email y contraseña correctos");
       window.location.href = "index.html";

    }else{
        alert("Incorrecto")
        password.value = "";
        email.value = "";
        
    }
    
}
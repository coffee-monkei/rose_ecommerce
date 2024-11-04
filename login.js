const USER_LOG = {
    email: "zimmmer22@gmail.com",
    password: "chamito222",
    loggedIn: "true",
};
function login (event){
    event.preventDefault();
    
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;

    console.log(password);
    console.log(email);
    console.log(USER_LOG.password);
    console.log(USER_LOG.email);
    
    
    if(password === USER_LOG.password && email === USER_LOG.email){
        localStorage.setItem("password", USER_LOG.password);
        localStorage.setItem("email", USER_LOG.email);
        localStorage.setItem("loggedIn", USER_LOG.loggedIn);
      localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", "0");

        console.log("email y contraseña correctos");

        window.location.href="index.html";
}



    else{
        alert("Correo o contraseña incorrectos")
        localStorage.setItem("loggedIn", "false")
        password.value = "";
        email.value = "";
        
    }
    
}


const autoredirect = () => {
    
    if (localStorage.getItem("loggedIn") === "true") {
        
        window.location.href = "index.html";
    }
};
document.querySelector("form").addEventListener("submit", login);

// Llama a la función de redirección automática al cargar la página
autoredirect();



    let divnav = document.querySelector(".navbarlog");
    console.log(localStorage.getItem(USER_LOG.email));


divnav.innerHTML = `
<nav>
<ul>
    ${localStorage.getItem("email") ? 
    `<li> Hola, ${USER_LOG.email}  </li> | <li><a href="#" onclick="logout()">Cerrar sesión</a></li> <li><a href="cart.html" id="Lista">
     <img class="cartimg" src="https://i.pinimg.com/564x/0d/d6/55/0dd655584c4f03cfeb369cb8c28212d2.jpg"> </a><b>${localStorage.getItem("quantity")} </b></li>` :
                    `<li><a href="login.html"><span class="colortexto">Iniciar sesión</span></a></li>`
    }</ul>
</nav>
`





function logout(){
    localStorage.clear()
    window.location.href="index.html";
}
    
    

    
    
    
    
    
    
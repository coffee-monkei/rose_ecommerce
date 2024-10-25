

    let divnav = document.querySelector(".navbarlog");
    console.log(localStorage.getItem(USER_LOG.email));


divnav.innerHTML = `
<nav>
<ul>
    ${localStorage.getItem("email") ? 
    `<li> Hola, ${USER_LOG.email}  </li> | <li><a href="#" onclick="logout()">Cerrar sesión</a></li>` :
                    `<li><a href="login.html"><span class="colortexto">Iniciar sesión</span></a></li>`
    }</ul>
</nav>
`





function logout(){
    localStorage.clear()
    window.location.href="index.html";
}
    
    
    
    
    
    
    
    
    
    
    
    
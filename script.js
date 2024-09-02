console.log("Fresas con crema!");



const titulos = document.querySelectorAll("h3");

titulos.forEach((titulo, index) => {
    if (index === 0) {
        
        titulo.innerText = "velas comestibles";
    } else if (index === 1) {
       
        titulo.innerText = "cloro para los ojos";
    } else if (index === 2) {
        
        titulo.innerText = "hacha de raskolnikoff";
    }
    
});

const descripciones = document.querySelectorAll("p");

descripciones.forEach((descripcion, index) => {
    if (index === 0) {
        
        descripcion.innerText = "¿que nunca has mirado a tu vela con ojos hambrientamente esperanzadores?";
    } else if (index === 1) {
       
        descripcion.innerText = "no apto para ojos azules";
    } else if (index === 2) {
        
        descripcion.innerText = "la misma que uso para descapitar a la vieja arrendera";
    }
    
});

const imagenes = document.querySelectorAll("img");

imagenes.forEach((img, index) => {
    if (index === 0) {
        
        img.src = "https://i.pinimg.com/564x/bf/44/f0/bf44f00a0b4511ec4ce8515d09c60df8.jpg";
    } else if (index === 1) {
       
        img.src = "https://i.pinimg.com/564x/cd/51/3c/cd513c550f8efe54fb903da5e3b3f7f1.jpg";
    } else if (index === 2) {
        
        img.src = "https://i.pinimg.com/564x/e5/79/40/e57940368d4fbf30eac5a80405eda816.jpg";
    }
    
});


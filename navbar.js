/*
Crear un archivo navbar.js que contendrá el navbar que se usará en todas las páginas.
En navbar.js crear un array con tres categorías de nuestro e commerce. Ej: pantalones, remeras, zapatillas o las que quieran.
Crear marcado HTML introduciendo los tres valores del array y asignarlo a la variable menú usando for … of.
En las páginas index.html y producto.html crear una etiqueta <header />.
Agregar el script navbar.js en las páginas.
En navbar.js asignar la variable menu al innerHTML del header.

*/

  

let shop
 = [

    {nombre: "mermeladas", precio: "$200"}
    ,
    {nombre: "velas", precio:"$170"}

    ,

    {nombre: "stickers de animalitos", precio: "$100"}
    ,
 ]
 
    



 let productos= [];

for (let menu of shop){
   let nuevoProducto=

    ` 
    <a href="#">${menu.nombre}</a>
    
    `

    productos.push(nuevoProducto);
}

document.querySelector("header").innerHTML =  productos;
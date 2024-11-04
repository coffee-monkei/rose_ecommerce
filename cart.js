// Selecciona el enlace
const miEnlace = document.getElementById("Lista");

// Agrega el evento

if (miEnlace){
    console.log("hi");
    
    miEnlace.addEventListener("click", function(event) {
        event.preventDefault();
        // Previene el comportamiento predeterminado del enlace
        
        if (localStorage.getItem("loggedIn") === "true"){
            
            window.location.href="cart.html"

            


        }
        
    
        
    });
    

} 

function autoredirect(){
    if (localStorage.getItem("loggedIn") !== "true" && window.location.href===cart.html){
            
        window.location.href="index.html"

    }

}

autoredirect();



brownie=JSON.parse(localStorage.getItem("cart"));
console.log(brownie);

cards= document.getElementById("cards");

bmo= brownie.map((item) =>
`
<div class="card border shadow-none">
      <div class="card-body">
       <div class="d-flex align-items-start border-bottom pb-3">
        <div class="me-4">
         <img
          src="${item.producto.img}"
          alt="${item.producto.title}"
          class="avatar-lg rounded"
         />
        </div>
        <div class="flex-grow-1 overflow-hidden">
         <h5 class="text-truncate font-size-18">${item.producto.title}</h5>
         <div class="row">
          <div class="col-md-4">
           <div class="mt-3"> 
            <p class="text-muted mb-2">Precio</p>
            <h5 class="mb-0 mt-2">${item.producto.price}</h5>
           </div>
          </div>
          <div class="col-md-5">
           <div class="mt-3">
            <p class="text-muted mb-2">Cantidad</p>
            <h5 class="mb-0 mt-2">${item.quantity}</h5>
           </div>
          </div>
          <div class="col-md-3">
           <div class="mt-3">
            <p class="text-muted mb-2">Total</p>
            <h5 id="totall">${item.quantity * item.producto.price}</h5>
           </div>
          </div>
         </div>
        </div>
  <div>
        <button class="btn" id="${item.producto.title}" onclick="eliminar(this)"> eliminar producto</button>
        </div>
       </div>
             
      </div>`

)


cards.innerHTML = bmo.join("");  


// Seleccionamos todas las etiquetas h5 dentro del div
const h5Elements = cards.querySelectorAll("h5#totall");

// Sumamos los valores de cada h5
const total = Array.from(h5Elements).reduce((sum, h5) => {
    // Convertimos el contenido de cada h5 a número y lo sumamos
    return sum + Number(h5.textContent);
}, 0);

console.log(Array.from(h5Elements));
console.log(total);


mango= document.getElementById("total");
mango.innerHTML=`      <div class="col-sm-6">
       <button class="btn">Seguir comprando</button>
      </div>
      <div class="col-sm-6">
       <div class="text-sm-end mt-2 mt-sm-0">
        <button id="borrar" class="btn" onclick="vaciar()">vaciar el carrito</button>
       </div>
      </div>
     </div>
    </div>
    <div class="col-xl-4">
     <div class="mt-5 mt-lg-0">
      <div class="card border shadow-none">
       <div class="card-header bg-transparent border-bottom py-3 px-4">
        <h5 class="font-size-16 mb-0">Orden de Compra</h5>
       </div>
       <div class="card-body p-4 pt-2">
        <div class="table-responsive">
         <table class="table mb-0">
          <tbody>
           <tr class="bg-light">
            <th>Total :</th>
            <td class="text-end">
             <span class="fw-bold"> ${total} </span>
            </td>
           </tr>
          </body>
         </table>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>`

   //eliminar un producto y vaciar el carrito

   function eliminar(elemento){

console.log(elemento.id);
    const keep=brownie.filter((producto)=> producto.producto.title !== elemento.id);
    const producto=brownie.find((producto)=> producto.producto.title === elemento.id);

   
    eliminar= producto.quantity
    newQuantity=localStorage.getItem("quantity");

    newQuantity= newQuantity - eliminar ;
    localStorage.setItem("quantity", newQuantity);

    localStorage.setItem("cart", JSON.stringify(keep))
    

    location.reload();

   




    
   }


   function vaciar(){
    localStorage.setItem("cart", JSON.stringify([]));
    location.reload();
    localStorage.setItem("quantity", 0);

   }
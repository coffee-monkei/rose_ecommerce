


const titulo= "Productos"
 document.querySelector("h1").innerText = titulo;
 

    



function sprint() {

  



  let data = [{
     id: 1,
     title: "mermelada frutos rojos",
     detail: "Disfruta el sabor auténtico de nuestra mermelada artesanal, hecha con frutas frescas y 100% naturales.",
     img: "https://i.pinimg.com/564x/0f/d2/5f/0fd25fec5fed4d0752862d0ecc9cac84.jpg",
     price: 66,
     stock: 85
   }, {
     id: 2,
     title: "mug galleta de jengibre",
     detail: "ideal para acompañar momentos festivos o simplemente disfrutar de una bebida caliente.",
     img: "https://i.pinimg.com/564x/bd/10/b7/bd10b7ef891d5da3600895b08acb7fe5.jpg",
     price: 3,
     stock: 38
   }, {
     id: 3,
     title: "choco lyne",
     detail: "polvo para bebida de chocolate reducido en azúcar",
     img: "https://i.pinimg.com/564x/a7/eb/9c/a7eb9c4d824e93a4bfbce270736547f6.jpg",
     price: 70,
     stock: 81
   }, {
     id: 4,
     title: "Mug BMO",
     detail: "Mug hora de aventura de cerámica pintada a mano, 15oz",
     img: "https://i.pinimg.com/564x/57/d6/87/57d687a8141f9b0859b5de9dba19e5d3.jpg"
     ,
     price: 6,
     stock: 53
   }, {
     id: 5,
     title: "Mug princesa grumosa",
     detail: "Mug hora de aventura de cerámica pintada a mano, 15oz",
     img: "https://i.pinimg.com/564x/f0/1f/e6/f01fe60bfb9b51409f46b0cce241efaa.jpg",
     price: 4,
     stock: 19
   }, {
     id: 6,
     title: "Mug cazafantasmas",
     detail: "Mug cazafantasmas blanca de cerámica, 20oz",
     img: "https://i.pinimg.com/564x/b4/d7/99/b4d799956bff4d3f1e12e6dcdb5623f0.jpg",
     price: 4,
     stock: 73
   }, {
     id: 7,
     title: "Mug erizo",
     detail: "Mug de cerámica, 15oz, portagalletas",
     img: "https://i.pinimg.com/564x/71/59/fd/7159fd4153139a421910458022f41ae4.jpg",
     price: 74,
     stock: 63
   }, {
     id: 8,
     title: "molde para galletas feto",
     detail: "",
     img: "https://i.pinimg.com/564x/81/d0/eb/81d0ebcd8ad8e4c5e029ae0678c1fd5c.jpg",
     price: 94,
     stock: 19
   }, {
     id: 9,
     title: "camisa monesvol festiva",
     detail: "camisa negra de algodón talla G y M",
     img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e9df3f1-0e34-4c20-94b4-06b708eb8bd8/d8m1tsc-6fba1b56-dc8d-477d-9208-6fa250895750.jpg/v1/fit/w_828,h_968,q_70,strp/camiseta_monesvol_by_creativosebasdp_d8m1tsc-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5NyIsInBhdGgiOiJcL2ZcLzZlOWRmM2YxLTBlMzQtNGMyMC05NGI0LTA2YjcwOGViOGJkOFwvZDhtMXRzYy02ZmJhMWI1Ni1kYzhkLTQ3N2QtOTIwOC02ZmEyNTA4OTU3NTAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DfEzl1Jr4ocAP9xYnbpVWLe0D7Syi3Ye25Mn2zNcFyw",
     price: 35,
     stock: 33
   }];


  const container= document.querySelector("section");

  const cards = data.map((producto) =>
    
    `<div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="${producto.title}">
    <div class="card-body">
      <h5 class="card-title"> ${producto.title}</h5>
      <p class="card-text">${producto.detail}</p>
       <p>${producto.price}</p>
       <p>${producto.stock}</p>
      
    
     <a href="producto.html?prod=${producto.id}" >Ver más</a>
      

    </div> 
    </div>`);
  container.innerHTML = cards.join("");

  

};

sprint()

/*
Asignar data.map a la variable que habíamos asignado antes un array vacío, implementando las propiedades de los objetos del array en el marcado.
Reemplazar los valores del array a gusto.

En los ver más de la Home, en el <a href, luego de .html poner ?prod=${producto.id}
Usar el array de Mockaroo en producto.js asignandolo a la variable data.
Filtrarlo por el número de producto obtenido con window.location.
Lograr que el producto mostrado cambie dependiendo del número de producto en la URL.


*/
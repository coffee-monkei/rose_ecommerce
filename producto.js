class producto{
    constructor(titulo, detalle, precio, stock, imagen){
      
      this.titulo=titulo;
      this.detalle=detalle;
      this.precio=precio;
      this.stock=stock;
      this.imagen=imagen;
  
    }
  }
  
  const MyCard= new producto("mercedes mango compacto suv", "color mango de una semana", "$800,000", 4, "https://external-preview.redd.it/uz7ncWMQ2orvzbz5CT5pgIHVsJ7Xs4o0OCaYiUTpw5Q.jpg?auto=webp&s=0da9ef37da608cadd4d4d3e18013e96c45660ea7" )
 

  let main = document.querySelector('main');
main.innerHTML = `
    <div class="card">
        <img src="${MyCard.imagen}" alt="${MyCard.titulo}">
        <div class="card-body">
            <h1 >${MyCard.titulo}</h1>
            <p>${MyCard.detalle}</p>
            <p>Precio: $${MyCard.precio}</p>
            <p>Stock: ${MyCard.stock} unidades disponibles</p>
            <a href="index.html" class="btn btn-primary" > Comprar</a>
        </div>
    </div>
`;

  
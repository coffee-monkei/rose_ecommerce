
const titulo= "Productos"
 document.querySelector("h1").innerText = titulo;
 





function MyCards () {
let cards= [];

for (let i=1; i<=9; i++) {
    let card = 
    `<div class="card" style="width: 18rem;">
    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="carro${i}">
    <div class="card-body">
      <h5 class="card-title">modelo ${i}</h5>
      <p class="card-text">único en existencia</p>
      <button> ver más </button>
    </div>
  </div>`
    

 cards.push(card); //Añade la tarjeta generada en cada iteración (card) al arreglo cardsArray.
       
    

    
} 


document.querySelector(".container").innerHTML = cards.join().replaceAll(",", "");

}

MyCards();
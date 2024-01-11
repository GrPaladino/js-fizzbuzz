// - creare un ciclo for per creare dei div da 1 a 100;
// - creare un consol.log per vederli in console;
// - creare la formula per cambiare il contenuto dell'elemento in base al numero;
// - creare l'elemento html e il suo stile in cui creare i box;
// - recuperarlo in js;
// - stampare i box nell'elemento html;
// - applica gli stili differenti a seconda del valore inserito.
const boxContainer = document.getElementById("box-container");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");

  let textBox = i;

  if (i % 15 == 0) {
    textBox = "Fizzbuzz";
  } else if (i % 5 == 0) {
    textBox = "Buzz";
  } else if (i % 3 == 0) {
    textBox = "Fizz";
  }

  boxElement.innerHTML += `
  <div class="box"> 
  <h3>
  ${textBox}
  </h3>
  </div>`;

  boxContainer.append(boxElement);
}

// - recuperare elemento in js;
const boxContainer = document.getElementById("box-container");

// - creare la formula per cambiare il contenuto dell'elemento in base al numero;
for (let i = 1; i <= 100; i++) {
  let textBox = i;

  if (i % 15 == 0) {
    textBox = "FizzBuzz";
  } else if (i % 5 == 0) {
    textBox = "Buzz";
  } else if (i % 3 == 0) {
    textBox = "Fizz";
  }
  // - creare elemento html da inserire;
  boxContainer.innerHTML += `
  <div class="box ${textBox}"> 
    <h3>
        ${textBox}
    </h3>
  </div>`;

  // - creare un consol.log per vederli in console;
  console.log(textBox);
}

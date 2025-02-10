const btn = document.querySelector(".btn");
const tabellineBox = document.querySelector(".tabelline");

function tabellina(n) {
  let message = "";

  for (let i = 0; i <= 10; i++) {
    message += `Tabellina del ${n} ➡ ${n} x ${i} = ${n * i} \n`;
  }
  tabellineBox.textContent = message;
}

btn.addEventListener("click", function () {
  const inputBox = document.querySelector(".box-form input").value;
  const number = parseInt(inputBox);

  if (!isNaN(number)) {
    tabellina(number);
  } else {
    tabellineBox.textContent = " ⚠ Inserisci un numero";
  }
});

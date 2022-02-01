var numeroSecreto = parseInt(Math.random() * 11);
// o numero secreto será mantido o mesmo até o próximo run, pois o var está fora da função

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns! Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
  } else {
    elementoResultado.innerHTML = "Você errou :/";
  }
}

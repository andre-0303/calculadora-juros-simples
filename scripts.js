function calcularJuros() {
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value);
  const tempo = parseInt(document.getElementById("tempo").value);

  if (
    isNaN(capital) ||
    isNaN(taxa) ||
    isNaN(tempo) ||
    capital <= 0 ||
    taxa <= 0 ||
    tempo <= 0
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Fórmula do Juros Simples: J = C * i * t
  const juros = capital * (taxa / 100) * tempo;
  const montante = capital + juros;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Juros: R$ ${juros.toFixed(
    2
  )}<br> Montante: R$ ${montante.toFixed(2)}`;
  resultado.style.display = "block";
}

function limpar() {
  document.getElementById("capital").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("tempo").value = "";
  const resultado = document.getElementById("resultado");
  resultado.style.display = "none";
  resultado.innerHTML = "";
}

let valor = document.getElementById("valor");
let prazo = document.getElementById("prazo");
let juros = document.getElementById("juros");
let tbody = document.querySelector("tbody");

function calcular() {
  let acumulado = valor.valueAsNumber;
  let prazoMeses = prazo.valueAsNumber * 12;
  let jurosAoAno = juros.valueAsNumber;
  let jurosAoMes = (1 + jurosAoAno) ** (1 / 12) - 1;
  let amortizacao = acumulado / prazoMeses;
  document.getElementById("prazoMeses").valueAsNumber = prazoMeses;
  document.getElementById("jurosAoMes").valueAsNumber = jurosAoMes;

  for (let p = 0; p < 5; p++) {
    // p = prestação
    let devendo = acumulado - p * amortizacao;
    let jurosPrestacao = devendo * jurosAoMes;
    let tr = tbody.children[p];
    tr.children[1].textContent = amortizacao.toFixed(2);
    tr.children[2].textContent = jurosPrestacao.toFixed(2);
    tr.children[3].textContent = (amortizacao + jurosPrestacao).toFixed(2);
  }

  let totalJuros = 0;
  for (var p = 0; p < prazoMeses; p++) {
    let devendo = acumulado - p * amortizacao;
    let jurosPrestacao = devendo * jurosAoMes;
    totalJuros = totalJuros + jurosPrestacao;
  }
  document.getElementById("acumulado").value = totalJuros.toFixed(2);
}

calcular();

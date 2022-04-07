const relogio = document.querySelector("#relogio");
const btnIniciar = document.querySelector("#iniciar");
const btnPausar = document.querySelector("#pausar");
const btnZerar = document.querySelector("#zerar");
let segundos = 0;
let timer;

function obterHoraPorSegundos(segundos) {
  let data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = obterHoraPorSegundos(segundos);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
    iniciarRelogio();
  }

  if (el.classList.contains("pausar")) {
    pausaRelogio();
  }

  if (el.classList.contains("zerar")) {
    zeraRelogio();
  }
});

function iniciarRelogio() {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  iniciaRelogio();
}

function pausaRelogio() {
  relogio.classList.add("pausado");
  clearInterval(timer);
}

function zeraRelogio() {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = "00:00:00";
}

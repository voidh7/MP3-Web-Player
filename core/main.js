const buttonEl = document.getElementById("btn");
const pointsEl = document.getElementById("pontos");
const timeEl = document.getElementById("time");

let pointsPlayer = 0;
let time = 30;
let timerId = null;


function render() {
  pointsEl.innerHTML = pointsPlayer;
  timeEl.innerHTML = time;
}


function startTimer() {
  timerId = setInterval(() => {
    time--;

    if (time <= 0) {
      clearInterval(timerId);
      buttonEl.disabled = true;
      buttonEl.innerHTML = "o tempo acabou"
      pointsPlayer = 0
      time = 0;
    }

    render();
  }, 1000);
}


buttonEl.addEventListener("click", () => {
  if (time > 0) {
    pointsPlayer++;
    render();
  }
});


render();
startTimer();

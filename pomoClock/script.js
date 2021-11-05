
const time = document.querySelector("#pomodoro-timer");

const startButton = document.querySelector(".btn-start");
const startButtonBreak = document.querySelector(".btn-start-break")
const pauseButton = document.querySelector(".btn-pause");
const pauseButtonBreak = document.querySelector(".btn-pause-break")
const resetButton = document.querySelector(".btn-reset");
const resetButtonBreak = document.querySelector(".btn-reset-break")

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const minutesBreak = document.querySelector(".minBreak");
const secondsBreak = document.querySelector(".secsBreak");


const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModalBreak = document.querySelector(".close-modal-break")
const modalBreak = document.querySelector(".modal-break");
const overlayBreak = document.querySelector(".overlay-break");

let isClockRunning = false;

let min = 25;
let secs = 00;
let interv;

const countdown = () => {
  secs--;
  if (secs < 0) {
    secs = 59;
    min--;
  }
  if (min < 0) {
    min = 0;
    secs = 0;
    pauseButton.classList.add("hidden");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    clearInterval(interv)
  }

  let secondsText = secs;
  if (secs < 10) {
    secondsText = "0" + secs;
  }

  let minutesText = min;
  if (min < 10) {
    minutesText = "0" + min;
  }

  minutes.innerText = minutesText;
  seconds.innerText = secondsText;
};


const timer = () => {
  interv = setInterval(countdown, 1000);
  isClockRunning = true;
  startButton.classList.add("hidden");
  pauseButton.classList.remove("hidden");
};

const pause = () => {
  clearInterval(interv);
  isClockRunning = false;
  minutes.innerText = min;
  seconds.innerText = secs;
  startButton.classList.remove("hidden");
  pauseButton.classList.add("hidden");
};

const reset = () => {
  clearInterval(interv);
  isClockRunning = false;
  min = 25;
  secs = 00;
  minutes.innerText = 25;
  seconds.innerText = "0" + 0;
  startButton.classList.remove("hidden");
  pauseButton.classList.add("hidden");
};

startButton.addEventListener("click", timer);

pauseButton.addEventListener("click", pause);

resetButton.addEventListener("click", reset);






//BREAK TIMER



let minBreak = 05;
let secsBreak = 00;
let intervBreak;

const countdownBreak = () => {
  secsBreak--;
  if (secsBreak < 0) {
    secsBreak = 59;
    minBreak--;
  }
  if (minBreak < 0) {
    minBreak = 0;
    secsBreak = 0;
    pauseButtonBreak.classList.add("hidden");
    modalBreak.classList.remove("hidden");
    overlayBreak.classList.remove("hidden");
    clearInterval(intervBreak)
    
  }

  let secondsTextBreak = secsBreak;
  if (secsBreak < 10) {
    secondsTextBreak = "0" + secsBreak;
  }

  let minutesTextBreak = minBreak;
  if (minBreak < 10) {
    minutesText = "0" + minBreak;
  }


  minutesBreak.innerText = minutesTextBreak;
  secondsBreak.innerText = secondsTextBreak;
};


const timerBreak = () => {
  intervBreak = setInterval(countdownBreak, 1000);
  isClockRunning = true;
  startButtonBreak.classList.add("hidden");
  pauseButtonBreak.classList.remove("hidden");
};

const pauseBreak = () => {
  clearInterval(intervBreak);
  isClockRunning = false;
  minutesBreak.innerText = minBreak;
  secondsBreak.innerText = secsBreak;
  startButtonBreak.classList.remove("hidden");
  pauseButtonBreak.classList.add("hidden");
};

const resetBreak = () => {
  clearInterval(intervBreak);
  isClockRunning = false;
  minBreak = 05;
  secsBreak = 00;
  minutesBreak.innerText = 05;
  secondsBreak.innerText = "0" + 0;
  startButtonBreak.classList.remove("hidden");
  pauseButtonBreak.classList.add("hidden");
};

startButtonBreak.addEventListener("click", timerBreak);
pauseButtonBreak.addEventListener("click", pauseBreak);
resetButtonBreak.addEventListener("click", resetBreak);



//MODAL


const closeModal = btnCloseModal.addEventListener("click", function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden")
});

const closeModalBreak = btnCloseModalBreak.addEventListener("click", function() {
  modalBreak.classList.add("hidden");
  overlayBreak.classList.add("hidden");
});

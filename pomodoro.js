// script.js
let time = 25 * 60; // 25 minutes
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      alert("⏰ Time's up! Take a break!");
      isRunning = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 25 * 60;
  isRunning = false;
  updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();

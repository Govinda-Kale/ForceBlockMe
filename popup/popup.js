// popup.js

// Timer and Session Variables
let timerInterval;
let focusTime = 25 * 60;
let remainingTime = focusTime;
let isActive = false;
let isPaused = false;
let sessionType = 'study';
let blockedSites = [];
let blockCategories = {};

// DOM Elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const categorySelectors = document.querySelectorAll('.category-toggle');
const focusModeButtons = document.querySelectorAll('.focus-mode');

// Timer Functions
function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isActive) return;
  isActive = true;
  isPaused = false;
  timerInterval = setInterval(() => {
    if (remainingTime <= 0) {
      completeSession();
      return;
    }
    remainingTime--;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  isActive = false;
  remainingTime = focusTime;
  updateTimerDisplay();
}

function completeSession() {
  alert('Session Complete!');
  resetTimer();
}

// Category Blocking
function toggleCategory(category) {
  blockCategories[category] = !blockCategories[category];
  updateBlockList();
}

function updateBlockList() {
  blockedSites = [];
  for (let category in blockCategories) {
    if (blockCategories[category]) {
      blockedSites = [...blockedSites, ...getSitesByCategory(category)];
    }
  }
  saveBlockList();
}

// User Interactions
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

categorySelectors.forEach((btn) => {
  btn.addEventListener('click', () => toggleCategory(btn.dataset.category));
});

focusModeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    sessionType = btn.dataset.type;
    focusTime = getPresetTime(sessionType);
    resetTimer();
  });
});

// Initialization
updateTimerDisplay();

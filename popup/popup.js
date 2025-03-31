document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timerDisplay');
    const startButton = document.getElementById('startTimer');
    const pauseButton = document.getElementById('pauseTimer');
    const resetButton = document.getElementById('resetTimer');
    const presetTimers = document.getElementById('presetTimers');
    const customTimeInput = document.getElementById('customTimeInput');
    const setCustomTimeButton = document.getElementById('setCustomTime');
    const customTimer = document.getElementById('customTimer');
    const addCustomSiteButton = document.getElementById('addCustomSite');
    const customSiteInput = document.getElementById('customSiteInput');
    const customSiteList = document.getElementById('customSiteList');

    let timerInterval;
    let focusTime = 25 * 60;
    let remainingTime = focusTime;
    let isActive = false;
    let isPaused = false;

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

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    presetTimers.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            customTimer.classList.remove('hidden');
        } else {
            customTimer.classList.add('hidden');
            focusTime = parseInt(e.target.value) * 60;
            resetTimer();
        }
    });

    setCustomTimeButton.addEventListener('click', () => {
        const customTime = parseInt(customTimeInput.value);
        if (customTime >= 5 && customTime <= 120) {
            focusTime = customTime * 60;
            resetTimer();
        } else {
            alert('Please enter a valid time between 5 and 120 minutes.');
        }
    });

    addCustomSiteButton.addEventListener('click', () => {
        const siteUrl = customSiteInput.value.trim();
        if (siteUrl) {
            const listItem = document.createElement('li');
            listItem.textContent = siteUrl;
            customSiteList.appendChild(listItem);
            customSiteInput.value = '';
        }
    });

    updateTimerDisplay();
});

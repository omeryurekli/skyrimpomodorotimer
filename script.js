let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = '00';
let isPaused = true;
let timerInterval;

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

function startPause() {
    if (isPaused) {
        // Start or resume the timer
        document.getElementById('startPause').innerHTML = '<i class="fa-solid fa-pause"></i>';
        document.getElementById('reset').style.display = "block";
        startTimer();
        isPaused = false;
    } else {
        // Pause the timer
        document.getElementById('startPause').innerHTML = '<i class="fa-solid fa-play"></i>';
        clearInterval(timerInterval);
        isPaused = true;
    }
}

function startTimer() {
    let currentMode = 'work'; // Can be 'work' or 'break'
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let seconds = 59;

    const timerFunction = () => {
        document.getElementById('minutes').innerHTML = (currentMode === 'work' ? workMinutes : breakMinutes);
        document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;

            if (currentMode === 'work') {
                if (workMinutes > 0) {
                    workMinutes--;
                } else {
                    currentMode = 'break';
                    workMinutes = workTime - 1;
                    breakMinutes = breakTime - 1;
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }
            } else {
                if (breakMinutes > 0) {
                    breakMinutes--;
                } else {
                    currentMode = 'work';
                    workMinutes = workTime - 1;
                    breakMinutes = breakTime - 1;
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
        }
    };

    timerInterval = setInterval(timerFunction, 1000); // 1000 = 1s
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById('startPause').innerHTML = '<i class="fa-solid fa-play"></i>';
    document.getElementById('reset').style.display = "none";
    isPaused = true;
    workTittle.classList.add('active');
    breakTittle.classList.remove('active');
}

// Settings Modal Functions
function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
    let workDuration = document.getElementById('workDuration').value;
    let breakDuration = document.getElementById('breakDuration').value;

    workTime = parseInt(workDuration);
    breakTime = parseInt(breakDuration);

    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = '00';

    closeSettings();
}

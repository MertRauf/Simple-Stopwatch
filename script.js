let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const lapButton = document.getElementById("lap");
const resetButton = document.getElementById("reset");
const lapList = document.getElementById("lapList");
const colorSelect = document.getElementById("colorSelect");

// Format time in HH:MM:SS.mmm
function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = Math.floor((ms % 1000));

    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
        .toString()
        .padStart(3, "0")}`;
}

// Update the stopwatch display
function updateTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

// Change the color palette
function changeColorPalette(palette) {
    document.body.className = `gradient gradient-${palette}`;
    console.log(`Color palette changed: ${palette}`);
}

// Start/Stop button event listener
startStopButton.addEventListener("click", () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        startStopButton.textContent = "Stop";
        lapButton.disabled = false;
        display.classList.add("running");
        isRunning = true;
    } else {
        clearInterval(timerInterval);
        startStopButton.textContent = "Start";
        lapButton.disabled = true;
        display.classList.remove("running");
        isRunning = false;
    }
});

// Lap button event listener
lapButton.addEventListener("click", () => {
    if (isRunning) {
        lapCount++;
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement("div");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapList.scrollTop = lapList.scrollHeight;
    }
});

// Reset button event listener
resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    lapCount = 0;
    display.textContent = "00:00:00.000";
    startStopButton.textContent = "Start";
    lapButton.disabled = true;
    display.classList.remove("running");
    lapList.innerHTML = "";
});

// Color palette selection event listener
colorSelect.addEventListener("change", () => {
    changeColorPalette(colorSelect.value);
});

// Consolidated keyboard shortcuts
document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "Space":
            event.preventDefault();
            startStopButton.click();
            break;
        case "KeyL":
            if (isRunning) {
                lapButton.click();
            }
            break;
        case "KeyR":
            resetButton.click();
            break;
    }
});

// Disable lap button initially
lapButton.disabled = true;

// Load initial color palette
changeColorPalette("canli");
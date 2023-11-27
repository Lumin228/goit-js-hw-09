const refs = {
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
    bodyMain: document.querySelector('body'),
}

refs.startButton.addEventListener('click', colorStart);
refs.stopButton.addEventListener('click', colorStop);


let intervalId; // To store the interval ID for later use

function colorStop(){
    clearInterval(intervalId);
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
}
function colorStart() {
    setBodyColor(getRandomHexColor())
    intervalId = setInterval(() => setBodyColor(getRandomHexColor()), 1500);
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function setBodyColor(color) {
    refs.bodyMain.style.backgroundColor = color;
}
// variables
const startingText = document.getElementById("starting-text");
const startBtn = document.getElementById("start-button");
const batteryLight = document.getElementById("battery-light");
const batteryLabel = document.getElementById("battery-label")

// delaying event handlers so start up animation can finish
let startingDelayFinsihed = false;

const delayFinished = () => {
    startingDelayFinsihed = true
}

const startingDelay = setTimeout(delayFinished, 4500);

// functions
const startUp = () => {
    startingText.style.display = "none";
}

// event handlers
startBtn.addEventListener("click", () => {
    if(startingDelayFinsihed === true) {
        startUp()
    }
})

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && startingDelayFinsihed === true) {
        startUp()
    }
})
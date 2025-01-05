const startingText = document.getElementById("starting-text");
const startBtn = document.getElementById("start-button");


let startingDelayFinsihed = false;

const delayFinished = () => {
    startingDelayFinsihed = true
}

const startingDelay = setTimeout(delayFinished, 4500);


const startUp = () => {
    startingText.style.display = "none";
}

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
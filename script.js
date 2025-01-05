const startingText = document.getElementById("starting-text");
const startBtn = document.getElementById("start-button");



startBtn.addEventListener("click", () => {
    startingText.style.display = "none";
})

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        startingText.style.display = "none";
    }
})
// variables
const startingText = document.getElementById("starting-text");
const startBtn = document.getElementById("start-button");
const batteryLight = document.getElementById("battery-light");
const batteryLabel = document.getElementById("battery-label");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input")
const gameBoyBody = document.getElementById("game-boy-body");

// delaying event handlers so start up animation can finish
let startingDelayFinsihed = false;

const delayFinished = () => {
    startingDelayFinsihed = true
}

const startingDelay = setTimeout(delayFinished, 4500);

// functions
const startUp = () => {
    startingText.classList.add("hidden");
    searchForm.classList.remove("hidden");
    gameBoyBody.style.zoom = "220%";
}

const pokemonSearch = () => {
    
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
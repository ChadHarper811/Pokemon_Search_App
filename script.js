// variables
const startingText = document.getElementById("starting-text");
const startBtn = document.getElementById("start-button");
const batteryLight = document.getElementById("battery-light");
const batteryLabel = document.getElementById("battery-label");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const sprite = document.getElementById("sprite-container");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hpTotal = document.getElementById("hp-total");
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
const infoTop = document.getElementById("info-top");
const infoBottomLeft = document.getElementById("info-bottom-left");
const infoBottomRight = document.getElementById("info-bottom-right");

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

const pokemonSearch = async () => {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const respose = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
        );
        const data = await respose.json();

        // top info
        sprite.innerHTML = `
        <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite"> 
        `;
        pokemonId.textContent = `${data.id}`;
        pokemonName.textContent = `${data.name.toUpperCase()}`;
        height.textContent = `Height: ${data.height}`;
        weight.textContent = `Weight: ${data.weight}`;
        
        // bottom left info
        hpTotal.textContent = `${data.stats[0].base_stat}/   `;
        hp.textContent = `${data.stats[0].base_stat}`
        types.innerHTML = data.types.map(obj => `<span class="type">${obj.type.name.toUpperCase()}</span>`).join(" ");

        // bottom right info
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        
        infoTop.classList.remove("hidden");
        infoBottomLeft.classList.remove("hidden");
        infoBottomRight.classList.remove("hidden");
    } catch (error) {
        clearDisplay();
        alert('Pokémon not found');
        console.log(`Pokémon not found: ${error}`);
    }
};

const clearDisplay = () => {
    infoTop.classList.add("hidden");
    infoBottomLeft.classList.add("hidden");
    infoBottomRight.classList.add("hidden");

    // top info clear
    const sprite = document.getElementById("sprite");
    if (sprite) sprite.remove();

    pokemonName.textContent = "";
    pokemonId.textContent = "";
    height.textContent = "";
    weight.textContent = "";

    // bottom right info clear
    hp.textContent = "";
    hpTotal.textContent = "";
    types.innerHTML = "";
    
    // bottom left info clear
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
};

// event handlers
startBtn.addEventListener("click", () => {
    if(startingDelayFinsihed === true) {
        startUp()
    }
});

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && startingDelayFinsihed === true) {
        startUp()
    }
});

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    pokemonSearch();
});

// Dino Data provided by Udacity in dino.json file

function dinoData() {
    const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ];
    return dinos;
}

// Create Dino Constructor
function Dino (dino_data) {
    this.species = dino_data.species;
    this.weight = dino_data.weight;
    this.height = dino_data.height;
    this.diet = dino_data.diet;
    this.where = dino_data.where;
    this.when = dino_data.when;
    this.fact = dino_data.fact;
}
// Create Dino Objects
function dinoObjectBuilder() {
    const dinos = dinoData();
    const dinoObjects = [];

    dinos.forEach(function(dino) {
        dinoObjects.push(new Dino(dino));
    });

    return dinoObjects;
}

// ?? Should dinoArray and human be moved inside a function in refactoring?
const dinoArray = dinoObjectBuilder();

// Use IIFE to get human data from form
// Wrap event listeners within IIFE to grab data when submitted
const human = (function getHumanData() {
    const humanData = {};
    const button = document.getElementById('btn');

    document.addEventListener('DOMContentLoaded', function () {
        button.addEventListener('click', function(e) {
            humanData.name = document.getElementById('name').value;
            humanData.height = document.getElementById('feet').value * 12 + document.getElementById('inches').value;
            humanData.weight = document.getElementById('weight').value;
            humanData.diet = document.getElementById('diet').value;
            humanData.diet = humanData.diet.toLowerCase();
        })
    })
    return humanData;
})();

// Function to format numbers with thousands separators
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// Create method within Dino prototype to compare weight of Dino and human
// NOTE: Weight is in lbs 
Dino.prototype.compareWeight = function (humanWeight) {
    if (this.weight > humanWeight) {
        return `The ${this.species} weighs ${formatNumber((this.weight - humanWeight).toFixed(0))} lbs more than you!`;
    } else if (this.weight < humanWeight) {
        return `You weigh ${formatNumber((humanWeight - this.weight).toFixed(0))} lbs more than the ${this.species}`;
    } else {
        return `You weigh the same as the ${this.species}`;
    }
}
    
// Create method within Dino prototype to compare height of Dino and human
// NOTE: Height is in inches.
Dino.prototype.compareHeight = function (humanHeight) {
    const heightFactor = (this.height / humanHeight).toFixed(1);

    if (heightFactor > 1) {
        return `The ${this.species} is ${formatNumber(heightFactor)}x taller than you!`;
    } else if (heightFactor < 1) {
        return `You are ${formatNumber(1 / heightFactor)}x taller than the ${this.species}`;
    } else {
        return `You are the same height as ${this.species}`;
    }
}
    
// Create method in Dino prototype to compare diets of Dino and human
Dino.prototype.compareDiet = function (humanDiet) {
    const article1 = this.diet === 'omnivore' ? 'an' : 'a';
    const article2 = humanDiet === 'omnivore' ? 'an' : 'a';

    if (this.diet === humanDiet) {
        return `The ${this.species} is ${article1} ${this.diet} like you!`;
    } else {
        return `You are ${article2} ${humanDiet}, but the ${this.species} is ${article1} ${this.diet}`;
    }
}

// Generate random integer between two values, inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

// Generate Tiles for each Dino in Array
function generateTile(dinoData, humanData) {
    // Select fact about dino to display
    // Pigeon should alway display the same fact as a constant
    const dinoFact = "";
    const randomInt = dinoData.species === "Pigeon" ? 5 : getRandomIntInclusive(0, 5);

    switch(randomInt) {
        case 0:
            dinoFact = dinoData.compareWeight();
            break;
        case 1:
            dinoFact = dinoData.compareHeight();
            break;
        case 2:
            dinoFact = dinoData.compareDiet();
            break;
        case 3:
            dinoFact = `The ${dinoData.species} lived in ${dinoData.where}.`;
            break;
        case 4:
            dinoFact = `The ${dinoData.species} lived in the ${dinoData.when} period.`
            break;
        case 5:
            dinoFact = dinoData.fact;
            break;
        default:
            dinoFact = "Dinosaurs dominated the world!";
    }

    // Add tiles to DOM
    const newTile = document.createElement('div');
    newTile.className = 'grid-item';
    newTile.innerHTML = `<h3>${dinoData.species}</h3><img src="images/${(dinoData.species.toLowerCase())}.png" alt="image of ${dinoData.species}"><p>${dinoFact}</p>`;
    return newTile;
}

// Remove form from screen


// On button click, prepare and display infographic

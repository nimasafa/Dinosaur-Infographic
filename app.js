
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
            "height": 372,
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

    //Mark a placeholder at midpoint of dinoObjects array for human
    //Ensures placement of human tile at center of infographic
    dinoObjects.splice(4, 0, 'human');

    return dinoObjects;
}

// Get human data from form
function getHumanData() {
    const humanData = {};

    humanData.name = document.getElementById('name').value;
    humanData.height = Number(document.getElementById('feet').value) * 12 + Number(document.getElementById('inches').value);
    humanData.weight = Number(document.getElementById('weight').value);
    humanData.diet = document.getElementById('diet').value;
    humanData.diet = humanData.diet.toLowerCase();

    return humanData;
}

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
        return `The ${this.species} is ${(heightFactor)}x taller than you!`;
    } else if (heightFactor < 1) {
        return `You are ${(1 / heightFactor).toFixed(1)}x taller than the ${this.species}`;
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

// Randomize array in-place using Durstenfeld shuffle algorithm -- to be used on dino array
// Keep 4th item in array in place for human placeholder
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            if (i != 4 && j != 4) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
    }
}

// Generate Tiles for each Dino in Array
function generateDinoTile(dinoData, humanData) {
    // Select fact about dino to display
    // Pigeon should alway display the same fact as a constant
    let dinoFact = "";
    const randomInt = dinoData.species === "Pigeon" ? 5 : getRandomIntInclusive(0, 5);

    switch(randomInt) {
        case 0:
            dinoFact = dinoData.compareWeight(humanData.weight);
            break;
        case 1:
            dinoFact = dinoData.compareHeight(humanData.height);
            break;
        case 2:
            dinoFact = dinoData.compareDiet(humanData.diet);
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

// Add tile for Human to DOM
function generateHumanTile(humanData) {
    const newTile = document.createElement('div');
    newTile.className = 'grid-item';
    newTile.innerHTML = `<h3>${humanData.name}</h3><img src="images/human.png" alt="image of human">`;

    return newTile;
}

// Remove form from screen
function removeForm() {
    document.querySelector('form').style.display = 'none';
}

// Validate the form data to ensure the data is acceptable and complete
function errorMessage(humanData) {
    if (humanData.name === "") {
        window.alert('Please enter a valid name.');
        return false;
    } else if (humanData.height < 1) {
        window.alert('Please enter a valid height.');
        return false;
    } else if (humanData.weight < 1) {
        window.alert('Please enter a valid weight.');
        return false;
    } else {
        return true;
    }
}

// Prepare and display infographic
function displayGraphic(dinoData, humanData) {
    if (errorMessage(humanData) === true) {
        removeForm();

        const grid = document.getElementById('grid');
        let fragment = new DocumentFragment();
        
        //Cycle through dino and human objects to generate tiles
        for (let i=0; i<9; i++) {
            let tile = i === 4 ? generateHumanTile(humanData) : generateDinoTile(dinoData[i], humanData);
            fragment.appendChild(tile);
        }

        //Append fragment with tiles to grid on the DOM
        grid.appendChild(fragment);
    }  
}

// IIFE that displays infographic with comparisons on button click
(function main() {
    const button = document.getElementById('btn');

    document.addEventListener('DOMContentLoaded', function () {
        button.addEventListener('click', function () {
                const human = getHumanData();
                const dinoArray = dinoObjectBuilder();
                shuffleArray(dinoArray);
                displayGraphic(dinoArray, human);
            })
    })
})();
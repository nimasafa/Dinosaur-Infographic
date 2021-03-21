
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
        dinoObjects.push(new Dino(dino_data));
    });

    return dinoObjects;
}

    // Use IIFE to get human data from form
    // Wrap event listeners within IIFE to grab data when submitted
const human = (function getHumanData() {
    const humanData = {};

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('btn').addEventListener('click', function(e) {
            humanData.name = document.getElementById('name').value;
            humanData.height = document.getElementById('feet').value * 12 + document.getElementByID('inches').value;
            humanData.weight = document.getElementById('weight').value;
            humanData.diet = document.getElementById('diet').value;
        })
    })
    return humanData;
})();


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

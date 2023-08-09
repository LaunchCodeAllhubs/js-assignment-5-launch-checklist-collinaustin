// Write your helper functions here!
require('isomorphic-fetch');

// pass in Mission Target div location and planet array
function addDestinationInfo(document, chosenPlanet) {
    const missionTarget = document.getElementById("missionTarget");
    
    missionTarget.innerHTML = `

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${chosenPlanet.name}</li>
                    <li>Diameter: ${chosenPlanet.diameter}</li>
                    <li>Star: ${chosenPlanet.star}</li>
                    <li>Distance from Earth: ${chosenPlanet.distance}</li>
                    <li>Number of Moons: ${chosenPlanet.moons}</li>
                </ol>
                <img src="${chosenPlanet.image}">
            `;
}

function validateInput(testInput) {
//   check that all fields are NOT empty
    if (testInput === ""){
        return "Empty";
    }
// check that pilot and co pilot are strings
    if (isNaN(Number(testInput))){
        return "Not a Number";
    }
// Check if fuel and cargo are valid numbers
    if(!isNaN(Number(testInput))){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // return values of validate input
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoMassValidation = validateInput(cargoLevel);

    // DOM element references
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    // Alert if empty fields
    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoMassValidation === "Empty"){
        alert("All fields are required!");
        return;
    }
    // Alert if invalid information in form
    else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelLevelValidation === "Not a Number" || cargoMassValidation === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        return;
    }
    // Update pilot and copilot status
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // check fuel level
    if (fuelLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    }   else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
    // check cargo level
    if (cargoLevel > 10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    }   else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    // update if both conditions are true
    if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
    } 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

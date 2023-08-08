// Write your helper functions here!
require('isomorphic-fetch');

// Reference objects for global scope





function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoMassValidation = validateInput(cargoLevel);
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    // Alert if empty fields
    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoMassValidation === "Empty"){
        alert("All fields are required!");
    }
    // Alert if invalid information in form
    else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelLevelValidation === "Not a Number" || cargoMassValidation === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    }
    // Update pilot and copilot status
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // check fuel level
    if (fuelLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
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
        launchStatus.innerHTML = "Shuttle Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
    } 
}

async function myFetch() {
    let planetsReturned;

    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    //Extract JSON data from response object
    planetsReturned = await response.json();
    //Return JSON
    return planetsReturned;
}


function pickPlanet(planets) {
    // let planets = myFetch;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

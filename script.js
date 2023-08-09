// Write your JavaScript code here!

window.addEventListener("load", function () {
    console.log("page loaded");
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        const chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet);
    })

    // parameter references for formSubmission
    const testForm = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");

    testForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });


});


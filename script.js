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
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    console.log("hellohi");

    // 

    const testForm = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");

    testForm.addEventListener("submit", function (event) {
        console.log(list);
        event.preventDefault();
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        console.log("formSubmission function called.");
        console.log("pilot:", pilot.value);
        console.log("copilot:", copilot.value);
        console.log("fuelLevel:", fuelLevel.value);
        console.log("cargoLevel:", cargoLevel.value);
    });


});


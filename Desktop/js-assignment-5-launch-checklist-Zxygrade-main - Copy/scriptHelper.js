// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let div = document.getElementById("missionTarget");
  div.innerHTML =`
     
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
    
}

function validateInput(testInput) {
    let numberTest = Number(testInput)
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(numberTest)) {
        return "Not a number"
    } else if(isNaN(numberTest) === false) {
        return "Is a number"

    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let mainPilot = document.getElementById("pilotStatus");
    let fuel = document.getElementById("fuelStatus");
    let wingman = document.getElementById("copilotStatus");
    let cargo = document.getElementById("cargoStatus");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(cargoLevel) === "Empty" || validateInput(fuelLevel) === "Empty") {
        alert("All FIELDS REQUIRED!");
    }
    else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(cargoLevel) === "Not a number" || validateInput(fuelLevel) === "Not a Number") {
        alert("Check Forms, INCORRECT DATA TYPES SUBMITTED!");
    } else {
        list.style.visibility = "visible";
        mainPilot.innerHTML = `Pilot ${pilot} is ready for launch`;
        wingman.innerHTML = `Copilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "Fuel level too low to launch";
            cargo.innerHTML = "Cargo level too high for launch";
            launchStatus.innerHTML = "Shuttle NOT Ready to Launch";
            launchStatus.style.color = "red";
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuel.innerHTML = "Fuel level too low to launch";
            cargo.innerHTML = "Cargo level low enough to launch";
            launchStatus.innerHTML = "Shuttle NOT Ready to Launch";
            launchStatus.style.color =" red";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "Enough fuel for launch";
            cargo.innerHTML = "Cargo level too high for launch";
            launchStatus.innerHTML = "Shuttle NOT Ready to Launch";
            launchStatus.style.color = "red";
        } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            fuel.innerHTML = "Enough fuel for launch";
            cargo.innerHTML = "Cargo low enough for launch";
            launchStatus.innerHTML = "Shuttle IS Ready to Launch";
            launchStatus.style.color = "green";
        };
    };
 }
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
   let index = Math.floor(Math.random()*planets.length)
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

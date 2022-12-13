// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
      listedPlanetsResponse.then(function (result) {
          listedPlanets = result;
          console.log(listedPlanets);
      }).then(function () {
          console.log(listedPlanets);
          // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
          let destination = pickPlanet(listedPlanets)
          addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image)
      })

   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form");
   //console.log(form)
   form.addEventListener("submit", function (event) {
      //console.log("It works")   
      event.preventDefault();

      let pilotInput = document.querySelector("input[name= pilotName]");
      let pilot = pilotInput.value;
      let copilotInput = document.querySelector("input[name= copilotName]");
      let copilot = copilotInput.value;
      let fuelInput = document.querySelector("input[name= fuelLevel]");
      let fuelLevel = fuelInput.value;
      let cargoInput = document.querySelector("input[name= cargoMass]");
      let cargoLevel = cargoInput.value;

       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
  }
     
);

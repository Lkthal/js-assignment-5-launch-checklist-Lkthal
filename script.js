// Write your JavaScript code here!

window.addEventListener("load", function() {
  console.log('before const');

  const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoLevel = document.querySelector("input[name=cargoMass]");
         console.log('scriptjs');

         formSubmission(document, pilotName, copilotName, fuelLevel, cargoLevel);
         // alert(`The following value are: ${pilotName},${copilotName}, ${fuelLevel}, ${cargoLevel}`);
      });

   // let listedPlanets;
   // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   // let listedPlanetsResponse;
   // listedPlanetsResponse.then(function (result) {
   //     listedPlanets = result;
   //     console.log(listedPlanets);
   // }).then(function () {
   //     console.log(listedPlanets);
   //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   // })


});

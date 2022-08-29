// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML =
   `
         <h2>Mission Destination</h2>
         <ol>
              <li>Name: ${name}</li>
              <li>Diameter: ${diameter}</li>
              <li>Star: ${star}</li>
              <li>Distance from Earth: ${distance}</li>
              <li>Number of Moons: ${moons}</li>
          </ol>
          <img src="${imageUrl}">
          `


};


function validateInput(testInput) {

   if(isNaN(testInput)){
     return "Not a Number"
   }
    else if(typeof testInput === 'string' && testInput.length === 0){
     return "Empty"
   }
   else if(!isNaN(testInput)){
     return "Is a Number"
   }
}

function formSubmission(document, pilotName, copilotName, fuelLevel, cargoLevel) {
          let form = document.querySelector("form");

         if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
            alert("All fields are required!");
         }
         else if(validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number"){
           alert("Enter only letters");

          }
         else if(validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
           alert("Enter only Numbers");
         }
         else{
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("pilotStatus").innerHTML = pilotName.value;
           document.getElementById("copilotStatus").innerHTML = copilotName.value;
           if(fuelLevel.value <= 10000 || cargoLevel.value >= 10000){
             document.getElementById("faultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
             document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
             if(fuelLevel.value <= 10000){
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
             }
             else if(cargoLevel.value >= 10000){
               document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
             }
             else{
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
             }
           }
           else{
              document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
              document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
            }
         }
      }


      async function myFetch() {
        let planetsReturned;
        await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
          response.json().then(function(planetsReturned){
            const missionTarget = document.getElementById('missionTarget');
            const index = Math.floor(Math.random() * planetsReturned.length - 1);

            missionTarget.innerHTML = `
            <ol>
            <li>Name: ${planetsReturned[index].name}</li>
            <li>Diameter: ${planetsReturned[index].diameter}</li>
            <li>Star: ${planetsReturned[index].star}</li>
            <li>Distance from Earth: ${planetsReturned[index].distance}</li>
            <li>Number of Moons: ${planetsReturned[index].moons}</li>
            </ol>
            <img src="${planetsReturned[index].image}">
            `;
          });
        });
      }

// function pickPlanet(planets) {
//
//     const index = Math.floor(Math.random() * json.length - 1);
// };

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

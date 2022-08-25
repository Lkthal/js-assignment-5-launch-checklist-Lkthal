// Write your helper functions here!
require('isomorphic-fetch');

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
           alert("All type are correct");
         }
      }


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;

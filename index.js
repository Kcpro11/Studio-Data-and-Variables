// FORK this starter file and save it to your own R

// Declare and initialize the 12 variables here:

const input = require('readline-sync');
let astronautCount = input.question('Please enter the number of astronauts going on the mission: ');
//let astronautCount = 7
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = '-225 C';
let fuelLevel = "100%";
let weatherStatus = "clear";
let dashline = "-------------------------------------";

// Write code to generate the LC04 report here:
console.log(dashline);
console.log('> LC04 - LAUNCH CHECKLIST');
console.log(dashline);
console.log('Date: ' + date);
console.log('Time: ' + time);
console.log();
console.log(dashline);
console.log('> ASTRONAUT INFO')
console.log(dashline)
console.log('* count: ' + astronautCount)
console.log('* status: ' + astronautStatus);
console.log();
console.log(dashline);
console.log('> FUEL DATA');
console.log(dashline);
console.log('* Fuel temp celsius: ' + fuelTempCelsius);
console.log('* Fuel level: ' + fuelLevel);
console.log();
console.log(dashline);
console.log('> MASS DATA');
console.log(dashline);
console.log('* Crew mass: ' + crewMassKg + ' kg');
console.log('* Fuel mass: ' + fuelMassKg + ' kg');
console.log('* Shuttle mass: ' + shuttleMassKg + ' kg');
console.log('* Total mass: ' + totalMassKg + ' kg');
console.log();
console.log(dashline);
console.log('> FLIGHT PLAN');
console.log(dashline);
console.log('* weather: ' + weatherStatus);
console.log();
console.log(dashline);
console.log('> OVERALL STATUS');
console.log(dashline);
console.log('* Clear for takeoff: YES');



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
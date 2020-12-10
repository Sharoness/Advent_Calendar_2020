const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const THREE_CHARACTER = "#";
let indexOne = 0;
let indexTwo = 0;
let indexThree = 0;
let indexFour = 0;
let indexFive = 0;
let toggleActionFive = true;
let numbersOfTreesOne = 0;
let numbersOfTreesTwo = 0;
let numbersOfTreesThree = 0;
let numbersOfTreesFour = 0;
let numbersOfTreesFive = 0;

rl.on("line", function(line){
    if (line[indexOne%line.length] === THREE_CHARACTER) {
        numbersOfTreesOne++;
    }
    if (line[indexTwo%line.length] === THREE_CHARACTER) {
        numbersOfTreesTwo++;
    }
    if (line[indexThree%line.length] === THREE_CHARACTER) {
        numbersOfTreesThree++;
    }
    if (line[indexFour%line.length] === THREE_CHARACTER) {
        numbersOfTreesFour++;
    }
    if (toggleActionFive) {
        if (line[indexFive%line.length] === THREE_CHARACTER) {
            numbersOfTreesFive++;
        }
        indexFive += 1;
    }
    toggleActionFive = !toggleActionFive;
    indexOne += 1;
    indexTwo += 3;
    indexThree += 5;
    indexFour += 7;
})


rl.on("close", function (){
    console.log(numbersOfTreesOne * numbersOfTreesTwo * numbersOfTreesThree * numbersOfTreesFour * numbersOfTreesFive);
})

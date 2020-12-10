const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let numberOfValidPasswords = 0;
const regexRequirementLine = /([0-9]+)-([0-9]+) (.+): ([a-zA-Z]+)/m;

rl.on("line", function(line){
    const inputLine = regexRequirementLine.exec(line);
    const [input, requirementPositionOne, requirementPositionTwo, requirementLetter, password] = inputLine;
        const a = (password[requirementPositionOne-1] === requirementLetter);
        const b = (password[requirementPositionTwo-1] === requirementLetter);
    if (a !== b) {
        numberOfValidPasswords++;
    }
})

rl.on("close", function (){
    console.log(numberOfValidPasswords)
})

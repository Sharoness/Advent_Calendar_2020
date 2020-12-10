const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let numberOfValidPasswords = 0;
const regexRequirementLine = /([0-9]+)-([0-9]+) (.+): ([a-zA-Z]+)/m;

const regexLength = (str, regex) => {
    return ((str || "").match(regex) || []).length
}

rl.on("line", function(line){

    const inputLine = regexRequirementLine.exec(line);
    const [input, requirementNumbersFrom, requirementNumbersTo, requirementLetter, password] = inputLine;
    const countRegex = new RegExp(requirementLetter, "g"); // regex for count()
    const count = regexLength(password, countRegex); // how many of requirementLetter: 7
    if (count >= requirementNumbersFrom && count <= requirementNumbersTo) {
        numberOfValidPasswords++;
    }

})

rl.on("close", function (){
    console.log(numberOfValidPasswords)
})

const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let numbers = {};

rl.on("line", function(line){
    let neededNumber = 2020 - line;
    if (numbers[neededNumber]){
        console.log(neededNumber * line);
        exit(0);
    }
    numbers[line] = true;
})

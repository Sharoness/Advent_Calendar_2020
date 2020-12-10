const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let index = 0;
let numbersOfTrees = 0;

rl.on("line", function(line){
    if (line[index%line.length] === "#") {
        numbersOfTrees++;
    }
    index += 3;
})

rl.on("close", function (){
    console.log(numbersOfTrees);
})

const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let numberValidPassports = 0;
let currentPassport = {};
let passportField = [];
const readOutPassport = /(\S+?):(\S+)/m;

function countIfPassportValid(passport){
    if (passport.byr && passport.iyr && passport.eyr && passport.hgt && passport.hcl && passport.ecl && passport.pid) {
        numberValidPassports++;
    }
}

function addToPassport() {
    currentPassport[passportField[1]] = [passportField[2]];
}

rl.on("line", function(line){
    // lege regel -> paspoort checken
    if (!line) { 
        countIfPassportValid(currentPassport);
        currentPassport = {};
        return;
    }
     // line/paspoort -> in paspoort doen
     // IF LINE HAS NO SPACE
    if (line.indexOf(" ") === -1) { 
        passportField = readOutPassport.exec(line);
        addToPassport();
        return;
    } 
    // IF LINE HAS HAVE SPACE
    let splittedLine = line.split(" ");
    for (var i = 0; i < splittedLine.length; i++) {
        passportField = readOutPassport.exec(splittedLine[i]);
        addToPassport();
    }
})

rl.on("close", function(){
    countIfPassportValid(currentPassport); // laatste regel paspoort checken
    console.log(numberValidPassports);
})

// 235
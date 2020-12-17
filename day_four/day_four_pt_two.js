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


function isBetweenTwoValues(num, minValue, maxValue){
    return num >= minValue && num <= maxValue;
}

function checkByr(input){
    if (!input){
        return false;
    }
    let birthYear = input.join()
    return isBetweenTwoValues(birthYear, 1920, 2002);
}

function checkIyr(input){
    if (!input){
        return false;
    }
    let issueYear = input.join()
    return isBetweenTwoValues(issueYear, 2010, 2020);
}

function checkEyr(input){
    if (!input){
        return false;
    }
    let expirationYear = input.join()
    return isBetweenTwoValues(expirationYear, 2020, 2030);
}

function checkHgt(input){
    if (!input){
        return false;
    }
    let heightCmIn = input.join();
    let heightOnlyNumber = heightCmIn.substring(0, heightCmIn.length-2);
    if (heightCmIn.includes("cm")){
        return isBetweenTwoValues(heightOnlyNumber, 150, 193);
    }
    if (heightCmIn.includes("in") && isBetweenTwoValues(heightOnlyNumber, 59, 76)){
        return true;
    }
    return false;
}

function checkHcl(input){
    if (!input){
        return false;
    }
    let hairColor = input.join();
    let colorOnlyNumbers = hairColor.substring(1, hairColor.length);
    let checkNumbers = /[a-zA-Z0-9]{6}/gm;
    return hairColor.substring(0, 1) === "#" && checkNumbers.test(colorOnlyNumbers);
}

function checkEcl(input){
    if (!input){
        return false;
    }
    let eyeColor = input.join();
    if (eyeColor === "amb" || eyeColor === "blu" || eyeColor === "brn" || eyeColor === "gry" || eyeColor === "grn" || eyeColor === "hzl" || eyeColor === "oth"){
        return true;
    }
    return false;
}

function checkPid(input){
    if (!input){
        return false;
    }
    let passportId = input.join();
    if (passportId.length === 9){
        return true;
    }
    return false;
}

function countIfPassportValid(passport){
    if (checkByr(passport.byr) && checkIyr(passport.iyr) && checkEyr(passport.eyr) && checkHgt(passport.hgt) && checkHcl(passport.hcl) && checkEcl(passport.ecl) && checkPid(passport.pid)){
        numberValidPassports++;
    }
}

function addToPassport() {
    currentPassport[passportField[1]] = [passportField[2]];
}

rl.on("line", function(line){
    // Empty line = end of passport
    if (!line) { 
        countIfPassportValid(currentPassport);
        currentPassport = {};
        return;
    }
    // Lines with content
    // If line has no space
    if (line.indexOf(" ") === -1) { 
        passportField = readOutPassport.exec(line);
        addToPassport();
        return;
    } 
    // If line has space
    let splittedLine = line.split(" ");
    for (var i = 0; i < splittedLine.length; i++) {
        passportField = readOutPassport.exec(splittedLine[i]);
        addToPassport();
    }
})

rl.on("close", function(){
    countIfPassportValid(currentPassport);
    console.log(numberValidPassports);
})

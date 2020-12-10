const { exit } = require("process");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var arr = []
rl.on("line", function(line){
    arr.push(parseInt(line));
})

rl.on('close', () => {
    for(let i = 0; i < arr.length ; i ++) {
        for(let j = i; j < arr.length ; j ++) {
            for(let k = j; k < arr.length ; k ++) {
                if ( arr[i] + arr[j] + arr[k] === 2020) {
                    console.log(arr[i] * arr[j] * arr[k]);
                    exit(0);
                }
            }
        }
    }
})

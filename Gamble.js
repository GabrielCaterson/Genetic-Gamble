const color = require("./color.js");

let cash = 10000000;
let falseRuin = cash;
let amountToBet = 20;
let didWin = Math.round(Math.random(1));
let maximum = 0;
let iterations = 1000000;
let shouldLog = iterations/5;

let maxAmountToBet = 0;

for (i=0; i<iterations; i++) {

    didWin = Math.round(Math.random(1));

    if(i%shouldLog == 0) {
        console.log("iteration: " + i);
        console.log("false ruin: " + falseRuin);
        console.log("amount to bet: " + amountToBet);
    }

    if (maximum < cash) {
        maximum = cash;
    }

    if (cash <= 0) {
        amountToBet = 0;
    }
    if (cash <= falseRuin) {
        amountToBet = 1;
    }

    if (didWin) {
        cash = cash + amountToBet;

        amountToBet = Math.ceil(amountToBet * 1.9);
        if (amountToBet > maxAmountToBet) {
            maxAmountToBet = amountToBet;
        }
        falseRuin = falseRuin + (amountToBet * .3);
    } else {
        cash = cash - amountToBet;
        amountToBet = Math.ceil(amountToBet * 0.4);
        if (cash < falseRuin) {
            falseRuin = cash;
        }
    }









    if(i%shouldLog == 0) {
        didWin ? color.g("Won") : color.r("Lost");
        console.log("maximum: " + maximum);
        console.log("maxAmountToBet: " + maxAmountToBet);
        color.purple("cash:------------- " + cash);
        console.log();
    }
}

console.log("maximum: " + maximum);
color.blue("cash: " + cash / 1000000 + " million");










/*
let winStreak = 0;
let firstBet = 20000;
amountToBet = firstBet;

let iterations = 1000;

for (i=0; i<iterations; i++) {

    if (maximum < cash) {
        maximum = cash;
    }

    if (cash <= 0) {
        amountToBet = 0;
        firstBet = 0;
    }
    if (cash <= falseRuin) {
        //amountToBet = 1;
    }

    if (didWin) {
        amountToBet = amountToBet * 2;
        winStreak++;
        
    } else {
        amountToBet = firstBet;

        /*if (cash < falseRuin) {
            falseRuin = cash;
        }*//*
        winStreak = 0;
    }

    didWin = Math.round(Math.random(1));






    if (didWin) {
        cash = cash + amountToBet;
    } else {
        cash = cash - amountToBet;
    }


    if (winStreak = 2) {
        winStreak = 0;
        amountToBet = firstBet;
        
    }


    if(i%(iterations/5) == 0) {
        console.log("iteration: " + i);
        //console.log("false ruin: " + falseRuin);
        console.log("amount to bet: " + amountToBet);
        console.log("maximum: " + maximum);

        color.red("cash:------------- " + cash);

        console.log();
    }
}

console.log("maximum: " + maximum);
color.green("cash: " + cash / 1000000 + " million");
*/

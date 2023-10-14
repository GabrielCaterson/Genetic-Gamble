//var geneticalgorithm = require("geneticalgorithm");
var geneticAlgorithmConstructor = require("geneticalgorithm");
const color = require("./color.js");




let startingCash = 10000000;
let cash = startingCash;
let falseRuin = cash;
let amountToBet = 20;
let didWin = Math.round(Math.random(1));
let maximum = 0;
let iterations = 100;
iterations = 2;
let shouldLog = iterations / 2;


let maxAmountToBet = 0;

cash = cash * 0.9 * (Math.random() * 0.2);


let amountToBet_win = 1.9;
let falseRuin_win = 0.3;

let amountToBet_lose = 0.4;



let phenotype = {  
    amountToBet: () => { amountToBet * randomMutator(0.9)},
    amountToBet_win: () => { amountToBet_win * randomMutator(0.9)},
    falseRuin_win: () => { falseRuin_win * randomMutator(0.9)},
    amountToBet_lose: () => { amountToBet_lose * randomMutator(0.9)},
    randomMutate_add: () => { randomMutate_add * randomMutator(0.9)},
    randomMutate_subtract: () => { randomMutate_subtract * randomMutator(0.9)}
}


function mutationFunction(phenotype) {
	
    //amountToBet = amountToBet * 0.9 * (Math.random() * 0.2);
    amountToBet = amountToBet * randomMutator(0.9);
    amountToBet_win = amountToBet_win * randomMutator(0.9);
    falseRuin_win = falseRuin_win * randomMutator(0.9);

    amountToBet_lose = amountToBet_lose * randomMutator(0.9);

    phenotype = {  
        amountToBet: () => { amountToBet * randomMutator(0.9)},
        amountToBet_win: () => { amountToBet_win * randomMutator(0.9)},
        falseRuin_win: () => { falseRuin_win * randomMutator(0.9)},
        amountToBet_lose: () => { amountToBet_lose * randomMutator(0.9)},
        randomMutate_add: () => { randomMutate_add * randomMutator(0.9)},
        randomMutate_subtract: () => { randomMutate_subtract * randomMutator(0.9)}
    }

    return phenotype;
}


function crossoverFunction(phenotypeA, phenotypeB) {
	// move, copy, or append some values from a to b and from b to a
	return [ phenotypeA , phenotypeB ];
}

color.y(phenotype.randomMutate_add);

function randomMutator(amount) {
    //return amount * (Math.random() * (1 - (amount * 2)));
    //return amount * Math.random() * phenotype.randomMutate_add * (0 - phenotype.randomMutate_subtract);

}

function fitnessFunction(phenotype) {
    let cash = startingCash;
    let falseRuin = cash;
    let amountToBet = 20;

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
            cash = cash + phenotype.amountToBet;

            amountToBet = Math.ceil(amountToBet * phenotype.amountToBet_win);
            if (amountToBet > maxAmountToBet) {
                maxAmountToBet = amountToBet;
            }
            falseRuin = falseRuin + (amountToBet * phenotype.falseRuin_win);
        } else {
            cash = cash - amountToBet;
            amountToBet = Math.ceil(amountToBet * phenotype.amountToBet_lose);
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

	return cash;
}

var firstPhenotype = {  
    amountToBet: 20,
    amountToBet_win: 1.9,
    falseRuin_win: 0.1,
    amountToBet_lose: 0.4,
    randomMutate_add: .1,
    randomMutate_subtract: .1
}

//var geneticAlgorithmConstructor = require('../index')
var geneticAlgorithm = geneticAlgorithmConstructor({
    mutationFunction: mutationFunction,
    crossoverFunction: crossoverFunction,
    fitnessFunction: fitnessFunction,
    population: [ firstPhenotype ]
});

console.log("Starting with:");
console.log( firstPhenotype );
//for( var i = 0 ; i < 100 ; i++ ) geneticAlgorithm.evolve();
/*for( var i = 0 ; i < 1 ; i++ ) {
    color.green("###################################################### iteration: " + i);
    geneticAlgorithm.evolve()
};*/

var best = geneticAlgorithm.best();
delete best.score;
console.log("Finished with:");
console.log(best);

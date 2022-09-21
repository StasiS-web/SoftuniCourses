'use strict'

function listOfNames(arrOfNames) {
    let result = arrOfNames.sort((a, b) => a.localeCompare(b));

    for(let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`);
    }
}

listOfNames(["John",
             "Bob",
             "Christina",
             "Ema"]);
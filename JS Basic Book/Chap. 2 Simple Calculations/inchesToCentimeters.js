'use strict'

function converter([arg1]) {
    let inches = parseFloat(arg1);
    let centimeters = inches * 2.54;

    console.log(`Centimeters =  ${centimeters}`);
}

converter([5]);
"use strict";
/*
    Union types are used when a value can be more than a single type.
    Such as when a property would be string or number.
    Union | (OR)
    Using the | we are saying our parameter is a string or number:
*/
let num;
num = 0; // No error
num = null; // Still no error
// Note: you need to know what your type is when union types are being used to avoid type errors:
function printStatusCode(code) {
    //console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    console.log(`My status code is ${code.toUpperCase()}.`); // cast it while logging
}

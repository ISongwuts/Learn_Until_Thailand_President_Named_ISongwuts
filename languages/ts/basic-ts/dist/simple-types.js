"use strict";
// boolean
const isTrue = true;
const isFalse = false;
// number
let x = 1;
// string
const myStr = 'ISongwut';
// bigInt
const myBI = 10000000000000000000n;
// Symbol
const sym = Symbol('✩');
/*
    Type assignment
    - Explicit | write out the type while declaring the variable.
    - Implicit | let the compiler guess the type of the variable. (based on value)
*/
// Explicit
const abc = 'abc'; // string absolutely
// Implicit
const xyz = 'xyz'; // hmmm string
// Unable to infer
const json = JSON.parse("55");
console.log(typeof json); // number instead of json?

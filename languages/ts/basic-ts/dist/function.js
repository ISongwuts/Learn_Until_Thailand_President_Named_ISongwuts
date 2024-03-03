"use strict";
// Declaration funcion with number return type
const getTime = () => {
    return new Date().getTime();
};
console.log(getTime);
// Function with parameter
const greeting_2 = (name) => {
    console.log(`Hello, ${name}`);
};
// Function with optional parameter
const greeting_3 = (name, when) => {
    console.log(`Hello, ${name} at ${when || 0}`);
};
// Function with default parameter
const greeting_4 = (name = 'Songwut') => {
    console.log(`Hello, ${name}`);
};
// Function with named parameter
const greeting_5 = ({ name, when }) => {
    console.log(`Hello, ${name} at ${when || 0}`);
};
// Function with rest parameter
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
const myName = (name) => name;
console.log(myName('ISongwut'));

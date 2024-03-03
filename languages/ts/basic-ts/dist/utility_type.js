"use strict";
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
let myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
/*
    Record Utility
    Record is a shortcut to defining an object type with a specific key type and value type.
*/
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
const bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
// Pick Utility
const bob_2 = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
const value = true; // a string cannot be used here since Exclude removed it from the type.

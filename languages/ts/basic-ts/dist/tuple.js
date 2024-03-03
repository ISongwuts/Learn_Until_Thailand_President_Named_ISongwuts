"use strict";
// Define tuple
let myTup;
myTup = [1, '2', false];
// Read only tuple
let myTup_2;
myTup_2 = [...myTup];
// myTup_2.push() // Error cuz is read only type
// Named tuple
const g = [44.2, 442.3];
//Destructuring tuple
const [cord_x, cord_y] = g;

"use strict";
// Cast type with as keyword
let stillMyName = 'ISongwut';
//console.log(stillMyName.length) // Error unknow type cannot access .length attribute
console.log(stillMyName.length);
// Cast type with <> expression
console.log(stillMyName.length);
// Force type casting | To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
const smth = 2;
console.log(smth.length); // smth is not actually a string so this will return undefined

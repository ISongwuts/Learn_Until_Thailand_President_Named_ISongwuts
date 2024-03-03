// Define tuple
let myTup: [number, string, boolean]
myTup = [1, '2', false]

// Read only tuple

let myTup_2: readonly [number, string, boolean]
myTup_2 = [...myTup]

// myTup_2.push() // Error cuz is read only type

// Named tuple

const g: [x: number, y:number] = [44.2, 442.3]

//Destructuring tuple
const [cord_x, cord_y] = g




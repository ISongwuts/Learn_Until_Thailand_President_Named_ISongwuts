// boolean

const isTrue: boolean = true
const isFalse: boolean = false

// number
let x:number = 1

// string
const myStr = 'ISongwut'

// bigInt
const myBI:bigint = 10000000000000000000n

// Symbol
const sym:symbol = Symbol('✩')

/* 
    Type assignment
    - Explicit | write out the type while declaring the variable.
    - Implicit | let the compiler guess the type of the variable. (based on value)
*/

// Explicit
const abc: string = 'abc' // string absolutely

// Implicit
const xyz = 'xyz' // hmmm string

// Unable to infer
const json = JSON.parse("55")
console.log(typeof json) // number instead of json?


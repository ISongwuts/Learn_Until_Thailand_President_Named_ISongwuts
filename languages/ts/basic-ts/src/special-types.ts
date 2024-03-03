/*
    TypeScript has special types that may not refer to any specific type of data.
*/

// Type: any | any most use for avoid error with type checker
let zero: any = 0 // any is a type that disables type checking and effectively allows all types to be used.

// Type: unknown 
let isHaveFunctionInObject: unknown = 1; // WTF is that variable named??? what a lier

isHaveFunctionInObject = 'w' // Still lier zzz

isHaveFunctionInObject = {
    runMe: () => console.log(':)')
} as { runMe: () => void }// Hmmm okay fine.

if(typeof isHaveFunctionInObject === 'object') {
    (isHaveFunctionInObject as { runMe: Function }).runMe()
} // Ohhhhh

/*
        unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
    Casting is when we use the "as" keyword to say property or variable is of the casted type.
*/

// Type Assertion with as
const names: unknown = 'Str'
console.log((names as string).toUpperCase())

// Type Assertion with < data type >
interface data {
    name: string
}
const castName = <data> {
    name: 'Songwut Malisri'
}
console.log(castName.name)

// Type: never
// const NeverGonnaGiveYouUp: never = true // Error: Type 'boolean' is not assignable to type 'never'.

// Type undefine & null
let y: undefined = undefined;
let z: null = null;


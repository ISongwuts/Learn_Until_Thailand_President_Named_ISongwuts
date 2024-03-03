// Declaration funcion with number return type
const getTime = (): number => {
    return new Date().getTime()
}
console.log(getTime)

// Function with parameter
const greeting_2 = (name: string) => {
    console.log(`Hello, ${name}`)
}

// Function with optional parameter
const greeting_3 = (name: string, when?: number) => {
    console.log(`Hello, ${name} at ${when || 0}`)
}

// Function with default parameter
const greeting_4 = (name: string = 'Songwut') => {
    console.log(`Hello, ${name}`)
}

// Function with named parameter
const greeting_5 = ({ name, when }: { name: string, when?: number }) => {
    console.log(`Hello, ${name} at ${when || 0}`)
}

// Function with rest parameter
function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// Function with type alias
type myFunc = (name: string) => string
const myName: myFunc = (name) => name
console.log(myName('ISongwut'))


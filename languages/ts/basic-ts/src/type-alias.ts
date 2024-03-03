/*
    Type Aliases
    Type Aliases allow defining types with a custom name (an Alias).
    Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
*/

//For example

type CarName = string
const toyota: CarName = 'toyota'

type Student = {
    name: string
    age: number
    car: CarName
}
const std: Student = {
    name: 'ISongwut',
    age: 10,
    car: toyota
}

/* 
    Interfaces
    Interfaces are similar to type aliases, except they only apply to object types.
*/

//interface inter = string // error
interface StudentInterface {
    name: string
    age: number
    car: CarName
}
const std_2: StudentInterface = {
    name: 'ISongwut',
    age: 10,
    car: toyota
}

// Extending Interface
interface Nisit extends StudentInterface{
    degree: string
}
const std_3: Nisit = {
    name: 'ISongwut',
    age: 10,
    car: toyota,
    degree: 'Bachelor'
}
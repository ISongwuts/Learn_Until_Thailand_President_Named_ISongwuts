// Cast type with as keyword
let stillMyName: unknown = 'ISongwut'
//console.log(stillMyName.length) // Error unknow type cannot access .length attribute
console.log((stillMyName as string).length)

// Cast type with <> expression
console.log((<string>stillMyName).length)

// Force type casting | To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
const smth: number = 2
console.log(((smth as unknown) as string).length) // smth is not actually a string so this will return undefined
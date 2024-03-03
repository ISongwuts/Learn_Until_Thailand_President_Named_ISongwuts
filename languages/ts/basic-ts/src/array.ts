const peeps: string[] = ['1', '2', '3']
peeps.push() // No error cuz this array is mutable

const peeps_2: readonly string[] = [...peeps]
//peeps_2.push() // Error: Property 'push' does not exist on type 'readonly string[]'. cuz this array is for read only

// Type inference
const peeps_3 = [...peeps_2]
let p: string = peeps_3[0] // No error

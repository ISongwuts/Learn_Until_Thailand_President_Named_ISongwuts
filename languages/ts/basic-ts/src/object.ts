// Declaration object
const me: { iq: number, eq: number } = {
    iq: 20,
    eq: 12
}

me.iq = 100 // No error cuz iq can develop
// me.eq = '100' // Errlr cuz eq cannot develop jk :( cuz type is not the same

// Index signatures
const you: { [key: string]: boolean } = {}
you.stupid = true // No error :(


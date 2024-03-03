const createPair = <S, T>(v1: S, v2: T) => [v1, v2]
console.log(createPair<string, number>('hello', 42));
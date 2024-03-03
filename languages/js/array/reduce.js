const numArr = []
for(let i = 0; i < 100; i++) numArr.push(i + 1)

const sumEven = numArr.reduce((sum, num) => {
    return num % 2 == 0 ? sum + num : sum + 0
})

console.log(sumEven)

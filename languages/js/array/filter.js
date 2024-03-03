const numArr = []
for(let i = 0; i < 100; i++) numArr.push(i + 1)

const evenArr = numArr.filter((val) => val % 2 == 0)

console.log(evenArr)

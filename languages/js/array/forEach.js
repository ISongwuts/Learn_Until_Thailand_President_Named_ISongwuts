const numArr = []
for(let i = 0; i < 100; i++) numArr.push(i + 1)
numArr.forEach((num) => num % 2 == 0 && console.log( num ))


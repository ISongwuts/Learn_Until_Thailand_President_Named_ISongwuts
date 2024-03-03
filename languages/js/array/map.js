const numArr = []
for(let i = 0; i < 100; i++) numArr.push(i + 1)

const evenArr = numArr.map((val) => {
    if(val % 2 == 0) return `${val} : even`
    else return `${val} : odd`
})

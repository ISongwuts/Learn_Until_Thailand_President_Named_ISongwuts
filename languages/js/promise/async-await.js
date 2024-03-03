const delay = async (ms) => {
    await new Promise((resolve) => {
        const intervalId = setInterval(() => { 
            console.log(`delay ${ms} ms.`)
        }, ms)

        setTimeout(() => {
            clearInterval(intervalId)
            resolve()
        }, ms)
    })
}
delay(3000)
console.log('dddd')

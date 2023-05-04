

const prom = new Promise ((resolve, reject) =>{
    let n = 0
    if (n % 2 ===0) {
        return resolve({ res: "par" })
    } else {
        return reject("impar")
    } 
    
    
})

prom
    .then((data) => {
        console.log(data)
    }) //resuelta
    .catch((error) => {
        console.log(error)
    })
    
prom = new Promise ((resolve) => {
    if (n === 0) {
        return resolve ("0 es 0")
    }
})
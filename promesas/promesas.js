
const user = new Persona

const prom = new Promise ((resolve, reject) =>{
    let n = 0

    if (n % 2==0) {
        return resolve({ res: "resuelto" })
    } else {
        return reject
    }
})

prom
    .then((data) => {
        console.log(data)
    }) //resuelta
    .catch((error) => {
        console.log(error)
    })
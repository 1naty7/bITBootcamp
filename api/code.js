function buscarPersona() {

    const url = "https://rickandmortyapi.com/api/character";

    fetch(url).then(respuesta => {
        console.log(respuesta)
        respuesta.json().then(datos => {
            console.log(datos)
            imprimirPersonajes(datos.results)
        })
        fetch(url).then(respuesta => {
            console.log(respuesta)
            respuesta.json
        })
    })
        .catch(error => console.log(error));
};

function imprimirPersonajes(list = []) {
    list.forEach(personaje => {


        document.querySelector("#printer").innerHTML += `
        <div class="card m-3 border border-dark" style="width: 18rem;">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">${personaje.status}</p>
                <p class="card-text">${personaje.species}</p>
                <p class="card-text">${personaje.location.name}</p>
            </div>
        </div>
        `;
    });
}

buscarPersona(); "buscar"


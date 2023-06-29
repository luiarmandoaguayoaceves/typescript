import getPokemon from "../generics/get-pokemon";



getPokemon(4)
    .then(pokemon => console.log(pokemon.name))
    .catch( error => console.log('Error'))
    // .finally( () => console.log('Finalizado'))
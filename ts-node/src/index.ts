import { Pokemon } from "./classes/pokemon-class";

const Charmander = new Pokemon('Charmader');
// (Pokemon.prototype as any).customName = 'Pikachu' //intenta agregar un nuevo campo a la clase pokemon 

// console.log(Charmander);
Charmander.sabePokemonDB(4);
Charmander.funcionApi = 'www.armando.com'
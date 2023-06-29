import axios from "axios"
import { Pokemon } from '../interfaces/pokemon';



export default async (idPokemon: number):Promise<Pokemon> => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    return data;
}
import axios from 'axios';

const BASE_API = 'https://pokeapi.co/api/v2';

class Api {
    async pokemonId(url) {
        axios.get(`${url}`).then(res => {
            const nameList = res.data;
            console.log(nameList);
        });
        // const response = await fetch(`${url}`);
        // const pokemon = await response.json();
        // console.log(pokemon)
        // return pokemon;
    }

    async allPokemons() {
        axios.get(`${BASE_API}/pokemon`).then(res => {
            const pokemons = res.data;
            console.log(res)
            return pokemons;
        });
        // const response = await fetch(`${BASE_API}/pokemon`);
        // const pokemons = await response.json();
        // return pokemons;
    }
}

export default new Api();

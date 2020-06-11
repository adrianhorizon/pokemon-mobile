const BASE_API = 'https://pokeapi.co/api/v2';

class Api {
    async pokemonId(url) {
        const response = await fetch(`${url}`);
        const pokemon = await response.json();
        console.log(pokemon)
        return pokemon;
    }

    async allPokemons() {
        const response = await fetch(`${BASE_API}/pokemon`);
        const pokemons = await response.json();
        return pokemons;
    }
}

export default new Api();

const BASE_API = 'https://pokeapi.co/api/v2';

class Api {
    async pokemonId(id) {
        const response = await fetch(`${BASE_API}/pokemon/${id}`)
        const pokemon = await response.json()
        return pokemon
    }
    async allPokemons() {
        const response = await fetch(`${BASE_API}/pokemon`);
        const pokemons = await response.json();
        return pokemons
    }

}

export default new Api();

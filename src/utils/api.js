const BASE_API = 'https://pokeapi.co/api/v2';

class Api {
    async pokemonId(id) {
        const response = await fetch(`${BASE_API}/pokemon/${id}`);
        const pokemon = await response.json();
        return pokemon;
    }

    async allPokemons(offset = 0, limit = 50) {
        const response = await fetch(
            `${BASE_API}/pokemon/?offset=${offset}&limit=${limit}`,
        );
        const pokemons = await response.json();
        return pokemons;
    }
}

export default new Api();

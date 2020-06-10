import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Search from '../../sections/containers/search';
import PokemonList from '../../sections/containers/pokemon-list';
import API from '../../utils/api';

const Pokemon = () => {
    const [pokemon, setPokemons] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            const pokemons = await API.allPokemons();

            setPokemons(pokemons)
        }

        fetchMyAPI();
    }, []);

    return (
        <View>
            <Search />
            <ScrollView>
                <PokemonList pokemon={pokemon} />
            </ScrollView>
        </View>
    );
}

export default Pokemon;

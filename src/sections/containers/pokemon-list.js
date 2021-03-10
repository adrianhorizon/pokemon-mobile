import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PokemonHomeLayout from '../components/pokemon-home-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Search from './search';
import Pokemon from '../components/pokemon';
import { connect } from 'react-redux';
import TYPES from '../../utils/types';
import API from '../../utils/api';

const detailPokemon = async name => {
    const pokemonId = await API.pokemonId(name)
        .then(data => data)
        .catch(reason => console.log(reason.message));

    return pokemonId;
};

const viewPokemonId = async (id, dispatch, navigation) => {
    const pokemonId = await detailPokemon(id.name);

    dispatch({
        type: TYPES.SET_POKEMONS_ID,
        payload: {
            selectedPokemon: pokemonId,
        },
    });
    navigation.navigate('Details');
};

const useSearchPokemons = pokemons => {
    const [query, setQuery] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

    useMemo(() => {
        const result = pokemons.filter(pokemon => {
            return `${pokemon.name}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredPokemons(result);
    }, [pokemons, query]);

    return { query, setQuery, filteredPokemons };
};

const PokemonList = ({ dispatch, pokemons, navigation }) => {
    const { query, setQuery, filteredPokemons } = useSearchPokemons(
        pokemons.results,
    );

    if (!pokemons) {
        return <Empty text="no hay sugerencias :(" />;
    }

    return (
        <PokemonHomeLayout>
            <View style={styles.container}>
                <Search {...navigation} query={query} setQuery={setQuery} />
                <FlatList
                    data={filteredPokemons}
                    renderItem={({ item }) => (
                        <Pokemon
                            {...item}
                            onPress={() =>
                                viewPokemonId(item, dispatch, navigation)
                            }
                        />
                    )}
                    ItemSeparatorComponent={() => <Separator />}
                    keyExtractor={item => item.name}
                />
            </View>
        </PokemonHomeLayout>
    );
};

const mapStateToProps = state => {
    return {
        pokemons: state.pokemonList,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default connect(mapStateToProps)(PokemonList);

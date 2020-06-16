import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Layout from '../components/pokemon-list-layout';
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
        type: TYPES.SET_HOTELS_ID,
        payload: {
            selectedPokemon: pokemonId,
        },
    });
    navigation.navigate('Details');
};

const PokemonList = ({ dispatch, pokemons, navigation }) => {
    if (!pokemons) {
        return <Empty text="no hay sugerencias :(" />;
    }

    return (
        <View style={styles.container}>
            <Search {...navigation} />
            <Layout title="Pokemons" />
            <ScrollView>
                {pokemons.results.map(pokemonId => {
                    return (
                        <View key={pokemonId.name}>
                            <Pokemon
                                {...pokemonId}
                                onPress={() =>
                                    viewPokemonId(
                                        pokemonId,
                                        dispatch,
                                        navigation,
                                    )
                                }
                            />
                            <Separator />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
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

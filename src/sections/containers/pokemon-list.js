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

const viewPokemonId = async (dispatch, pokemonId, navigation) => {
    const pokemon = await API.pokemonId(pokemonId);
    dispatch({
        type: TYPES.SET_HOTELS_LIST,
        payload: {
            selectedPokemon: pokemon,
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
                {pokemons['results'].map(pokemonId => {
                    return (
                        <View key={pokemonId.name}>
                            <Pokemon {...pokemonId} onPress={() => viewPokemonId(dispatch, pokemonId.name, navigation)} />
                            <Separator />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemonList,
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

export default connect(mapStateToProps)(PokemonList);

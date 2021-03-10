import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import API from './utils/api';
import TYPES from './utils/types';
import Navigator from './navigator';
import { Snackbar } from 'react-native-paper';

const AppLayout = props => {
    const [error, setError] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const pokemonList = await API.allPokemons();

                props.dispatch({
                    type: TYPES.SET_POKEMONS_LIST,
                    payload: {
                        pokemonList,
                    },
                });
            } catch (error) {
                setError(true);
                setMessage(error);
            }
        }

        fetchMyAPI();
    });

    if (error) {
        return <Snackbar visible={error}>{message}</Snackbar>;
    }

    return <Navigator />;
};

const mapStateToProps = state => {
    return {
        selectedPokemon: state.selectedPokemon,
    };
};

export default connect(mapStateToProps)(AppLayout);

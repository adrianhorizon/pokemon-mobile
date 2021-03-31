import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import API from './utils/api';
import TYPES from './utils/types';
import Navigator from './navigator';

const AppLayout = props => {
    const [message, setMessage] = useState({
        error: false,
        message: '',
    });

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
                setMessage({
                    error: true,
                    message: error,
                });
            }
        }

        fetchMyAPI();
    });

    if (message.error) {
        return <Snackbar visible={message.error}>{message.message}</Snackbar>;
    }

    return <Navigator />;
};

const mapStateToProps = state => {
    return {
        selectedPokemon: state.selectedPokemon,
    };
};

export default connect(mapStateToProps)(AppLayout);

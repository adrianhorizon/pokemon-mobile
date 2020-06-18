import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from './utils/api';
import TYPES from './utils/types';
import Navigator from './navigator';
import { Snackbar } from 'react-native-paper';

class AppLayout extends Component {
    state = {
        error: false,
        message: '',
    };

    async componentDidMount() {
        try {
            const pokemonList = await API.allPokemons();

            this.props.dispatch({
                type: TYPES.SET_POKEMONS_LIST,
                payload: {
                    pokemonList,
                },
            });
        } catch (error) {
            this.setState({ error: true, message: error });
        }
    }

    render() {
        if (this.state.error) {
            return (
                <Snackbar visible={this.state.error}>
                    {this.state.message}
                </Snackbar>
            );
        }

        return <Navigator />;
    }
}

const mapStateToProps = state => {
    return {
        selectedPokemon: state.selectedPokemon,
    };
};

export default connect(mapStateToProps)(AppLayout);

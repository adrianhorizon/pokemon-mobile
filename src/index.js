import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from './utils/api';
import TYPES from './utils/types';
import Navigator from './navigator';

class AppLayout extends Component {
    async componentDidMount() {
        const pokemonList = await API.allPokemons();
        this.props.dispatch({
            type: TYPES.SET_HOTELS_LIST,
            payload: {
                pokemonList,
            },
        });
    }

    render() {
        return <Navigator />;
    }
}

const mapStateToProps = state => {
    return {
        selectedPokemon: state.selectedHotel,
    };
};

export default connect(mapStateToProps)(AppLayout);

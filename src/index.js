import React, { Component } from 'react';

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
        return (
            <Navigator />
        );
    }
}

export default AppLayout;

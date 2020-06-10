import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import PokemonDetailLayout from '../components/pokemon-detail-layout';
import Details from '../components/detail';

const PokemonDetail = (props) => {
    const opacity = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    });

    return (
        <Animated.View
            style={{
                flex: 1,
                opacity,
            }}>
            <PokemonDetailLayout>
                <Details {...props.selectedPokemon} />
            </PokemonDetailLayout>
        </Animated.View >
    );
}

const mapStateToProps = state => {
    return {
        selectedPokemon: state.selectedPokemon,
    };
};

export default connect(mapStateToProps)(PokemonDetail);

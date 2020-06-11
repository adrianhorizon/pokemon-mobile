import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';
import PokemonDetailLayout from '../components/pokemon-detail-layout';
import Details from '../components/detail';
import TYPES from '../../utils/types';

const PokemonDetail = props => {
    console.log(props)
    const opacity = new Animated.Value(0);

    useEffect(
        () =>
            props.navigation.addListener('blur', () =>
                props.dispatch({
                    type: TYPES.SET_HOTELS_ID,
                    payload: {
                        selectedPokemon: null,
                    },
                }),
            ),
        [props],
    );

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    });

    if (props.selectedPokemon) {
        return (
            <Animated.View style={{ flex: 1, opacity }}>
                <PokemonDetailLayout>
                    <Details {...props.selectedPokemon} />
                </PokemonDetailLayout>
            </Animated.View>
        );
    }

    return <></>;
};

const mapStateToProps = state => {
    return {
        selectedPokemon: state.selectedPokemon,
    };
};

export default connect(mapStateToProps)(PokemonDetail);

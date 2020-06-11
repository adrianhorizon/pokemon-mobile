import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import API from '../../utils/api';
import TYPES from '../../utils/types';

const handleSubmit = async (text, props) => {
    const pokemon = await API.pokemonId(text)
        .then(data => data)
        .catch(reason => console.log(reason.message));

    props.dispatch({
        type: TYPES.SET_HOTELS_ID,
        payload: {
            selectedPokemon: pokemon,
        },
    });
    props.navigate('Details');
};

const Search = props => {
    const [value, setText] = useState(null);

    useEffect(() => {
        props.addListener('blur', () => setText(null));
    });

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Busca tu pokemon favorito"
                        autoCorrect={false}
                        autoCapitalize="sentences"
                        underlineColorAndroid="transparent"
                        onSubmitEditing={() => handleSubmit(value, props)}
                        onChangeText={text => setText(text)}
                        value={value}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        top: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
    },
    searchContainer: {
        height: 50,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        borderRadius: 10,
    },
    textInput: {
        height: 50,
        fontSize: 16,
        marginTop: 0,
        marginLeft: 10,
        backgroundColor: 'transparent',
        color: '#919191',
    },
});

export default connect(null)(Search);

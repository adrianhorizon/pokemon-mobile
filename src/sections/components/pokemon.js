import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import API from '../../utils/api';

const detailPokemon = async name => {
    try {
        const pokemonId = await API.pokemonId(name);

        return pokemonId;
    } catch (error) {
        console.log(error);
    }
};

const Item = id => {
    if (id >= 1 && id <= 9) {
        return <>00{id}</>;
    } else if (id >= 10 && id <= 99) {
        return <>0{id}</>;
    } else {
        return <>{id}</>;
    }
};

const Pokemon = props => {
    const [poke, setPoke] = useState();

    useEffect(() => {
        async function pokemonGetId() {
            const pokemonId = await detailPokemon(props.name);
            setPoke(pokemonId);
        }

        pokemonGetId();
    }, [props.name]);

    console.log('hey', poke);
    if (poke) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.container}>
                    <View style={{ flex: 0.3, justifyContent: 'center' }} >
                        <Image
                            style={styles.imagePokemon}
                            source={{ uri: poke.sprites.front_default }}
                        />
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center' }}>
                        <Text style={styles.title}>{poke.name}</Text>
                        <Text style={styles.numberPokemon}>
                            # {Item(poke.id)}
                        </Text>
                    </View>
                    {/* <View style={{ flex: 0.4, justifyContent: 'center' }}>
                        <Text style={styles.title}>{poke.name}</Text>
                    </View> */}
                </View>
            </TouchableOpacity>
        );
    } else {
        return <></>;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imagePokemon: {
        resizeMode: 'cover',
        width: 100,
        height: 100,
    },
    title: {
        paddingHorizontal: 10,
        textTransform: 'capitalize',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#44546b',
    },
    numberPokemon: {
        paddingHorizontal: 10,
        color: '#9aa9b9',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default Pokemon;

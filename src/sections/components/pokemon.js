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

const pokemonType = value =>
    ({
        bug: require('../../assets/img/Tag/Tag-Bug.png'),
        dark: require('../../assets/img/Tag/Tag-Dark.png'),
        dragon: require('../../assets/img/Tag/Tag-Dragon.png'),
        electric: require('../../assets/img/Tag/Tag-Electric.png'),
        fire: require('../../assets/img/Tag/Tag-Fire.png'),
        fairy: require('../../assets/img/Tag/Tag-Fairy.png'),
        fighting: require('../../assets/img/Tag/Tag-Fight.png'),
        flying: require('../../assets/img/Tag/Tag-Flying.png'),
        ghost: require('../../assets/img/Tag/Tag-Ghost.png'),
        grass: require('../../assets/img/Tag/Tag-Grass.png'),
        ground: require('../../assets/img/Tag/Tag-Ground.png'),
        ice: require('../../assets/img/Tag/Tag-Ice.png'),
        normal: require('../../assets/img/Tag/Tag-Normal.png'),
        poison: require('../../assets/img/Tag/Tag-Poison.png'),
        psychic: require('../../assets/img/Tag/Tag-Psychic.png'),
        rock: require('../../assets/img/Tag/Tag-Rock.png'),
        steel: require('../../assets/img/Tag/Tag-Steel.png'),
        water: require('../../assets/img/Tag/Tag-Water.png'),
    }[value]);

const Pokemon = props => {
    const [poke, setPoke] = useState();

    useEffect(() => {
        async function pokemonGetId() {
            const pokemonId = await detailPokemon(props.name);
            setPoke(pokemonId);
        }

        pokemonGetId();
    }, [props.name]);

    if (poke) {
        const pokemonTypes = poke.types.map(({ type }) => type.name);

        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.imagePokemon}
                            source={{ uri: poke.sprites.front_default }}
                        />
                    </View>
                    <View>
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={styles.title}>
                            {poke.name}
                        </Text>
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={styles.numberPokemon}>
                            # {Item(poke.id)}
                        </Text>
                    </View>
                    <View>
                        {Object.keys(pokemonTypes).map(keys => {
                            return (
                                <View key={pokemonTypes[keys]}>
                                    <Image
                                        source={pokemonType(pokemonTypes[keys])}
                                    />
                                    <Text
                                        numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={styles.buttonText}>
                                        {pokemonTypes[keys]}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return <></>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonText: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 16,
        left: 15,
        right: 0,
        top: 19,
        bottom: 0,
    },
    imagePokemon: {
        resizeMode: 'cover',
        width: 100,
        height: 100,
        backgroundColor: 'transparent',
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

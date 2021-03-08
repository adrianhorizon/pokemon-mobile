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
        bug: require('../../assets/img/Tag/Bug.png'),
        dark: require('../../assets/img/Tag/Dark.png'),
        dragon: require('../../assets/img/Tag/Dragon.png'),
        electric: require('../../assets/img/Tag/Electric.png'),
        fairy: require('../../assets/img/Tag/Fairy.png'),
        fight: require('../../assets/img/Tag/Fight.png'),
        fire: require('../../assets/img/Tag/Fire.png'),
        flying: require('../../assets/img/Tag/Flying.png'),
        ghost: require('../../assets/img/Tag/Ghost.png'),
        grass: require('../../assets/img/Tag/Grass.png'),
        ground: require('../../assets/img/Tag/Ground.png'),
        ice: require('../../assets/img/Tag/Ice.png'),
        normal: require('../../assets/img/Tag/Normal.png'),
        poison: require('../../assets/img/Tag/Poison.png'),
        psychic: require('../../assets/img/Tag/Psychic.png'),
        rock: require('../../assets/img/Tag/Rock.png'),
        steel: require('../../assets/img/Tag/Steel.png'),
        water: require('../../assets/img/Tag/Water.png'),
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
                    <View style={styles.viewPokemonOne}>
                        <Image
                            style={styles.imagePokemon}
                            source={{ uri: poke.sprites.front_default }}
                        />
                    </View>
                    <View style={styles.viewPokemonThree}>
                        <Text style={styles.title}>{poke.name}</Text>
                        <Text style={styles.numberPokemon}>
                            # {Item(poke.id)}
                        </Text>
                    </View>
                    <View style={styles.viewPokemonTwo}>
                        {Object.keys(pokemonTypes).map(keys => {
                            return (
                                <View key={pokemonTypes[keys]}>
                                    <Image
                                        source={pokemonType(pokemonTypes[keys])}
                                    />
                                    <Text style={styles.buttonText}>
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
    viewPokemonOne: {
        flex: 0.3,
        justifyContent: 'center',
    },
    viewPokemonTwo: {
        flex: 0.4,
        justifyContent: 'center',
    },
    viewPokemonThree: {
        flex: 0.5,
        justifyContent: 'center',
    },
    buttonText: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 16,
        left: 10,
        right: 0,
        top: 8,
        bottom: 0,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
<<<<<<< HEAD
    numberPokemon: {
        paddingHorizontal: 10,
        color: '#9aa9b9',
        fontWeight: 'bold',
        fontSize: 14,
=======
    price: {
        paddingVertical: 5,
        color: '#9aa9b9',
        fontWeight: 'bold',
        fontSize: 14,
        borderRadius: 5,
    },
    containerRating: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    rating: {
        marginTop: 4,
        marginRight: 5,
        width: 12,
        height: 12,
        resizeMode: 'contain',
    },
    starsValue: {
        color: '#9F9F9F',
    },
    stars: {
        color: '#1f2532',
>>>>>>> [CNS-8542]
    },
});

export default Pokemon;

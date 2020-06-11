import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import API from '../../utils/api';

const detailPokemon = async name => {
    const pokemonId = await API.pokemonId(name)
        .then(data => data)
        .catch(reason => console.log(reason.message));

    return pokemonId;
};

function Item({ name }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}

const Pokemon = props => {
    const [poke, setPoke] = useState();

    useEffect(() => {
        async function anyNameFunction() {
            const pokemonId = await detailPokemon(props.name);
            setPoke(pokemonId);
        }

        anyNameFunction();
    }, [props.name]);

    console.log('hey', poke);
    if (poke) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                {/* <View style={styles.container}>
                    <View style={styles.left}>
                        <Image
                            style={styles.cover}
                            source={{ uri: poke.sprites.front_default }}
                        />
                    </View>

                    <View style={styles.right}>
                        <Text style={styles.title}>{poke.name}</Text>
                        <Text style={styles.price}># 00{poke.id}</Text>
                    </View>
                </View> */}
                <FlatList
                    data={poke}
                    renderItem={() => <Item title={poke.name} />}
                    keyExtractor={item => item.id}
                />
            </TouchableOpacity>
        );
    } else {
        return <></>;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 20,
//         backgroundColor: 'aqua',
//         flexDirection: 'column',
//     },
//     left: {
//         paddingLeft: 10,
//         flexDirection: 'row',
//     },
//     cover: {
//         width: 120,
//         height: 120,
//         resizeMode: 'cover',
//     },
//     right: {
//         paddingLeft: 10,
//         flexDirection: 'row',
//         backgroundColor: 'yellow',
//         justifyContent: 'space-around',
//     },
//     title: {
//         paddingVertical: 10,
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#44546b',
//     },
//     price: {
//         paddingVertical: 5,
//         color: '#9aa9b9',
//         fontWeight: 'bold',
//         fontSize: 14,
//         borderRadius: 5,
//     },
// });

export default Pokemon;

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const colorsPokemon = value =>
    ({
        grass: '#47CFAF',
        fire: '#FB6D6C',
        water: '#74BDFD',
        dragon: '#8774FF',
        normal: '#BDBDAE',
        bug: '#C1D11F',
        poison: '#AA5DA1',
        electric: '#FEE63C',
        ground: '#d3b54a',
        psychic: '#F562B1',
        fighting: '#B1746D',
        fairy: '#FAADFF',
        rock: '#CEBD72',
        ghost: '#7A76D8',
        ice: '#96F1FF',
        steel: '#C4C2DB',
        flying: '#7AA1FF',
        dark: '#8A6653',
    }[value]);

const Details = ({ selectedPokemon, navigation }) => {
    const pokemonTypes = selectedPokemon.types.map(
        ({ type }) => `${type.name} `,
    );
    const abilitiesData = selectedPokemon.abilities.map(
        ({ ability }) => `${ability.name} `,
    );
    console.log(selectedPokemon);

    return (
        <ScrollView style={styles().containerScroll}>
            <View
                style={
                    styles(colorsPokemon(selectedPokemon.types[0].type.name))
                        .container
                }>
                <TouchableOpacity
                    style={styles().closeIcon}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="close-outline" size={26} />
                </TouchableOpacity>
                <View>
                    <Text style={styles().name}>{selectedPokemon.name}</Text>
                    <Text style={styles().types}>
                        <Text>{pokemonTypes}</Text>
                    </Text>
                    <Image
                        style={styles().cover}
                        source={{ uri: selectedPokemon.sprites.front_default }}
                    />
                </View>
                <View style={styles().top}>
                    <Text style={styles().detail}>DETALLES</Text>
                    <Text style={styles().subDetail}>
                        Weight: {selectedPokemon.weight}
                    </Text>
                    <Text style={styles().subDetail}>
                        Height: {selectedPokemon.height}
                    </Text>
                    <Text style={styles().subDetail}>
                        Abilities: {abilitiesData}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = props =>
    StyleSheet.create({
        containerScroll: {
            flex: 1,
        },
        container: {
            flex: 1,
            backgroundColor: props,
        },
        closeIcon: {
            backgroundColor: '#fff',
            width: 26,
            height: 26,
            marginTop: height * 0.06,
            marginLeft: width * 0.06,
            borderRadius: 100,
        },
        cover: {
            width: '100%',
            height: 350,
        },
        top: {
            padding: 25,
            borderRadius: 30,
            backgroundColor: '#fff',
            height: '100%',
        },
        name: {
            textTransform: 'capitalize',
            marginTop: 20,
            marginLeft: width * 0.06,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
        },
        types: {
            textTransform: 'capitalize',
            marginTop: 20,
            marginLeft: width * 0.06,
        },
        detail: {
            fontSize: 12,
            fontWeight: 'bold',
            paddingVertical: 10,
            color: '#192225',
        },
        subDetail: {
            color: '#9F9F9F',
            lineHeight: 24,
        },
    });

export default Details;

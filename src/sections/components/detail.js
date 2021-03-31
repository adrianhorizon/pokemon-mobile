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
        bug: '#92BC2C',
        dark: '#595761',
        dragon: '#0C69C8',
        electric: '#F2D94E',
        fire: '#FBA54C',
        fairy: '#EE90E6',
        fighting: '#D3425F',
        flying: '#A1BBEC',
        ghost: '#5F6DBC',
        grass: '#5FBD58',
        ground: '#DA7C4D',
        ice: '#75D0C1',
        normal: '#A0A29F',
        poison: '#B763CF',
        psychic: '#FA8581',
        rock: '#C9BB8A',
        steel: '#5695A3',
        water: '#539DDF',
    }[value]);

const Details = ({ selectedPokemon, navigation }) => {
    const pokemonTypes = selectedPokemon.types.map(
        ({ type }) => `${type.name} `,
    );
    const abilitiesData = selectedPokemon.abilities.map(
        ({ ability }) => `${ability.name} `,
    );

    return (
        <ScrollView style={styles().containerScroll}>
            <View
                style={
                    styles(
                        colorsPokemon(
                            selectedPokemon.types.find(type => type).type.name,
                        ),
                    ).container
                }>
                <TouchableOpacity
                    style={styles().closeIcon}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="close-outline" size={26} />
                </TouchableOpacity>
                <View>
                    <Text style={styles().name}>{selectedPokemon.name}</Text>
                    <Text style={styles().containerType}>
                        <Text style={styles().types}>{pokemonTypes}</Text>
                    </Text>
                    <Image
                        style={styles().cover}
                        source={{ uri: selectedPokemon.sprites.front_default }}
                    />
                </View>
                <View style={styles().top}>
                    <Text style={styles().detail}>DETAIL</Text>
                    <Text style={styles().subDetail}>
                        Height{'           '}
                        <Text style={styles().abilities}>
                            {`(${selectedPokemon.height} cm)`}
                        </Text>
                    </Text>
                    <Text style={styles().subDetail}>
                        Weight{'          '}
                        <Text style={styles().abilities}>
                            {`(${selectedPokemon.weight} kg)`}
                        </Text>
                    </Text>
                    <Text style={styles().subDetail}>
                        Abilities{'         '}
                        <Text style={styles().abilities}>{abilitiesData}</Text>
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
            marginTop: 25,
            marginLeft: width * 0.06,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#fff',
        },
        containerType: {
            textTransform: 'capitalize',
            marginTop: 20,
            marginLeft: width * 0.06,
            fontSize: 16,
        },
        types: {
            color: '#fff',
        },
        detail: {
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 10,
            color: '#44546b',
            marginBottom: 15,
        },
        subDetail: {
            color: '#9F9F9F',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 24,
        },
        abilities: {
            color: '#44546b',
        },
    });

export default Details;

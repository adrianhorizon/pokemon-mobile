import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonListLayout = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        color: '#4c4c4c',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default PokemonListLayout;

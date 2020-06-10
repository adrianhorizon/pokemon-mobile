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
        top: 0,
        left: 0,
        padding: 10,
        width: '100%',
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

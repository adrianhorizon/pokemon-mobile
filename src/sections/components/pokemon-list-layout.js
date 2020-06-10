import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonListLayout = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
        flex: 1,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default PokemonListLayout;

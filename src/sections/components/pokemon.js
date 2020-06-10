import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Pokemon = ({ name, onPress }) => {
    const calification = Math.floor(Math.random() * 500) + 1;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {/* <View style={styles.left}>
                    <Image style={styles.cover} source={{ uri: images[0] }} />
                </View> */}

                <View style={styles.right}>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    {/* <View style={styles.containerRating}>
                        <Text style={styles.starsValue}>({calification})</Text>
                    </View>
                    <Text style={styles.price}>Por $ {price} / noche</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'column',
    },
    left: {
        paddingLeft: 10,
    },
    cover: {
        width: width * 0.9,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-around',
    },
    title: {
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#44546b',
    },
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
    },
});

export default Pokemon;

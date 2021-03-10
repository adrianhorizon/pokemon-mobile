import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://img.cloudygif.com/full/8b31f700319a9cc9.gif',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Loading;

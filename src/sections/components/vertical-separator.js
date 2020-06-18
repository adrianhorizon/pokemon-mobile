import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = ({ color }) => {
    return (
        <View
            style={[
                styles.separator,
                { borderTopColor: color ? color : '#eaeaea' },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    },
});

export default Separator;

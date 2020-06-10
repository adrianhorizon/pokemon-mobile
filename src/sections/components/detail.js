import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Details = (props) => {
    console.log(props)
  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={{ uri: props.sprites.front_default }} />
      <View style={styles.top}>
        <Text style={styles.name}>{props.name}</Text>
      </View>

      <View style={styles.top}>
        <Text style={styles.detail}>DETALLES</Text>
        <Text style={styles.subDetail}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: 340,
    borderRadius: 20,
  },
  top: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#35404C',
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

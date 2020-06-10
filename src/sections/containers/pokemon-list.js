import React, { Component } from 'react';
import { View } from 'react-native';
import Layout from '../components/pokemon-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Pokemon from '../components/pokemon';
import API from '../../utils/api';

const PokemonList = (props) => {

    if (!props.pokemon) {
      return <Empty text="no hay sugerencias :(" />;
    }
    return (
      <Layout title="Alojamientos en todo el mundo">
        {props.pokemon.map(hotel => {
          return (
            <View key={hotel._id}>
              <Pokemon {...hotel} onPress={() => console.log('loco')} />
              <Separator />
            </View>
          );
        })}
      </Layout>
    );
}

export default PokemonList;

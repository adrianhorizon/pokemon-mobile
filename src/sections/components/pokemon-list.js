import React, { Component } from 'react';
import { View } from 'react-native';
import Layout from '../components/Suggestions-list-layout';
import Empty from './empty';
import Separator from './vertical-separator';
import Suggestion from '../components/Suggestions';

class PokemonList extends Component {
    render() {
        if (!this.props.hotels) {
            return <Empty text="no hay sugerencias :(" />;
        }
        return (
            <Layout title="Alojamientos en todo el mundo">
                {this.props.hotels.map(hotel => {
                    return (
                        <View key={hotel._id}>
                            <Suggestion {...hotel} onPress={() => console.log('loco')} />
                            <Separator />
                        </View>
                    );
                })}
            </Layout>
        );
    }
}

export default PokemonList;

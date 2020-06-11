import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/containers/home';
import Moves from './screens/containers/moves';
import Items from './screens/containers/items';
import PokemonDetail from './sections/containers/pokemon-detail';
import PokemonList from './sections/containers/pokemon-list';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const RootStack = createStackNavigator();

const ThemePokemon = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
    },
};

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Pokemon" component={PokemonList} />
        <Tabs.Screen name="Moves" component={Moves} />
        <Tabs.Screen name="Items" component={Items} />
    </Tabs.Navigator>
);

const HomeScreen = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            options={{
                headerShown: false,
            }}
            component={Home}
        />
        <Stack.Screen
            name="Pokemons"
            options={{
                headerShown: false,
            }}
            component={TabsScreen}
        />
    </Stack.Navigator>
);

const ModalScreen = () => (
    <NavigationContainer theme={ThemePokemon} initialRouteName="Home">
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Details" component={PokemonDetail} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default ModalScreen;

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

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
        primary: '#0531C5',
    },
};

const iconPokemon = {
    cofre: require('./assets/img/icons/cofre.png'),
    cofre1: require('./assets/img/icons/cofre1.png'),
    pokebola: require('./assets/img/icons/pokebola.png'),
    pokebola1: require('./assets/img/icons/pokebola1.png'),
    control: require('./assets/img/icons/control-de-juego.png'),
    control1: require('./assets/img/icons/control-de-juego1.png'),
};

const TabsScreen = () => (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
                let iconName;
                if (route.name === 'Pokemon') {
                    iconName = focused ? iconPokemon.cofre1 : iconPokemon.cofre;
                } else if (route.name === 'Moves') {
                    iconName = focused
                        ? iconPokemon.pokebola1
                        : iconPokemon.pokebola;
                } else if (route.name === 'Items') {
                    iconName = focused
                        ? iconPokemon.control1
                        : iconPokemon.control;
                }

                return (
                    <Image
                        source={iconName}
                        style={{ height: size, width: size }}
                    />
                );
            },
        })}
        tabBarOptions={{
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#fff',
            activeTintColor: '#3cbdfe',
            inactiveTintColor: '#1f2532',
        }}>
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

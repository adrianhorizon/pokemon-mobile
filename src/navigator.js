import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const TabsScreen = () => (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Pokemon') {
                    iconName = focused
                        ? 'ios-add-circle'
                        : 'ios-add-circle-outline';
                } else if (route.name === 'Moves') {
                    iconName = focused
                        ? 'ios-add-circle'
                        : 'ios-add-circle-outline';
                } else if (route.name === 'Items') {
                    iconName = focused
                        ? 'ios-add-circle'
                        : 'ios-add-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeBackgroundColor: '#e6ebf1',
            inactiveBackgroundColor: '#fff',
            activeTintColor: '#0531C5',
            inactiveTintColor: '#00ddcd',
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

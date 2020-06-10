import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './screens/containers/home';
import Pokemon from './screens/containers/pokemon';
import Moves from './screens/containers/moves';
import Items from './screens/containers/items';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Pokemon" component={Pokemon} />
        <Tabs.Screen name="Moves" component={Moves} />
        <Tabs.Screen name="Items" component={Items} />
    </Tabs.Navigator>
);

const HomeScreen = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" options={{
                headerShown: false,
            }} component={Home} />
            <Stack.Screen name="Pokemons" options={{
                headerShown: false,
            }} component={TabsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default HomeScreen;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Billing from '../screens/billing';
import Fills from '../screens/fills';
import Home from '../screens/home';
import Map from '../screens/map';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name = 'Inicio' component = { Home } />
            <Tab.Screen name = 'Estaciones' component = { Map } />
            <Tab.Screen name = 'Facturacion' component = { Billing } />
            <Tab.Screen name = 'Mis cargas' component = { Fills } />
            <Tab.Screen name = 'Mi perfil' component = { Profile } />
        </Tab.Navigator>
    );
}
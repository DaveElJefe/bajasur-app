import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Billing from '../screens/billing';
import Fills from '../screens/fills';
import Home from '../screens/home';
import Map from '../screens/map';
import Profile from '../screens/profile';
import Program from '../screens/program';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName='Inicio'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if(route.name === 'Inicio'){
                    iconName = 'home';
                    size = focused ? 35 : 30;
                    color = focused ? 'red' : 'blue';
                }else if(route.name === 'Estaciones'){
                    iconName = 'location-on';
                    size = focused ? 35 : 30;
                    color = focused ? 'red' : 'blue';
                }else if(route.name === 'Facturacion'){
                    iconName = 'insert-drive-file';
                    size = focused ? 35 : 30;
                    color = focused ? 'red' : 'blue';
                }else if(route.name === 'Mis cargas'){
                    iconName = 'local-gas-station';
                    size = focused ? 35 : 30;
                    color = focused ? 'red' : 'blue';
                }else if(route.name === 'Mi perfil'){
                    iconName = 'account-circle';
                    size = focused ? 35 : 30;
                    color = focused ? 'red' : 'blue';
                }else if(route.name === 'Programa'){
                    iconName = 'info';
                    size = focused ? 35 : 30;
                    color = focused ? 'red' : 'blue';
                }
                return(
                    <MaterialIcons name={iconName} size={size} color={color}/>
                )
            }
        })}>
            <Tab.Screen name = 'Inicio' component = { Home } />
            <Tab.Screen name = 'Estaciones' component = { Map } />
            <Tab.Screen name = 'Facturacion' component = { Billing } />
            <Tab.Screen name = 'Mis cargas' component = { Fills } />
            <Tab.Screen name = 'Mi perfil' component = { Profile } />
            <Tab.Screen name = 'Programa' component = { Program } />
        </Tab.Navigator>
    );
}
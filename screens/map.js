import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../shared/global';

export default function Map(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de estaciones</Text>
        </View>
    )
}
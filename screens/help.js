import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../shared/global';

export default function Help(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de ayuda</Text>
        </View>
    )
}
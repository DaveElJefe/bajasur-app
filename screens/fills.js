import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../shared/global';

export default function Fills(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de mis cargas</Text>
        </View>
    )
}
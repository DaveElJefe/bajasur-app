import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconButton( {onPress, buttonSize, iconName} ){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[{width: buttonSize, height: buttonSize}]}>
                <MaterialIcons size={buttonSize} color='#333' name={iconName}/>
            </View>
        </TouchableOpacity>
    )
}
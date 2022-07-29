import React from 'react';
import { Text, View } from 'react-native';

export default function FlatText( {text, textWeight, textSize, alignment, textColor} ){
    return(
        <Text style={[{
            marginVertical: 8,
            fontWeight: textWeight,
            fontSize: textSize,
            alignSelf: alignment,
            textAlign: 'center',
            color: textColor
        }]}>{text}</Text>
    )
}
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton( {text, bgColor, txtColor, onPress} ){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, {backgroundColor: bgColor, borderColor: txtColor}]}>
                <Text style={[styles.buttonText, {color: txtColor}]}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginTop: 8,
        borderWidth: 2
    },
    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})
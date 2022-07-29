import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton( {text, textSize, textForm, textColor, bgColor, onPress} ){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.button, {backgroundColor: bgColor, borderColor: textColor}]}>
                <Text style={[styles.buttonText, {fontSize: textSize, textTransform: textForm,color: textColor}]}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        marginVertical: 8,
    },
    button:{
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderWidth: 2
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
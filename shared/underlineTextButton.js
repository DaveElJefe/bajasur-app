import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function UnderlineTextButton( {text, alignment, onPress} ){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.textButton, {alignSelf: alignment}]}>
                <Text style={styles.text}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 4
    },
    textButton:{
        padding: 4,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: '500'
    }
})
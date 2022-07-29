import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconInput( {text, inputHolder, iconName} ){
    return(
        <View style={styles.container}>
            <View style={styles.leftView}>
                <Text style={styles.fieldText}>{text}</Text>
                <TextInput style={styles.input} placeholder={inputHolder}/>
            </View>
            <View style={styles.iconContainer}>
                <MaterialIcons size={24} name={iconName}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        backgroundColor: '#e5e5e5',
        borderRadius: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#333',
        flexDirection: 'row'
    },
    leftView:{
        width: '85%',
        marginLeft: 8,
    },
    fieldText:{
        textAlign: 'left',
        fontWeight: 'bold'
    },
    input:{
        fontSize: 16
    },
    iconContainer:{
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8
    }
})
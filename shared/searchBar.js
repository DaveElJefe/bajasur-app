import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchBar( {inputHolder, cameraPress} ){
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.iconContainer}>
                    <MaterialIcons size={24} name='search'/>
                </View>
                <TextInput style={styles.input} placeholder={inputHolder}/>
            </View>
            <TouchableOpacity style={styles.cameraContainer} onPress={cameraPress}>
                <View>
                    <MaterialIcons size={24} name='photo-camera'/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchContainer:{
        width: '85%',
        height: 36,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        borderRadius: 8,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65
    },
    iconContainer:{
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraContainer:{
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    },
    input:{
        width: '85%',
        fontSize: 16
    }
})
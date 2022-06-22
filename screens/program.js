import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import Card from '../shared/card';

export default function Program(){
    const navigation = useNavigation();

    const goToScreen = (destino) => {
        navigation.navigate(destino);
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de programa de recompensas</Text>
            <FlatButton text='Ayuda' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Help')}/>
            <FlatButton text='Contacto' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Contact')}/>
            <FlatButton text='Version' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Version')}/>
            <FlatButton text='Privacidad' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Privacy')}/>
        </View>
    )
}
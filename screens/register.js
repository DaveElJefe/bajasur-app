import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Register(){
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de registro</Text>
            <FlatButton text='Cancelar' bgColor='#fff' txtColor='#0782F9' onPress={goBack}/>
        </View>
    )
}
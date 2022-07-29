import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import IconButton from '../shared/iconButton';
import FlatButton from '../shared/flatButton';
import FlatText from '../shared/flatText';
import FlatIconInput from '../shared/iconInput';

export default function RecoverPassword(){
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <IconButton onPress={navigation.goBack} buttonSize={40} iconName='chevron-left'/>
            <View style={styles.topView}>
                <FlatText text='Recuperación de contraseña' textWeight='bold' textSize={32} alignment='center' textColor='#333'/>
            </View>
            <FlatText text='Proceso de recuperación' textWeight='500' textSize={20} alignment='left' textColor='#333'/>
            <FlatIconInput text='Correo electrónico' inputHolder='correo@ejemplo.com' iconName='email'/>
            <FlatButton text='Recuperar' textSize={24} textForm='uppercase' textColor='#0782F9' bgColor='#fff' onPress={() => console.log('Enviando recuperación')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: '3%',
        marginHorizontal: '7%'
    },
    topView:{
        width: '70%',
        marginHorizontal: '15%'
    }
})
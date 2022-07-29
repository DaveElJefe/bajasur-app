import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import IconButton from '../shared/iconButton';
import FlatButton from '../shared/flatButton';
import FlatText from '../shared/flatText';
import IconInput from '../shared/iconInput';
import UnderlineTextButton from '../shared/underlineTextButton';

export default function Register(){
    const navigation = useNavigation();

    const goToScreen = (destino) => {
        navigation.navigate(destino);
    }

    const replaceScreen = (destino) => {
        navigation.dispatch(StackActions.replace(destino));
    }

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <IconButton onPress={navigation.goBack} buttonSize={40} iconName='chevron-left'/>
            <View style={styles.topView}>
                <FlatText text='Registro' textWeight='bold' textSize={32} alignment='center' textColor='#333'/>
            </View>
            <FlatText text='Accede a tu cuenta' textWeight='500' textSize={20} alignment='flex-start' textColor='#333'/>
            <IconInput text='Nombre completo' inputHolder='Escribe tu nombre' iconName='person'/>
            <IconInput text='Correo electrónico' inputHolder='correo@ejemplo.com' iconName='email'/>
            <IconInput text='Teléfono' inputHolder='Escribe tu número' iconName='phone'/>
            <IconInput text='Contraseña' inputHolder='ejemplo123' iconName='lock'/>
            <IconInput text='Confirmar contraseña' inputHolder='ejemplo123' iconName='lock'/>
            <FlatButton text='Registrarse' textSize={24} textForm='uppercase' textColor='#0782F9' bgColor='#fff' onPress={() => console.log('Usuario registrado')}/>
            <FlatText text='¿Ya tienes cuenta?' textWeight='500' textSize={16} alignment='center' textColor='#333'/>
            <FlatButton text='Acceder' textSize={24} textForm='uppercase' textColor='#0782F9' bgColor='#fff' onPress={() => goToScreen('Login')}/>
            <UnderlineTextButton text='Aviso de privacidad' alignment='center' onPress={() => goToScreen('Privacy')}/>
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
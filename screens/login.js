import React from 'react';
import { StyleSheet, View} from 'react-native';
import FlatButton from '../shared/flatButton';
import { useNavigation, StackActions } from '@react-navigation/native';
import IconButton from '../shared/iconButton';
import IconInput from '../shared/iconInput';
import FlatText from '../shared/flatText';
import UnderlineTextButton from '../shared/underlineTextButton';

export default function Login(){
    const navigation = useNavigation();

    const goToScreen = (destino) => {
        navigation.navigate(destino);
    }

    const replaceScreen = (destino) => {
        navigation.dispatch(StackActions.replace(destino));
    }

    //Una vez terminado poniendo todos los componentes, poner los Inputs en un Formik con Yup
    //Para una automatizacion de la verificacion de los datos insertados
    //Color rojo?: 'EE4B2B'
    return(
        <View style={styles.container}>
            <IconButton onPress={navigation.goBack} buttonSize={40} iconName='chevron-left'/>
            <View style={styles.topView}>
                <FlatText text='Bienvenido de nuevo' textWeight='bold' textSize={32} alignment='center' textColor='#333'/>
            </View>
            <FlatText text='Accede a tu cuenta' textWeight='500' textSize={20} alignment='flex-start' textColor='#333'/>
            <IconInput text='Correo electrónico' inputHolder='correo@ejemplo.com' iconName='email'/>
            <IconInput text='Contraseña' inputHolder='ejemplo123' iconName='lock'/>
            <UnderlineTextButton text='¿Olvidó su contraseña?' alignment='flex-end' onPress={() => goToScreen('RecoverPassword')}/>
            <FlatButton text='Acceder' textSize={24} textForm='uppercase' textColor='#fff' bgColor='#0782F9' onPress={() => replaceScreen('BottomTabNavigator')}/>
            <FlatText text='¿Aun no tienes cuenta?' textWeight='500' textSize={16} alignment='center' textColor='#333'/>
            <FlatButton text='Registrarse' textSize={24} textForm='uppercase' textColor='#0782F9' bgColor='#fff' onPress={() => goToScreen('Register')}/>
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
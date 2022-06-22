import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Login(){
    const navigation = useNavigation();

    const goToScreen = (destino) => {
        navigation.navigate(destino);
    }

    const replaceScreen = (destino) => {
        navigation.dispatch(StackActions.replace(destino));
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de inicio de sesion!</Text>
            <FlatButton text='Olvidaste tu contraseña?' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('RecoverPassword')}/>
            <FlatButton text='Iniciar sesion' bgColor='#0782F9' txtColor='#fff' onPress={() => replaceScreen('BottomTabNavigator')}/>
            <FlatButton text='Registrarse' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Register')}/>
        </View>
    )
}
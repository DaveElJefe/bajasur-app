import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import Card from '../shared/card';

export default function Home(){
    const navigation = useNavigation();

    const [products, setProducts] = useState([
        {title: 'Bud Light', rating: 5, description: 'Lata de cerveza Bud Light 285ml', key: '1'},
        {title: 'Coca Cola', rating: 4, description: 'Lata de Coca Cola 285ml', key: '2'},
        {title: 'Cafe', rating: 3, description: 'Vaso de café de 600ml', key: '3'},
    ]);

    const goToScreen = (destino) => {
        navigation.navigate(destino);
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Pantalla de inicio</Text>
            <FlatButton text='Iniciar sesion' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Login')}/>
            <FlatButton text='Programa' bgColor='#fff' txtColor='#0782F9' onPress={() => goToScreen('Program')}/>
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ProductDetails', item)
                    }}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
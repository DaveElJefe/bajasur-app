import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import SearchBar from '../shared/searchBar';
import FlatText from '../shared/flatText';
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
        <View style={styles.container}>
            <SearchBar inputHolder='Buscar elemento' cameraPress={() => console.log('Abriendo camara')}/>
            <FlatText text='Promociones' textWeight='normal' textSize={16} alignment='flex-start' textColor='#888'/>
            <Text style={globalStyles.titleText}>---PRUEBAS---</Text>
            <FlatButton text='Iniciar sesion' textSize={24} textForm='none' textColor='#fff' bgColor='#0782F9' onPress={() => goToScreen('Login')}/>
            
        </View>
    )
}

/*
Estas son las pruebas para los detalles de un producto
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
*/

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: '3%',
        marginHorizontal: '7%'
    },
    searchView:{
        width: '85%',
        alignItems: 'center',
        flexDirection: 'row',
    }
})
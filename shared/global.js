import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginTop: 5
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 14,
        marginTop: 6,
    }
});

export const images = {
    //Crear un objeto con imagenes parecidas
    /*ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }*/
};
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../shared/global';
import Card from '../shared/card';

export default function ProductDetails( { route } ){
    const item = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <View style={styles.rating}>
                    <Text>Item rating: {item.rating}</Text>
                    
                </View>
            </Card>
        </View>
    )
}

//<Image source={images.ratings[item.rating]}/>

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    container: {
        padding: 24
    }
});
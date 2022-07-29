//Home
/*
import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ProductForm from './productForm';

export default function Home( { navigation } ){

    const [modalOpen, setModalOpen] = useState(false);

    const [products, setProducts] = useState([
        {title: 'Product test 1', rating: 5, description: 'Body Text Test', key: '1'},
        {title: 'Product test 2', rating: 4, description: 'Body Text Test', key: '2'},
        {title: 'Product test 3', rating: 3, description: 'Body Text Test', key: '3'},
    ]);

    const addProduct = (product) => {
        product.key = Math.random().toString();
        setProducts((currentProducts) => {
            return [product, ...currentProducts]
        });
        setModalOpen(false);
    }
    
    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide' onRequestClose={() => setModalOpen(false)}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            name='close' 
                            size={24}
                            onPress={() => setModalOpen(false)}
                        />
                        <ProductForm addProduct={addProduct}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                style={styles.modalToggle}
                name='add' 
                size={24}
                onPress={() => setModalOpen(true)}
            />

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

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#333',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent:{
        flex: 1,
    }
})
*/
//ProductForm
/*
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const productSchema = yup.object({
    title: yup.string().required().min(3),
    description: yup.string().required().min(12),
    rating: yup.string().required().test('is-num-1-5', 'Rating debe ser entre 1 y 5', (val) => {
        return parseInt(val) >= 1 && parseInt(val) <= 5;
    })
})

export default function ProductForm( { addProduct } ){

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    rating: '',
                    description: '',
                }}
                validationSchema={productSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addProduct(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Product name'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Product description'
                            onChangeText={formikProps.handleChange('description')}
                            value={formikProps.values.description}
                            onBlur={formikProps.handleBlur('description')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.description && formikProps.errors.description }</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Product rating (1-5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>
                        <FlatButton text='Sumbit' bgColor='maroon' txtColor='#fff' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
*/
//ProductDetails
/*
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ProductDetails( { route } ){

    const item = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <View style={styles.rating}>
                    <Text>Item rating: </Text>
                    <Image source={images.ratings[item.rating]}/>
                </View>
            </Card>
        </View>
    )
}

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
*/
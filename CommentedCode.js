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
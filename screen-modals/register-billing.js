import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../shared/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/flatButton.js';

export default function RegisterBilling(){

    return(
        <View style={globalStyles.container}>
            <Text>Modal de nueva factura!</Text>
        </View>
    )
}
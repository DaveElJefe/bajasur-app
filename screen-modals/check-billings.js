import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../shared/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/flatButton.js';

export default function CheckBillings(){

    return(
        <View style={globalStyles.container}>
            <Text>Modal de consulta de facturas</Text>
        </View>
    )
}
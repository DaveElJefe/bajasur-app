import React, {useState} from 'react';
import { StyleSheet, View, Text, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import UpdateTaxData from '../screen-modals/update-taxData';
import RegisterBilling from '../screen-modals/register-billing';
import CheckBillings from '../screen-modals/check-billings';

export default function Billing(){
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    const [checkModalOpen, setCheckModalOpen] = useState(false);

    return(
        <View style={globalStyles.container}>
            <Modal visible={registerModalOpen} animationType='slide' onRequestClose={() => setRegisterModalOpen(false)}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <RegisterBilling/>
                        <FlatButton text='Cancelar' bgColor='#fff' txtColor='#0782F9' onPress={() => setRegisterModalOpen(false)}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal visible={updateModalOpen} animationType='slide' onRequestClose={() => setUpdateModalOpen(false)}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <UpdateTaxData/>
                        <FlatButton text='Cancelar' bgColor='#fff' txtColor='#0782F9' onPress={() => setUpdateModalOpen(false)}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal visible={checkModalOpen} animationType='slide' onRequestClose={() => setCheckModalOpen(false)}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <CheckBillings/>
                        <FlatButton text='Cancelar' bgColor='#fff' txtColor='#0782F9' onPress={() => setCheckModalOpen(false)}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Text style={globalStyles.titleText}>Pantalla de facturacion</Text>
            <FlatButton text='Nueva factura' bgColor='#fff' txtColor='#0782F9' onPress={() => setRegisterModalOpen(true)}/>
            <FlatButton text='Actualizar datos fiscales' bgColor='#fff' txtColor='#0782F9' onPress={() => setUpdateModalOpen(true)}/>
            <FlatButton text='Consulta de facturas' bgColor='#fff' txtColor='#0782F9' onPress={() => setCheckModalOpen(true)}/>
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
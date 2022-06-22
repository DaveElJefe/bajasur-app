import React, {useState} from 'react';
import { StyleSheet, View, Text, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../shared/global';
import FlatButton from '../shared/flatButton';
import EditProfile from '../screen-modals/edit-profile';

export default function Profile(){
    const [editModalOpen, setEditModalOpen] = useState(false);

    return(
        <View style={globalStyles.container}>
            <Modal visible={editModalOpen} animationType='slide' onRequestClose={() => setEditModalOpen(false)}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <EditProfile/>
                        <FlatButton text='Cancelar' bgColor='#fff' txtColor='#0782F9' onPress={() => setEditModalOpen(false)}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Text style={globalStyles.titleText}>Pantalla de mi perfil</Text>
            <FlatButton text='Editar perfil' bgColor='#fff' txtColor='#0782F9' onPress={() => setEditModalOpen(true)}/>
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
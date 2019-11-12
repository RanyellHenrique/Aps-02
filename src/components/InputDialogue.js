import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

//Criação do componente de entrada de texto 

export default props =>
    <TextInput
        multiline
        placeholder={props.name}
        onChangeText={props.receive}
        value={props.text}
        maxLength={128}
        style={styles.key} />



const styles = StyleSheet.create({
    key: {
        backgroundColor: '#001f3f',
        borderRadius: 5,
        color: '#fff',
        fontSize: 15,
        padding: 5,
        margin: 3,
        height: 25,
        width: 250,
    }

})
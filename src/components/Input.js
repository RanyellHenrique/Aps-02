import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

//Criação do componente de entrada de texto

export default props =>
    <TextInput
        multiline
        placeholder={props.name}
        value={props.text}
        onChangeText={props.receive}
        maxLength={128}
        style={props.name === 'texto' ? styles.text : styles.password} />



const styles = StyleSheet.create({
    text: {
        backgroundColor: '#fff',
        width: 280,
        borderRadius: 25,
        color: '#000',
        fontSize: 20,
        padding: 5,
        margin: 3,
        height: 50,
        marginLeft: 7,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    password: {
        backgroundColor: '#001f3f',
        width: 280,
        borderRadius: 25,
        color: '#fff',
        fontSize: 20,
        padding: 5,
        margin: 3,
        height: 50,
        marginLeft: 7,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }

})
import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default props =>
    <TextInput
        multiline
        placeholder={props.name}
        value={props.texto}
        onChangeText={props.chamar}
        maxLength={128}
        style={props.name === 'texto' ? styles.texto : styles.chave} />



const styles = StyleSheet.create({
    texto: {
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
    chave: {
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
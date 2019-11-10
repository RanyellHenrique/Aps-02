import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default props =>
    <TextInput
        multiline
        placeholder={props.name}
        value={props.texto}
        onChangeText={props.chamar}
        maxLength={128}
        style={styles.chave} />



const styles = StyleSheet.create({
    chave: {
        backgroundColor: '#001f3f',
        borderRadius: 5,
        color: '#fff',
        fontSize: 15,
        padding: 5,
        margin: 3,
        height: 25,
        width: 220,
    }

})
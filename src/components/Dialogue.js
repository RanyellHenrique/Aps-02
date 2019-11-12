import React from 'react'
import { Text, StyleSheet } from 'react-native'

//Criação do componente de dialogo

export default props =>
    <Text
        style={props.choose ? styles.dialogue_choose : styles.dialogue}
        onPress={props.chamar}>
        {props.value}
    </Text>


const styles = StyleSheet.create({
    dialogue: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginRight: 45,
        padding: 5,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    dialogue_choose: {
        backgroundColor: '#001f3f',
        color: '#fff',
        borderRadius: 5,
        marginRight: 45,
        padding: 5,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 12},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
})
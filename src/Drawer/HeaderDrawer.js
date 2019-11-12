import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Icon} from 'react-native-elements'
import {LinearGradient} from 'expo-linear-gradient'

//Customização do cabeçalho componente de navegação 'Drawer'

export default () => {
    return (
        <LinearGradient style={styles.container} colors={["#193F76", "#1DBAE5"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Icon name='adb' color='#fff' size={90}/>
            <Text style={styles.text}>Criptografia AES</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 15,
    },
    text:{
        fontSize: 20,
        color:'#fff',
        marginVertical: 2
    }
})
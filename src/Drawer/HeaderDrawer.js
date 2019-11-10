import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Icon} from 'react-native-elements'

export default () => {
    return (
        <View style={styles.container}>
            <Icon name='adb' color='#fff' size={90}/>
            <Text style={styles.text}>Criptografia AES</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#001f3f',
        justifyContent:'center',
        paddingVertical: 15,
    },
    text:{
        fontSize: 20,
        color:'#fff',
        marginVertical: 2
    }
})
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'

export default props =>
    <TouchableOpacity onPress={props.click} style={styles.button}>
      <Icon
        name='code'
        color='#fff'/>
    </TouchableOpacity>


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a90e2',
        borderRadius: 25,
        width: 50,
        height: 50,
        margin: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});
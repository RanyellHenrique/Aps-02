import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements'

//Criação do componente botão

export default props =>
    <TouchableOpacity onPress={props.click} style={styles.button}>
        <Icon name='code' color='#fff'/>
    </TouchableOpacity>

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#4a90e2',
      borderRadius: 5,
      margin: 3,
      width: 50
    },
  
  });
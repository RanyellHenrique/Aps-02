import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default props =>
    <TouchableOpacity onPress={props.click} style={styles.botao}>
        <Text style={styles.texto}>
            {props.name}
        </Text>
    </TouchableOpacity>


const styles = StyleSheet.create({
    botao: {
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#4a90e2',
      borderRadius: 5,
      margin: 3,
      width: 50
    },
  
  });
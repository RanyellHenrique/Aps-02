import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {Text, View, StyleSheet} from 'react-native'

//Criação do componente cabeçalho

export default props => {
  return (
    <LinearGradient colors={["#193F76", "#1DBAE5"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      style={styles.header}>
      <View style={{marginLeft: 15}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center', 
    height: 120,
    flexDirection: 'row',
  },
  title:{
    color: '#fff',
    fontSize: 25 
  },
  subTitle:{
    color:'#fff',
    fontSize: 15
  }
  

})

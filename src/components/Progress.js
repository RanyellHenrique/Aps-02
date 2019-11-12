import React from 'react'
import { ProgressBarAndroid } from 'react-native'

//criação da barra de progresso

export default props =>
    <ProgressBarAndroid
        styleAttr='Horizontal'
        indeterminate={false}
        progress={props.value}
        color='#4a90e2'
        backgroundColor='#fff'
    />
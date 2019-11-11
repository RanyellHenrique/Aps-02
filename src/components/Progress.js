import React from 'react'
import { ProgressBarAndroid } from 'react-native'

export default props =>
    <ProgressBarAndroid
        styleAttr='Horizontal'
        indeterminate={false}
        progress={props.value}
        color='#4a90e2'
        backgroundColor='#f0f0f0'
    />
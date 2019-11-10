import React from 'react'
import {Header} from 'react-native-elements'

export default props => {
    return (
        <Header
        centerComponent={{ text: `${props.name}`, style: { color: '#fff', fontSize: 27 } }}
        backgroundColor= '#001f3f'
      />
    )
}
    
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import Header from './HeaderDrawer'

class SideMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: false
    }
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
    this.screnn(route)
  }

  screnn = (route) => {
    if(route === 'Screen1'){
      this.setState({menu: false})
    }else{
      this.setState({menu: true})
    }
  }

  render() {
    return (
      <View >
        <ScrollView>
          <Header />
          <TouchableOpacity 
            style={this.state.menu ? styles.view_accessed : styles.view_no_accessed}
            onPress={this.navigateToScreen('Screen1')}>
            <Icon name='home' color='#000' size={30} />
            <Text  style={styles.text} > Home </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={this.state.menu ? styles.view_no_accessed : styles.view_accessed} 
            onPress={this.navigateToScreen('Screen2')}>
            <Icon name='code' color='#000' size={30} />
            <Text  style={styles.text}> Criptografia </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    marginHorizontal: 50
  },
  view_accessed: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderStyle: 'solid'
  },
  view_no_accessed: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderStyle: 'solid',
    backgroundColor: '#d3d3d3'
  }
});


export default SideMenu;
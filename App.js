//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Screen1 from './src/screen/Home'
import Screen2 from './src/screen/Criptografia'
import Screen3 from './src/screen/Descriptografia'
import Custon from './src/Drawer/DrawerCuston'

const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    //Title
    screen: Screen1,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen2: {
    //Title
    screen: Screen2,
    navigationOptions: {
      drawerLabel: 'Criptografia',
    },
  },
},{
  contentComponent: Custon,
  drawerWidth: 300
});



export default createAppContainer(DrawerNavigatorExample);
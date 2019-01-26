import React from 'react'
import { Text, StyleSheet } from 'react-native';
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import {Icon, Header} from 'react-native-elements'

import HomeScreen from '../screens/JustATributeApp';
import LocateScreen from '../screens/LocateScreen';
import ScanScreen from '../screens/ScanScreen';

const Menu = createDrawerNavigator({
    "HomeScreen" : { screen: HomeScreen },
    "LocateScreen": { screen: LocateScreen },
    "ScanScreen": { screen: ScanScreen }
  },
  {
    drawerWidth: 300,
    drawerPosition: 'right',
    initialRouteName: 'HomeScreen',
  })

const MenuContainer = () => {
  let pressMenu

  return(
    <React.Fragment>
      <Header
        backgroundColor="white"
        rightComponent={
          <Icon
            name="menu"
            onPress={() => {
              pressMenu.dispatch(DrawerActions.toggleDrawer())
                }}
           />
        }
      />
      <Menu
         ref={navigatorRef => { pressMenu = navigatorRef}}
      />
    </React.Fragment>
  )
}

export default MenuContainer


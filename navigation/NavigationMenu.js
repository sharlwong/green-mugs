import React from 'react'
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import {Icon, Header} from 'react-native-elements'

import HomeScreen from '../screens/JustATributeApp';
import ScanScreen from '../screens/ScanScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RedeemSucessScreen from '../screens/RedeemSucessScreen';

const Menu = createDrawerNavigator(
  {
    "HomeScreen": { screen: HomeScreen },
    "ScanScreen": { screen: ScanScreen },
    "SettingsScreen": { screen: SettingsScreen },
    "RedeemSucessScreen": {screen: RedeemSucessScreen}
  },
  {
    drawerWidth: 300,
    drawerPosition: 'right',
    initialRouteName: 'HomeScreen',
  }
)

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

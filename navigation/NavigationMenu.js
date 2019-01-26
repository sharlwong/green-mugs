import React from 'react'
import { Text, StyleSheet, Image } from 'react-native';
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import {Icon, Header} from 'react-native-elements'

import LocateScreen from '../screens/LocateScreen';
import ScanScreen from '../screens/ScanScreen';
import AccountScreen from '../screens/AccountScreen';
import RewardsScreen from '../screens/RewardsScreen';
import FAQScreen from '../screens/FAQScreen';

const Menu = createDrawerNavigator(
  {
    "LocateScreen": { 
      screen: LocateScreen,
      navigationOptions: {
          title: 'Locate Green Mugs Machine',
          drawerIcon: () => (
          <Image
            source={require("../assets/images/locate-icon.png")}
            style={{marginLeft: 5, width: 24, height: 24, width: 24, height: 24}}
          />
        )
      }
    },
    "RewardsScreen": { 
      screen: RewardsScreen,
      navigationOptions: {
          title: 'Rewards',
          drawerIcon: () => (
          <Image
            source={require("../assets/images/rewards-icon.png")}
            style={{marginLeft: 5, width: 24, height: 24}}
          />
        )
      }
    },
    "AccountScreen": { 
      screen: AccountScreen,
      navigationOptions: {
          title: 'My Account',
          drawerIcon: () => (
          <Image
            source={require("../assets/images/account-icon.png")}
            style={{marginLeft: 5, width: 24, height: 24}}
          />
        )
      }
    },
    "FAQScreen": { 
      screen: FAQScreen,
      navigationOptions: {
          title: 'FAQ',
          drawerIcon: () => (
          <Image
            source={require("../assets/images/faq-icon.png")}
            style={{marginLeft: 5, width: 24, height: 24}}
          />
        )
      }
    },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'right',
    initialRouteName: 'LocateScreen',
    contentOptions: {
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 14,
        marginLeft: 0
      }
    }
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


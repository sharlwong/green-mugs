import React from 'react'
import { 
  Text, 
  StyleSheet, 
  Image,
  ImageBackground,
  View
  } from 'react-native';
import {createDrawerNavigator, DrawerActions, createStackNavigator} from 'react-navigation'
import {Icon, Header} from 'react-native-elements'

import LocateScreen from '../screens/LocateScreen';
import ScanScreen from '../screens/ScanScreen';
import AccountScreen from '../screens/AccountScreen';
import RewardsScreen from '../screens/RewardsScreen';
import FAQScreen from '../screens/FAQScreen';

import HeaderBar from './HeaderBar.js'

const LocateScreenStack = createStackNavigator(
  {
    LocateScreen: {
      screen: LocateScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBar headerTitle = 'Green Mugs' />,
    }),
  }
);

const ScanScreenStack = createStackNavigator(
  {
    ScanScreen: {
      screen: ScanScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBar headerTitle = 'QR Code Scanner' />,
    }),
  }
);


const RewardsScreenStack = createStackNavigator(
  {
    RewardsScreen: {
      screen: RewardsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBar headerTitle = 'Rewards' />
    }),
  }
);

const AccountScreenStack = createStackNavigator(
  {
    AccountScreen: {
      screen: AccountScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBar headerTitle = 'My Account' />
    }),
  }
);

const FAQScreenStack = createStackNavigator(
  {
    FAQScreen: {
      screen: FAQScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBar headerTitle = 'FAQ' />
    }),
  }
);

const MenuStack = createDrawerNavigator(
  {
    "LocateScreen": { 
      screen: LocateScreenStack,
      navigationOptions: {
        title: 'Locate Green Mugs Machine',
        drawerIcon: () => (
          <Image
            source={require("../assets/images/locate-icon.png")}
            style={{marginLeft: 5, width: 24, height: 24}}
          />          
        ) 
      }
    },
    "ScanScreenStack": {
      screen: ScanScreenStack,
      navigationOptions: {
          drawerLabel: () => null
      }
    },
    "RewardsScreen": { 
      screen: RewardsScreenStack,
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
      screen: AccountScreenStack,
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
      screen: FAQScreenStack,
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
    drawerWidth: 280,
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
);

export default MenuStack;
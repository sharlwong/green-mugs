import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MenuStack from './navigation/NavigationMenu';
import Tutorial from './screens/TutorialScreen';
import JustATributeApp from './screens/JustATributeApp';

import {Icon} from 'react-native-elements';
import { 
  Text, 
  StyleSheet, 
  Image,
  ImageBackground,
  TouchableOpacity
  } from 'react-native';


const TutorialStack = createStackNavigator(
  {
    Tutorial: {
      screen: Tutorial,
    }
  },
  {
    headerMode: 'none', 
  }
);

export const RootStack = createStackNavigator(
  {
    TutorialStack: { screen: TutorialStack },
    MenuStack: { screen: MenuStack },
  },
  {
    headerMode: 'none',
    initialRouteName: 'MenuStack'
  }
)

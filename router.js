import { createStackNavigator } from 'react-navigation'
import MenuContainer from './navigation/NavigationMenu'

import UserLoginForm from './screens/SettingsScreen'
import SignUpForm from './screens/SettingsScreen'

const EntryStack = createStackNavigator(
  {
    UserLogin: {
      screen: UserLoginForm,
    },
    SignUpForm: {
      screen: SignUpForm,
    },
  },
  {
    headerMode: 'float', 
  }
);
export const RootStack = createStackNavigator(
  {
    // EntryStack: { screen: EntryStack },
    MenuStack: { screen: MenuContainer },
  },
  {
    headerMode: 'none',
    initialRouteName: 'MenuStack',
  }
)
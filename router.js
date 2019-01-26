import { createStackNavigator } from 'react-navigation'
import MenuContainer from './navigation/NavigationMenu'

import Tutorial from './screens/TutorialScreen';
import JustATributeApp from './screens/JustATributeApp';

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
    MenuStack: { screen: MenuContainer },
  },
  {
    headerMode: 'none',
    initialRouteName: 'TutorialStack',
  }
)

import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text 
} from 'react-native';

import {Icon} from 'react-native-elements';
import GreyBox from '../components/GreyBox.js';

export default class AccountScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Icon
          name="menu"
          onPress={() => navigation.toggleDrawer()}
          iconStyle={{marginRight: 20}}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>My Account</Text>
        <GreyBox 
          boxMarginTop= { 20 }
          boxWidth = { 200 }
          boxHeight = { 200 }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,  
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center'
  },
});

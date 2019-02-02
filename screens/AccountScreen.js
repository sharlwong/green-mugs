import React from 'react';
import { 
	ScrollView, 
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
      <ScrollView style={styles.container}>
        <Text>My Account</Text>
        <GreyBox 
          positionFromTop: '200'
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,  
    backgroundColor: '#fff',
  },
});

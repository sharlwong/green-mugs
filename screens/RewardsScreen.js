import React from 'react';
import { 
	ScrollView, 
	StyleSheet, 
	Text 
} from 'react-native';

import {Icon} from 'react-native-elements';

export default class RewardsScreen extends React.Component {
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
        <Text>Rewards</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

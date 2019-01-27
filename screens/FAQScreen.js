import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text 
} from 'react-native';

import {Icon} from 'react-native-elements';

export default class FAQScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Icon
          name="menu"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    };
  };
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>FAQ</Text>
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

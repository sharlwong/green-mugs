import React, { Component } from 'react';
import { BarCodeScanner, Permissions } from 'expo';
import { Alert,
		Linking,
		Dimensions,
		LayoutAnimation,
		Text,
		Button,
		View,
		StatusBar,
		StyleSheet,
		TouchableOpacity } from 'react-native';

export default class RedeemSuccess extends Component {
	static navigationOptions = {
	    header: null,
  	};

	render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
}
}
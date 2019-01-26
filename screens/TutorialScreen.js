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

export default class Tutorial extends Component {
	static navigationOptions = {
	    header: null,
  	};

	render() {
		const {navigate} = this.props.navigation;
	    return (
	      <View style={styles.button}>
	        <Button
		        title="Skip Tutorial"
		        onPress={() => navigate('MenuStack')}
		      />
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
    button: {
        marginTop: 200
    }
});
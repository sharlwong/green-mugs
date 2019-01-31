import React, 
{ Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import {Icon} from 'react-native-elements';

class GreyBox extends Component {
	
	render() {
		const { onPress, text, buttonWidth='100', buttonHeight='40', buttonMarginTop, buttonMarginLeft } = this.props;
		let buttonWidthNumber = parseInt(buttonWidth.replace(/['"]+/g, ''), 10)
		let buttonHeightNumber = parseInt(buttonHeight.replace(/['"]+/g, ''), 10)
		let buttonMarginTopNumber = parseInt(buttonMarginTop.replace(/['"]+/g, ''), 10)
		let buttonMarginLeftNumber = parseInt(buttonMarginLeft.replace(/['"]+/g, ''), 10)

		return (
		  <TouchableOpacity 
			  style={[styles.buttonStyle,{width: buttonWidthNumber, height: buttonHeightNumber, marginTop: buttonMarginTopNumber, marginLeft: buttonMarginLeftNumber}]}
				onPress={() => onPress()}
		  >
				<Text style={styles.textStyle}>
	        	{text}
				</Text>
		  </TouchableOpacity>
		);
	}
}

GreyBox.propTypes = {
  buttonWidth: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
	  fontSize: 16,
		color: '#ffffff',
		textAlign:'center'
	},
  buttonStyle: {
    backgroundColor: '#5FB67D',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    flexDirection: 'row', 
    justifyContent: 'center'
  }
});

export default GreyBox;
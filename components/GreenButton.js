import React, 
{ Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import {Icon} from 'react-native-elements';

class GreenButton extends Component {
	
	render() {
		const { onPress, text, buttonWidth, buttonHeight, buttonMarginTop, buttonMarginLeft, buttonFontSize, buttonFontFamily} = this.props;
		
		return (
		  <TouchableOpacity 
			  style={[styles.buttonStyle,{width: buttonWidth, height: buttonHeight, marginTop: buttonMarginTop, marginLeft: buttonMarginLeft}]}
				onPress={() => onPress()}
		  >
				<Text style={[styles.textStyle, {fontSize: buttonFontSize, fontFamily: buttonFontFamily}]}>
	        	{text}
			</Text>
		  </TouchableOpacity>
		);
	}
}

GreenButton.propTypes = {
  buttonWidth: PropTypes.number.isRequired,
  buttonHeight: PropTypes.number.isRequired,
  buttonMarginTop: PropTypes.number.isRequired,
  buttonMarginLeft: PropTypes.number.isRequired,
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GreenButton;
import React, 
{ Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import {Icon} from 'react-native-elements';

class GreenButton extends Component {
	
	render() {
		const { onPress, text, icon } = this.props;

		return (
		  <TouchableOpacity 
			  style={styles.buttonStyle}
				onPress={() => onPress()}
		  >
		  	<Icon
          name={icon}
          iconStyle={styles.iconStyle}
        />
				<Text style={styles.textStyle}>
	        {text}
				</Text>
		  </TouchableOpacity>
		);
	}
}

GreenButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	iconStyle: {
		marginRight: 20, 
		color:'white', 
		textAlign:'center'
	},
  textStyle: {
	  fontSize: 20,
		color: '#ffffff',
		textAlign:'center'
	},
  buttonStyle: {
    width: '100%',
    backgroundColor: '#5FB67D',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    flexDirection: 'row', 
    justifyContent: 'center'
  }
});

export default GreenButton;
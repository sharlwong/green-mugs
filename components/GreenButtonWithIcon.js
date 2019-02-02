import React, 
{ Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import {Icon} from 'react-native-elements';

class GreenButtonWithIcon extends Component {
	
	render() {
		const { onPress, text, icon, buttonWidth, buttonHeight } = this.props;

		return (
		  <TouchableOpacity 
			  style={[styles.buttonStyle, {width:buttonWidth}, {height:buttonHeight}]}
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

GreenButtonWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	iconStyle: {
		marginRight: 10, 
		color:'white', 
		textAlign:'center'
	},
  textStyle: {
	  fontSize: 16,
		color: '#ffffff',
		textAlign:'center',
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

export default GreenButtonWithIcon;
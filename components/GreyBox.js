import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	View,
	Text,
	StyleSheet
} from 'react-native';

class GreyBox extends Component {
	render() {
		const { boxMarginTop, boxWidth, boxHeight } = this.props;
		
		return (
			<View style={[styles.boxStyle, {marginTop: boxMarginTop, width: boxWidth, height: boxHeight}]} />
		);
	}
}

GreyBox.propTypes = {
  boxMarginTop: PropTypes.number.isRequired,
  boxWidth: PropTypes.number.isRequired,
  boxHeight: PropTypes.number.isRequired
};


const styles = StyleSheet.create({
	boxStyle: {
		borderRadius: 9,
		borderWidth: 1,
		borderColor: "#D3D3D3",
		padding: 20
	} 
});


export default GreyBox;
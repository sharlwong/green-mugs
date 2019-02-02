import React, { Component } from 'react';

import { 
	View,
	Text,
	StyleSheet
} from 'react-native';

class GreyBox extends Component {
	render() {
		const { marginTop } = this.props;
		let marginTopNumber = parseInt(marginTop.replace(/['"]+/g, ''), 10)

		return (
			<View style={[styles.boxStyle, {marginTop: marginTopNumber}]} />
		);
	}
}

const styles = StyleSheet.create({
	boxStyle: {
		borderRadius: 9,
		borderWidth: 1,
		borderColor: "#D3D3D3",
		width: 334,
		height: 168
	} 
});


export default GreyBox;


// position: absolute;
// width: 334px;
// height: 168px;
// left: 21px;
// top: 79px;

// background: #FFFFFF;
// /* All around shadow */
// box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
// border-radius: 9px;
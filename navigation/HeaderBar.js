import React from 'react'
import { 
  Text, 
  StyleSheet, 
  Image,
  ImageBackground
  } from 'react-native';

import {Icon, Header} from 'react-native-elements'


export default class HeaderBar extends React.Component {
	render() {
		const { headerTitle } = this.props;
		return (
		    <ImageBackground
				source={require("../assets/images/green-mugs-logo.png")}
				style={{marginLeft: 10, height: 20, width: 20 }} >
				<Text style={{ 
					width: 200,
					marginLeft: 40
					}}>
						{headerTitle}
				</Text>
		    </ImageBackground>
		)
	}
}

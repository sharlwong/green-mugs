import React from 'react'
import { 
  Text, 
  StyleSheet, 
  Image,
  ImageBackground
  } from 'react-native';


export default class HeaderBar extends React.Component {
	render() {
		const { headerTitle } = this.props;
		return (
		    <ImageBackground
				source={require("../assets/images/green-mugs-logo.png")}
				style={
					{	marginLeft: 20, 
						height: 28, 
						width: 27 
					}
				} >
				<Text style={{ 
					width: 400,
					marginLeft: 40,
					fontSize: 20
					}}>
						{headerTitle}
				</Text>
		    </ImageBackground>
		)
	}
}

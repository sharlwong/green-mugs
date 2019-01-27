import React from 'react'
import { 
  Text, 
  StyleSheet, 
  Image,
  ImageBackground
  } from 'react-native';

 import { Font } from 'expo';


export default class HeaderBar extends React.Component {
	state = {
		fontLoaded: false,
	}

	async componentWillMount() {
    await Expo.Font.loadAsync({
      'abeezee': require('../assets/fonts/ABeeZee-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
	}

	render() {
		const { headerTitle } = this.props;
		return (
		    <ImageBackground
				source={require("../assets/images/green-mugs-logo.png")}
				style={
					{	marginLeft: 25, 
						height: 28, 
						width: 27 
					}
				} >
					
					{
	          this.state.fontLoaded ? (
	            <Text style={{ 
								width: 400,
								marginLeft: 45,
								fontFamily: 'abeezee',
								fontSize: 20
								}}>
									{headerTitle}
							</Text>
	          ) : (
	          	<Text style={{ 
								width: 400,
								marginLeft: 45,
								fontSize: 20
								}}>
									{headerTitle}
							</Text>
	          )

	        }

		    </ImageBackground>
		)
	}
}

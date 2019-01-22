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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
    	position:'absolute',
    	top:86,
    	left:31,
    	fontWeight:'bold',
        fontFamily:'Roboto',
        fontSize:14,
        color:'#5FB67D'
    },
    box: {
    	position:'absolute',
    	top:120,
    	left:31,
    	width:Dimensions.get('window').width-62,
    	height:59,
    	borderRadius: 4,
	    borderWidth: 0.5,
	    borderColor: '#000000',
	    shadowColor: '#000',
	    shadowOffset: { width: 0, height: 2 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2
    },
    points: {
    	position:'absolute',
    	top:125,
    	left:69,
        fontFamily:'Roboto',
        fontSize:14,
        color:'#000000'
    },
    fifty: {
    	position:'absolute',
    	top:146,
    	left:212,
        fontWeight:'bold',
        fontFamily:'Roboto',
        fontSize:18,
        color:'#5FB67D'
    },
    box2: {
    	position:'absolute',
    	textAlign:'center',
    	textAlignVertical: 'bottom',
    	left:31,
    	width:Dimensions.get('window').width-62,
    	height:90,
    	backgroundColor:"#F7F7F7",
    	borderRadius: 4,
	    borderWidth: 0.5,
	    borderColor: '#000000',
	    shadowColor: '#000',
	    shadowOffset: { width: 0, height: 2 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2
   	},
   	position1: {
    	top:205,
    },
    position2: {
    	top:310,
    },
    position3: {
    	top:415,
    },
    position4: {
    	top:520,
    },
    textReward: {
    	fontWeight:'bold',
        fontFamily:'Roboto',
        fontSize:14,
        color:'#000000',
        position:'absolute',
        justifyContent:'center',
        textAlign:'center'
    },
    position5: {
    	top:275,
    	textAlign:'center'
    },
    position6: {
    	top:380,
    },
    position7: {
    	top:485,
    },
    position8: {
    	top:590,
    },
});


export default class RedeemSuccess extends Component {
	static navigationOptions = {
	    header: null,
  	};

	render() {
    return (
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <Text style={styles.title}>CHOOSE YOUR REWARDS</Text>
        <Text style={styles.box} />
        <Text style={styles.points}>Points available{"\n"}for redemption:</Text>
        <Text style={styles.fifty}>50 points</Text>
        <Text style={[styles.box2,styles.position1]} />
        <Text style={[styles.box2,styles.position2]} />
        <Text style={[styles.box2,styles.position3]} />
        <Text style={[styles.box2,styles.position4]} />
        <Text style={[styles.textReward,styles.position5]}>Food & Beverage</Text>
        <Text style={[styles.textReward,styles.position6]}>Lifestyle</Text>
        <Text style={[styles.textReward,styles.position7]}>Travel & Leisure</Text>
        <Text style={[styles.textReward,styles.position8]}>Environment</Text>
      </View>
    )
}
}
import React from 'react';
import { 
	ScrollView, 
	StyleSheet, 
	Text
} from 'react-native';

import PropTypes from 'prop-types';

import {Icon} from 'react-native-elements';

import GreyBox from '../components/GreyBox.js';
import GreenButton from '../components/GreenButton.js';

import { Component } from 'react';
import { BarCodeScanner, Permissions } from 'expo';
import { Alert,
    Linking,
    Modal,
    Dimensions,
    LayoutAnimation,
    Button,
    Image,
    ImageBackground,
    View,
    StatusBar,
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
      borderRadius: 9,
      borderWidth: 0.5,
      borderColor: '#000000',
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.8,
      // shadowRadius: 2
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
      top:136,
      left:212,
        fontWeight:'bold',
        fontFamily:'Roboto',
        fontSize:18,
        color:'#5FB67D'
    },
    box2: {
      flex:1,
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      left:31,
      width:Dimensions.get('window').width-62,
      height:90,
      backgroundColor:"#F7F7F7",
      borderRadius: 9,
      borderWidth: 0.5,
      borderColor: '#000000',
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.8,
      // shadowRadius: 2
    },
    textReward: {
      fontWeight:'bold',
        fontFamily:'Roboto',
        fontSize:14,
        color:'#000000',
        position:'absolute',
        justifyContent:'center',
        textAlign:'center'
    }
});


export default class RewardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      return {
        headerRight: (
          <Icon
            name="menu"
            onPress={() => navigation.toggleDrawer()}
            iconStyle={{marginRight: 20}}
          />
        )
      };
    };

  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    ModalVisibleStatus: false,
    uri: require('../assets/images/F_B.jpg')
  };

  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
  }

  ClickFunction(visible,imagesource){
    this.setState({ModalVisibleStatus: visible,uri: imagesource});
  }

  _handleBarCodeRead = () => { this.ShowModalFunction(true) }
  

  render() {

    return (
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <Text style={styles.title}>CHOOSE YOUR REWARDS</Text>
        <Text style={styles.box} />
        <Text style={styles.points}>Points available{"\n"}for redemption:</Text>
        <Text style={styles.fifty}>50 points</Text>
        
        <TouchableOpacity onPress={() => this.ClickFunction(true,require('../assets/images/F_B.jpg'))}>
          <View style={{flexDirection:'column',alignItems:'center'}}>
          <GreyBox
            boxBackgroundColor="#F7F7F7"
            boxMarginTop= { 205 }
            boxWidth = { Dimensions.get('window').width-62 }
            boxHeight = { 90 }/>
          <Text style={[styles.textReward,{top:275}]}>Food & Beverage</Text>
          <Image source={require('../assets/images/FandB.jpg')} style={{position:'absolute', top:210}} />
           </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.ClickFunction(true,require('../assets/images/massage.jpg'))}>
          <View style={{flexDirection:'column',alignItems:'center'}}>
          <GreyBox
            boxBackgroundColor="#F7F7F7"
            boxMarginTop= { 15 }
            boxWidth = { Dimensions.get('window').width-62 }
            boxHeight = { 90 }/>
          <Text style={[styles.textReward,{top:80}]}>Lifestyle</Text>
          <Image source={require('../assets/images/Lifestyle.jpg')} style={{position:'absolute', top:25}} />
           </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.ClickFunction(true,require('../assets/images/travel.jpg'))}>
          <View style={{flexDirection:'column',alignItems:'center'}}>
          <GreyBox
            boxBackgroundColor="#F7F7F7"
            boxMarginTop= { 15 }
            boxWidth = { Dimensions.get('window').width-62 }
            boxHeight = { 90 }/>
          <Text style={[styles.textReward,{top:80}]}>Travel & Leisure</Text>
          <Image source={require('../assets/images/travelandleisure.jpg')} style={{position:'absolute', top:25}} />
           </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.ClickFunction(true,require('../assets/images/tree.jpg'))}>
          <View style={{flexDirection:'column',alignItems:'center'}}>
          <GreyBox
            boxBackgroundColor="#F7F7F7"
            boxMarginTop= { 15 }
            boxWidth = { Dimensions.get('window').width-62 }
            boxHeight = { 90 }/>
          <Text style={[styles.textReward,{top:80}]}>Environment</Text>
          <Image source={require('../assets/images/environment.jpg')} style={{position:'absolute', top:25}} />
           </View>
        </TouchableOpacity>

          <Modal
          transparent={true}
          animationType={"slide"}
          visible={this.state.ModalVisibleStatus} 
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >

            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.ModalInsideView,{height:400, width:400, justifyContent: 'center', alignItems: 'center', backgroundColor:"#ffffff"}]}>
                {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
                    <Image source={this.state.uri} style={{flex: 1, alignSelf: 'stretch', width: undefined,height: undefined}} resizeMode='contain' />
                    <Text style={{marginBottom:20}}>Rewards to come soon!</Text>
                    <TouchableOpacity onPress={() => { 
                        this.ShowModalFunction(!this.state.ModalVisibleStatus);
                        this.props.navigation.navigate('RewardScreen');
                      }}>
                    <Text style={{backgroundColor:"#5FB67D",color:"#ffffff",fontWeight:'bold',fontSize:18,fontFamily:'Roboto',marginBottom:40, justifyContent: 'center', alignItems: 'center'}}>BACK TO REWARDS</Text>
                    </TouchableOpacity>
                </View>
             </View>
        </Modal>

        </View>
        /*   
        <Text style={[styles.box2,{top:520}]} />
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={[styles.textReward,{top:275}]}>Food & Beverage</Text>
        <Text style={[styles.textReward,{top:380}]}>Lifestyle</Text>
        <Text style={[styles.textReward,{top:485}]}>Travel & Leisure</Text>
        <Text style={[styles.textReward,{top:590}]}>Environment</Text>
        <Image source={require('../assets/images/FandB.jpg')} style={{position:'absolute', top:210}} />
        <Image source={require('../assets/images/Lifestyle.jpg')} style={{position:'absolute', top:325}} />
        <Image source={require('../assets/images/travelandleisure.jpg')} style={{position:'absolute', top:430}} />
        <Image source={require('../assets/images/environment.jpg')} style={{position:'absolute', top:525}} />
        </View>
        */
    );
}
}

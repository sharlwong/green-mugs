import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import {Icon} from 'react-native-elements';

import GreenButton from '../components/GreenButton.js';

export default class LocateScreen extends Component {
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

    render() { 
        return (
          <View style={{paddingLeft: 30, paddingRight:30, backgroundColor: 'white', height: Dimensions.get('window').height}}>
            <ImageZoom 
                  cropWidth={Dimensions.get('window').width-60}
                  cropHeight={(400/265)*(Dimensions.get('window').width-60)}
                  imageWidth={337}
                  imageHeight={600}
                  style={{borderRadius: 10, marginTop: 10}}
            >
              <Image source={require('../assets/images/pokemon-go-map-copy.jpg')} />
            </ImageZoom>
            
            <GreenButton
              icon="crop-free"
              text="Scan to loan or return mug"
              onPress={() => this.props.navigation.navigate('ScanScreen')}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FAQScreen')}
            >
              <Text style={{marginTop: 10}}>See full list of locations of Green Mugs Machines.</Text>                 
            </TouchableOpacity>
          </View>
      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        width: 320
    },
    empty: {
        flex: 1
    },
    button: {
      width: 300,
      backgroundColor: '#5FB67D',
      borderRadius: 10,
      color: 'white',
      marginTop: 10,
      padding: 10,
      textAlign: 'center',
      fontSize: 14
    }
});
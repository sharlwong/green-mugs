import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    },
    donebitton: {
    color:'black',
    },
    image: {
        /*flex: 2,
        width: Dimensions.get('window').width / 3 - 10 ,
        height: Dimensions.get('window').width / 3 - 10,
        margin:5,
        resizeMode: 'contain',
        alignItems: 'center'*/
        top:278,
        //left:Dimensions.get('window').width/2-143/2,
        position: 'absolute',
        //width: 143,
        height: 120,
        //justifyContent: 'center',
        //alignItems: 'center'

        flex: 1,
        resizeMode: 'contain'
    },
    title: {
        top:95,
        color: '#abcdef',
        textAlign: 'center',
        fontWeight:'bold',
        fontFamily:'Roboto',
        fontSize:18
    },
    subtitle: {
        top:105,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily:'Roboto',
        fontSize:14
    },
    boxi: {
        top:162,
        width:Dimensions.get('window').width,
        height:88,
        backgroundColor: '#5FB67D',
        borderRadius:12,
        color: '#abcdef',
        alignItems: 'center'
    },
});

const Slides = [
];


export default class App extends React.Component {
  state = {
        //showRealApp: false
    }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    return(

    );
    //this.setState({ showRealApp: true });
  }

  render() {
    return(
        <View>
        <Text style={styles.title}>Green Mugs</Text>
        </View>
    )
  }
}


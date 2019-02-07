import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  Button
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  state = {
    showRealApp: false
  }
  _onDone = () => {
    return(
      <View>
        <Text style={styles.donebitton}>Done</Text>
      </View>
    );
  }

  _renderDoneButton = () => {
    return (
      <TouchableOpacity 
				onPress={() => this.props.navigation.navigate('LocateScreen')}
		  >
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
      </TouchableOpacity>
    );
  }

  _renderNextButton = () => {
    return (
      <TouchableOpacity 
				onPress={() => this.props.navigation.navigate('LocateScreen')}
		  >
        <Text>Skip</Text>
    </TouchableOpacity>

    );
  }

  _renderItem = props => (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <Text style={styles.boxi}>{props.boxi} </Text>        
      <Text style={styles.title}>{props.title} </Text>
      <Text style={styles.subtitle}>{props.subtitle} </Text>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={props.image} style={styles.image} />
      </View>
      <Image source={props.bullet2} style={styles.bullet2} />
      <Image source={props.bullet2} style={styles.bullet3} />
      <Image source={props.bullet2} style={styles.bullet4} />
      <Image source={props.bullet2} style={styles.bullet5} />
      <Image source={props.greenbullet1} style={styles.bullet1} />
      <Image source={props.greenbullet2} style={styles.bullet2} />
      <Image source={props.greenbullet3} style={styles.bullet3} />
      <Image source={props.greenbullet4} style={styles.bullet4} />
      <Image source={props.greenbullet5} style={styles.bullet5} />
    </View>
  );

  _dotStyle = props => (
    <View style={{backgroundColor:'#abcdef'}} />
  );

  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          slides={Slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          dotStyle={this._dotStyle}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          showSkipButton
        />
        
      );
    }
  }
}


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
    top:278,
    position: 'absolute',
    height: 120,
    flex: 1,
    resizeMode: 'contain'
  },
  title: {
    top:95,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight:'bold',
    fontFamily:'Roboto-Bold',
    fontSize:18
  },
  title2: {
    position:'absolute',
    top:282,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight:'bold',
    fontFamily:'Roboto-Bold',
    fontSize:18
  },
  subtitle: {
    top:105,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily:'Roboto',
    fontSize:14
  },
  subtitle2: {
    position:'absolute',
    top:316,
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
  boxi2: {
    position:'absolute',
    top:264,
    width:Dimensions.get('window').width,
    height:148,
    backgroundColor: '#5FB67D',
    borderRadius:12,
    color: '#abcdef',
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
  bullet1: {
    position:'absolute',
    top:509,
    left:Dimensions.get('window').width/2-101,
    width:10,
    height:10
  },
  bullet2: {
    position:'absolute',
    top:509,
    left:Dimensions.get('window').width/2-53,
    width:10,
    height:10
  },
  bullet3: {
    position:'absolute',
    top:509,
    left:Dimensions.get('window').width/2-5,
    width:10,
    height:10
  },
  bullet4: {
    position:'absolute',
    top:509,
    left:Dimensions.get('window').width/2+43,
    width:10,
    height:10
  },
  bullet5: {
    position:'absolute',
    top:509,
    left:Dimensions.get('window').width/2+91,
    width:10,
    height:10
  }
});

const Slides = [
    {
      key: 'Tuto1',
      title: 'Find Green Mugs',
      subtitle: 'Locate outlets & collect points',
      boxi: '',
      text: 'Description.\nSay something cool',
      boxiStyle: styles.boxi,
      image: require('../assets/images/Tuto1.jpg'),
      greenbullet1: require('../assets/images/Bullet1.jpg'),
      bullet2: require('../assets/images/Bullet2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#ffffff',
    },

    {
      key: 'Tuto2',
      title: 'Top up your Green Wallet',
      subtitle: "You'll need a $5 deposit to collect a Green Mug",
      boxi: '',
      text: 'Description.\nSay something cool',
      boxiStyle: styles.boxi,
      image: require('../assets/images/Tuto2.jpg'),
      greenbullet1: require('../assets/images/Bullet1.jpg'),
      greenbullet2: require('../assets/images/Bullet1.jpg'),
      bullet2: require('../assets/images/Bullet2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#ffffff'
    },

    {
      key: 'Tuto3',
      title: 'Loan Green Mug',
      subtitle: 'Scan QR code and get a Green Mug on loan for a $5 deposit',
      boxi: '',
      text: 'Description.\nSay something cool',
      boxiStyle: styles.boxi,
      image: require('../assets/images/Tuto3.jpg'),
      greenbullet1: require('../assets/images/Bullet1.jpg'),
      greenbullet2: require('../assets/images/Bullet1.jpg'),
      greenbullet3: require('../assets/images/Bullet1.jpg'),
      bullet2: require('../assets/images/Bullet2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#ffffff'
    },

    {
      key: 'Tuto4',
      title: 'Return Green Mug',
      subtitle: 'Scan QR code to return your mug and get back your $5 deposit',
      boxi: '',
      text: 'Description.\nSay something cool',
      boxiStyle: styles.boxi,
      image: require('../assets/images/Tuto4.jpg'),
      greenbullet1: require('../assets/images/Bullet1.jpg'),
      greenbullet2: require('../assets/images/Bullet1.jpg'),
      greenbullet3: require('../assets/images/Bullet1.jpg'),
      greenbullet4: require('../assets/images/Bullet1.jpg'),
      bullet2: require('../assets/images/Bullet2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#ffffff'
    },

    {
      key: 'Tuto5',
      title: 'Redeem Rewards',
      subtitle: 'Accumulate reward points as you save the Earth',
      boxi: '',
      text: 'Description.\nSay something cool',
      boxiStyle: styles.boxi,
      image: require('../assets/images/Tuto5.jpg'),
      greenbullet1: require('../assets/images/Bullet1.jpg'),
      greenbullet2: require('../assets/images/Bullet1.jpg'),
      greenbullet3: require('../assets/images/Bullet1.jpg'),
      greenbullet4: require('../assets/images/Bullet1.jpg'),
      greenbullet5: require('../assets/images/Bullet1.jpg'),
      bullet2: require('../assets/images/Bullet2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#ffffff'
    },

    {
      key: 'Tuto6',
      title: 'Are You Ready?',
      subtitle: "Let's go save the Earth while enjoying our drink!",
      boxifinal: '',
      text: 'Description.\nSay something cool',
      boxifinalStyle: styles.boxifinal,
      image: require('../assets/images/go.png'),
      imageStyle: styles.image,
      backgroundColor: '#ffffff',
      mybutton: "hey"
    }
];


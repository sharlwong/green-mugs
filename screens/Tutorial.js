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
import AppIntroSlider from 'react-native-app-intro-slider';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        flex: 2,
        width: Dimensions.get('window').width / 3 - 10 ,
        height: Dimensions.get('window').width / 3 - 10,
        margin:5,
        resizeMode: 'contain',
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
    dotStyle: {
        backgroundColor: '#aaefad'
    },
    ActiveDotStyle: {
        backgroundColor: '#aaefad'
    }
});

const Slides = [
    {
        key: 'somethun',
        title: 'Find',
        text: 'Description.\nSay something cool',
        image: require('../assets/images/Tuto1.jpg'),
        imageStyle: styles.image,
        backgroundColor: '#ffffff',
    },

    {
        uri: "https://i.imgur.com/XCRnNWn.jpg",
        label: "A cat toy"
    },

    {
        uri: "https://i.imgur.com/dqQX1K0.jpg",
        label: "A close up of a dog"
    },

    {
        uri: "https://i.imgur.com/nZXbSbh.jpg",
        label: "Sheep next to a cat"
    },

    {
        uri: "https://i.imgur.com/mXCjefR.jpg",
        label: "Cat laying on the grass"
    },

    {
        uri: "https://i.imgur.com/AGyxRcc.jpg",
        label: "Bird sitting on a railing"
    }
];

/*export default class JustATributeApp extends Component {
    state = {
        index: 0,
        imageWidth: null
    }

    nextImage(event) {
        const { index, imageWidth } = this.state,
              X = event.nativeEvent.locationX,
              delta = (X < imageWidth/2) ? -1 : +1;

        let newIndex = (index + delta) % Images.length;

        if (newIndex < 0) {
            newIndex = Images.length - Math.abs(newIndex);
        }

        this.setState({
            index: newIndex
        });
    }

    onImageLayout(event) {
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        });
    }

    render() {
        const image = Images[this.state.index];

        return (
            <View style={styles.container}>
                <View style={styles.empty} />
                <TouchableHighlight onPress={this.nextImage.bind(this)}
                                    style={styles.image}>
                  <ImageBackground source={{uri: image.uri}}
                         style={styles.image}
                         onLayout={this.onImageLayout.bind(this)}>
                         <Text style={styles.imageLabel}>{image.label}</Text>
                  </ImageBackground>
                  
                </TouchableHighlight>
                <View style={styles.empty} />
            </View>
        );
    }
}*/

export default class App extends React.Component {
  state = {
        //showRealApp: false
    }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  ActiveDotStyle = {
    backgroundColor: '#aaefad'
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider slides={Slides} onDone={this._onDone}/>;
    }
  }
}


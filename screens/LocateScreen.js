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

export default class LocateScreen extends Component {
	render() {
        return (
            <View style={styles.container}>
                <View style={styles.empty} />
                	<Image source={require('../assets/images/pokemon-go-map.png')}
					     style={styles.image}
					/>
                <View style={styles.empty} />
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
        width: 320,
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
    }
});
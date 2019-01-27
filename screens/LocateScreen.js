import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import {Icon} from 'react-native-elements'
import HeaderBar from '../navigation/HeaderBar';

export default class LocateScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        headerRight: (
          <Icon
            name="menu"
            onPress={() => navigation.toggleDrawer()}
          />
        )
      };
    };

    render() { 
        return (
            <View>
                <Image source={require('../assets/images/pokemon-go-map.png')}
    			         style={styles.image}
    			       />
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
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

import {Icon} from 'react-native-elements';

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
            <View>
                <Image source={require('../assets/images/pokemon-go-map.png')}
    			         style={styles.image}
    			       />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('FAQScreen')}
                >
                  <Text>See full list of locations of Green Mugs Machines.</Text>                 
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('ScanScreen')}
                >
                  <Text>Scan to loan/return mug</Text>                 
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
        height: 400,
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
      width: 200,
      backgroundColor: '#5FB67D',
      marginTop: 10,
      marginLeft: 50
    }
});
import React, { Component } from 'react';
import { Modal,Alert, Linking, Dimensions, LayoutAnimation, Text, TextInput, Button, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

import {Icon} from 'react-native-elements';

import GreenButton from '../components/GreenButton.js';

export default class ScanScreen extends Component {

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
    ModalVisibleStatus: false
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
  }

  _handleBarCodeRead = () => { this.ShowModalFunction(true) }

  _navigateToHome = () => {
    console.log("BEFORE navigate")
    this.props.navigation.navigate('Home')
    console.log("AFTER navigate")
  }

  // _handleBarCodeRead = result => {
  //   if (result.data !== this.state.lastScannedUrl) {
  //     LayoutAnimation.spring();
  //     this.setState({ lastScannedUrl: result.data });
  //     this.props.navigation.navigate('RedeemSuccess')
  //   }
  // };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <View>
                  <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead}
                    style={{
                      height: Dimensions.get('window').height-100,
                      width: Dimensions.get('window').width,
                    }}
                  />
                  <View style={{backgroundColor: 'white', minHeight: 150, flexDirection:'row', justifyContent:'center'}}>
                    <TextInput
                      style={styles.mugCodeButton}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                      placeholder="Or enter Mug Code here"
                    />
                    <GreenButton
                      text="OK"
                      buttonWidth={ 50 }
                      buttonHeight={ 40 }
                      buttonMarginTop={ 20 }
                      buttonMarginLeft={ 10 }
                      onPress={() => this.ShowModalFunction(true)}
                    />
                  </View>
                </View>
              }
        {this._maybeRenderUrl()}

        <StatusBar hidden />

        

        <Modal
          transparent={false}
          animationType={"slide"}
          visible={this.state.ModalVisibleStatus} 
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >

            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.ModalInsideView}>
                {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
                    <Text style={styles.TextStyle}>Thank you for making a difference through Green Mugs!</Text>
                    <Button 
                      title="Click Here To Deduct From Wallet" 
                      onPress={() => { 
                        this.ShowModalFunction(!this.state.ModalVisibleStatus);
                        this.props.navigation.navigate({ routeName: 'AccountScreenItself', params: {walletAction: 'deduct'}});
                      }}
                    />
                </View>
             </View>
        </Modal>
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  mugCodeButton: {
    marginTop: 20,
    width: '70%',
    height: 40, 
    borderColor: '#5FB67D', 
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center'
  }
});

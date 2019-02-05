import React, { Component } from 'react';
import { Modal,Alert, Dimensions, LayoutAnimation, Text, TextInput, Button, View, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions, Linking } from 'expo';

import {Icon} from 'react-native-elements';

import GreenButton from '../components/GreenButton.js';

import globalStyles from '../styles/Styles.js';

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
    //Linking.openURL('http://192.168.1.146:3000/unlock')
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
          transparent={true}
          animationType={"slide"}
          visible={this.state.ModalVisibleStatus} 
          onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
          <View style={{flex:1,justifyContent:'center',alignItems:'center', height:400}}>
              <View style={[globalStyles.boxStyle, styles.popupbox]}>
                <View style={{justifyContent: 'left', alignItems: 'left',height:30}}>    
                    <Icon
                      name="highlight-off"
                      onPress={() => { 
                        this.ShowModalFunction(!this.state.ModalVisibleStatus);
                        this.props.navigation.navigate({ routeName: 'AccountScreenItself', params: {walletAction: 'deduct'}});
                      }}
                      iconStyle={{marginLeft: 0, left:0}}
                    />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.TextPopUp}>Thank you for making a difference through Green Mugs!</Text>
                    <Text style={[{marginTop:40},styles.normalText]}>Mug collected from:</Text>
                    <Text style={{marginTop:10, fontFamily: 'Roboto-Bold',fontSize: 18}}>Temasek Link 7</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
                    <Text style={{marginTop:20, fontFamily:'Roboto-Bold', fontSize: 36, color:'#FB4B4B'}}>$5</Text>
                    <Image source={require('../assets/images/top_down.jpg')} />
                    </View>
                    <Text style={[{marginTop:30,color:'#FB4B4B'},styles.smallerText]}>$5 have been deducted from your</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountScreen')}>
                    <Text style={[{marginTop:0,color:'#FB4B4B',textDecorationLine:'underline'},styles.smallerText]}>Green Wallet.</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:20, fontFamily: 'Roboto-Bold',fontSize: 16, textAlign:'center'}}>Get $5 back when you return your Green Mug.</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40, backgroundColor:"#ffffff", width:370}}>
                    <Icon 
                      name="redeem"
                      color="#5FB67D"
                      iconStyle={{marginLeft: 0, left:0}}
                    />
                    <Text style={styles.verysmallText}>Earn rewards when you return your Green Mug to any participating outlet or collect points!</Text>
                    </View>
                </View>
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
    backgroundColor: '#ffffff',
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
  },
  popupbox: {
    marginTop: 30,
    width: 370,
    height: 630,
    backgroundColor: '#F7F7F7'
  },
  TextPopUp: {
    fontFamily: 'Roboto',
    fontSize: 18,
    marginTop:10,
    textAlign:'center'
  },
  normalText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign:'center'
  },
  smallerText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign:'center'
  },
  verysmallText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign:'center'
  }
});

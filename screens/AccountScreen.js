import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text,
  Image,
  Modal,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import {Icon} from 'react-native-elements';


import GreyBox from '../components/GreyBox.js';
import GreenButton from '../components/GreenButton.js';
import globalStyles from '../styles/Styles.js';
import GreenButtonWithIcon from '../components/GreenButtonWithIcon.js';

export default class AccountScreen extends React.Component {
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
    ModalVisibleStatus: false
  }

  constructor(props){
    super(props);
    this.state = {
      walletAmount: 10,
      ModalVisibleStatus: false
    }  
  }
  
  componentDidMount = async () => {
    const retrievedWalletAmount = await AsyncStorage.getItem('walletAmount');
    if (retrievedWalletAmount) {
      this.setState({ walletAmount: retrievedWalletAmount});
    } else {
      this.setState({walletAmount: 10});
    }

    const { navigation } = this.props;
    const walletAction = navigation.getParam('walletAction', 'none');
    this.handleWalletAmount(walletAction);
  };

  handleWalletAmount = async (walletAction) => {
    try {
        currentAmount = parseInt(await AsyncStorage.getItem('walletAmount'), 10);
        
        if (walletAction == 'deduct' && currentAmount > 0) {
          newAmount = currentAmount - 5;
          this.setState({walletAmount: newAmount});
          await AsyncStorage.setItem('walletAmount', newAmount.toString());

        } else if (walletAction == 'add') {
          newAmount = currentAmount + 5;
          this.setState({walletAmount: newAmount});
          await AsyncStorage.setItem('walletAmount', newAmount.toString());
        }

        this.forceUpdate();
    } catch (error) {
       console.log(error);
    }
  };


  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={[globalStyles.boxStyle, {marginTop: 20, width: 334, height: 168}]}>
          

          <Text style={{fontFamily: 'Roboto-Bold', color:'#5FB67D', marginLeft: 0, marginTop: 0}}> PROFILE</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Image source={require("../assets/images/avatar-penguin.png")} 
            style={{marginTop: 10, marginLeft: 25}}/>

            <View>
              <Text style={{fontFamily: 'Roboto-Bold', marginLeft: 0, marginTop: 2}}> Chen Xiao Ming</Text>
              <Text style={{marginLeft: 0, marginTop: 4}}> ultragreensaver@gmail.com</Text>
              <Text style={{marginLeft: 0, marginTop: 5}}> +65 96250796 </Text>

              <View style = {{flexDirection: 'row', marginLeft: 0, marginTop: 10, justifyContent:'space-between'}}>
                
                <GreenButton
                  text="Edit Details"  
                  onPress={() => null}
                  buttonWidth= { 100 }
                  buttonHeight= { 40 }
                  buttonMarginTop= { 0 }
                  buttonMarginLeft= { 0 }
                />

                <Text style={{fontFamily: 'Roboto-Light', marginTop: 10}}> Log Out </Text>
            </View>
          </View>
      
          </View> 
        </View>
        
        <View style={[globalStyles.boxStyle, styles.walletsection]}>
         
          <Text style={styles.title}>MY GREEN WALLET</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <Image source={require('../assets/images/wallet.png')} style={styles.wallet}/>
            <Text style={styles.balance}>Current Amount:</Text>
            <Text style={styles.amount}>S${ this.state.walletAmount }</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <GreenButtonWithIcon
              buttonWidth={120}
              buttonHeight={50}
              icon = "autorenew"
              text="Withdraw"
              style={styles.withdraw}
              onPress={() => this.handleWalletAmount('deduct')}
            />

            <GreenButtonWithIcon
              buttonWidth={120}
              buttonHeight={50}
              icon = "attach-money"
              text="Top Up"
              onPress={() => this.ShowModalFunction(true)}
              style={styles.topup}/>
            </View>
    
        </View>

        <View style={[globalStyles.boxStyle, styles.mymugsection]}>
         
          <Text style={styles.title}>MY MUGS</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <Image source={require('../assets/images/Earth.png')} style={styles.wallet}/>
            <Text style={styles.balance}>I saved the earth of</Text>
            <Text style={styles.mugs}>5 mugs</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <Image source={require('../assets/images/coffee.png')} style={styles.wallet}/>
            <Text style={styles.balance}>I still need to return</Text>
            <Text style={styles.mugsreturn}>2 mugs</Text>
          </View>


        </View>

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
                          //this.props.navigation.navigate({ routeName: 'AccountScreenItself', params: {walletAction: 'deduct'}});
                        }}
                        iconStyle={{marginLeft: 0, left:0}}
                      />
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.TextPopUp}>Your Green Wallet has no available money for deposit.</Text>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40, backgroundColor:"#ffffff", width:370}}>
                    <Icon 
                      name="attach-money"
                      color="#5FB67D"
                      iconStyle={{marginLeft: 20, left:0}}
                    />
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 18, textAlign:'center', marginRight:20}}>Top Up now to start using Green Mugs</Text>
                    </View>

                    <GreenButton
                      text="Top Up $5"
                      buttonWidth={ 250 }
                      buttonHeight={ 70 }
                      buttonMarginTop={ 60 }
                      buttonMarginLeft={ 0 }
                      onPress={() => {
                        this.ShowModalFunction(!this.state.ModalVisibleStatus);
                        this.props.navigation.navigate({ routeName: 'AccountScreenItself', params: {walletAction: 'add'}});
                      }}
                      style={styles.topup}/>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
                    <Text style={{marginTop:20, fontFamily:'Roboto-Bold', fontSize: 36, color:'#5FB67D'}}>$5</Text>
                    <Image source={require('../assets/images/top_up.jpg')} />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40, backgroundColor:"#ffffff", width:370}}>
                    <Icon 
                      name="redeem"
                      color="#5FB67D"
                      iconStyle={{marginLeft: 20, left:0}}
                    />
                    <Text style={{ fontFamily: 'Roboto', fontSize: 14, textAlign:'center', marginRight:20}}>Earn rewards when you return your Green Mug to any participating outlet or collect points!</Text>
                    </View>

                  </View>
                </View>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,  
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center'
    },

    walletsection: {
      marginTop: 20,
      width: 334,
      height: 193,
    },

    mymugsection: {
      marginTop: 20,
      width: 334,
      height: 193,
    },


    title: {
      fontFamily:'Roboto-Bold',
      fontSize:14,
      color:'#5FB67D'
    },
        
    balance: {
      fontFamily:'Roboto',
      fontSize:16,
      color:'#000000',
      marginTop: 10
    },

    amount: {
      fontFamily:'Roboto-Bold',
      fontSize:30,
      color:'#5FB67D'
    },
      
    wallet: {
      marginTop: 5,
    },

    withdraw: {
    },

    topup: {
      fontFamily:"Roboto-Bold",
    },

    mugs: {
      fontFamily:'Roboto-Bold',
      fontSize:24,
      color:'#5FB67D'
    },

    mugsreturn: {
      fontFamily:'Roboto-Bold',
      fontSize:24,
      color:'#FB4B4B'
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


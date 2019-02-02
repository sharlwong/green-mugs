import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text,
  Image 
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

  render() {
    return (
      <View style={styles.container}>

        /* Profile section */
        <View style={[globalStyles.boxStyle, {marginTop: 20, width: 334, height: 168}]}>
          

          <Text style={{fontFamily: 'Roboto-Bold', color:'#5FB67D', marginLeft: 20, marginTop: 0}}> PROFILE</Text>
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
        
        /* Wallet section */
        <View style={[globalStyles.boxStyle, styles.walletsection]}>
         
          <Text style={styles.title}>MY GREEN WALLET</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <Image source={require('../assets/images/wallet.png')} style={styles.wallet}/>
            <Text style={styles.balance}>Current Amount:</Text>
            <Text style={styles.amount}>S$10</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <GreenButtonWithIcon
              buttonWidth={120}
              buttonHeight={50}
              icon = "autorenew"
              text="Withdraw"
              onPress={() => this.props.navigation.navigate('ScanScreen')} style={styles.withdraw}/>

            <GreenButtonWithIcon
              buttonWidth={120}
              buttonHeight={50}
              icon = "attach-money"
              text="Top Up"
              onPress={() => this.props.navigation.navigate('ScanScreen')} style={styles.topup}/>
            </View>
    
        </View>

        <View style={[globalStyles.boxStyle, styles.mymugsection]}>
         
          <Text style={styles.title}>MY GREEN WALLET</Text>
          
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <Image source={require('../assets/images/wallet.png')} style={styles.wallet}/>
            <Text style={styles.balance}>Current Amount:</Text>
            <Text style={styles.amount}>S$10</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
            <GreenButtonWithIcon
              buttonWidth={120}
              buttonHeight={50}
              icon = "autorenew"
              text="Withdraw"
              onPress={() => this.props.navigation.navigate('ScanScreen')} style={styles.withdraw}/>

            <GreenButtonWithIcon
              buttonWidth={120}
              buttonHeight={50}
              icon = "attach-money"
              text="Top Up"
              onPress={() => this.props.navigation.navigate('ScanScreen')} style={styles.topup}/>
            </View>
    
        </View>

>>>>>>> Built My Green Wallet section of My Account screen
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
      marginTop: 263,
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
    },

});


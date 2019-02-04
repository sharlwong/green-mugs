import React from 'react';
import { 
  View,
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';

export default class FAQScreen extends React.Component {
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
      <ScrollView style={styles.container}>
       
      <View style={styles.greenbox}>
    
        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>Where can I find a list of participating cafés? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop: 15, marginBottom:15}}>We are currently partnering social enterprise Bettr Barista in our efforts to save the planet. Please visit www.bettrbarista.com for a full list of locations </Text>
      
      </View>

      <View style={styles.greybox}>

        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>Do I need to wash my Mug? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop:15, marginBottom:15}}>No, just deposit your used Mugs at one of our participating cafés and we will take care of them for you. It's that simple! </Text>
         
      </View>
         
      <View style={styles.greenbox}>

        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>How long can I hold my Mug for? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop:15, marginBottom:15}}>There is no limit to how long you can have your Mug. Eventually, return the Mug at your own convenience. </Text>
      
      </View>

      <View style={styles.greybox}>

        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>Can I drop off the Mug at a different location? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop:15, marginBottom:15}}>As of today, please drop off the Mug at one of our participating cafés. With your help and increased adoption, we will widen the network to include drop off points around our sunny island. </Text>
      
      </View>

      <View style={styles.greenbox}>

        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>What should I do if I lose the Mug? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop:15, marginBottom:15}}>Don't worry, all our Mugs have an RFID chip and we will be able to find it.</Text>

      </View>

      <View style={styles.greybox}>

        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>What is the deposit for? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop:15, marginBottom:15}}>The deposit represents your responsibility of the Mug while it is in your usage. If the Mug is returned broken to a state of disrepair, the deposit will be taken as a payment to Green Mugs.</Text>
      
      </View>

      <View style={styles.greenbox}>

        <Text style={{fontFamily: 'Roboto-Bold', marginTop:10}}>Can I get my deposit back? </Text>
        <Text style={{fontFamily: 'Roboto-Light', marginTop:15, marginBottom:15}}>Yes! If you return your Mug in its good condition, we will immediately refund your deposit back into your Green Mugs wallet.</Text>
      
      </View>

      <View style={styles.whitebox}>
                
        <View style={{flexDirection: 'row', marginTop:15}}>
          <Text style={{fontFamily: 'Roboto-Medium', color:'blue', textDecorationLine: 'underline'}}>Terms and Conditions</Text>      
        </View>

        <View style={{flexDirection: 'row', marginTop:15}}>
          <Text style={{fontFamily: 'Roboto-Medium', color:'blue', textDecorationLine: 'underline'}}>How it Works</Text>      
        </View>

      </View>      

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },

  greenbox:{
    width: 400,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    backgroundColor: '#5FB67D',
  },

  greybox:{
    width: 400,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    backgroundColor: '#CCCCCC',
  },

  whitebox:{
    width: 400,
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  }  

});
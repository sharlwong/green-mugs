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
});

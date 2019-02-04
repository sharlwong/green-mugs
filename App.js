import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { RootStack } from './router';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <RootStack />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/pokemon-go-map-copy.jpg'),
        require('./assets/images/green-mugs-logo.png'),
        require('./assets/images/avatar-penguin.png'),
        require('./assets/images/wallet.png'),
        require('./assets/images/Earth.png'),
        require('./assets/images/coffee.png'),
        require('./assets/images/F_B.jpg'),
        require('./assets/images/massage.jpg'),
        require('./assets/images/travel.jpg'),
        require('./assets/images/tree.jpg'),
      ]),
      Font.loadAsync({
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'abeezee': require('./assets/fonts/ABeeZee-Regular.ttf'),
        'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

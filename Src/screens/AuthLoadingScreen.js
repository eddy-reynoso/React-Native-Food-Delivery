import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {f, auth} from '../../config/config.js';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    state = {signedIn: false};
  }

  componentDidMount() {
    f.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Root' : 'AuthStack');
    });
  }
  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
});

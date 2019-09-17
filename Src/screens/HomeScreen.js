import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {f, auth, database, storage} from '../../config/config.js';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        props.navigation.navigate('HomeScreen');
      } else {
        props.navigation.navigate('SignUpScreen');
      }
    });
  }

  signUserOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('Logged Out');
      })
      .catch(error => {
        console.log('error:', error);
      });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>Home</Text>
          <TouchableOpacity onPress={() => this.signUserOut()}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import {f, auth, database} from '../../config/config.js';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        props.navigation.navigate('HomeScreen');
      } else {
        props.navigation.navigate('LogInScreen');
      }
    });
  }

  logInUser = async (email, password) => {
    if (email != '' && password != '') {
      try {
        let user = await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Missing Email or password');
    }
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>Email:</Text>
          <TextInput
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
          />

          <Text>Password:</Text>
          <TextInput
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
          />

          <TouchableHighlight
            onPress={() =>
              this.logInUser(this.state.email, this.state.password)
            }
            style={{backgroundColor: 'red'}}>
            <Text>Log In</Text>
          </TouchableHighlight>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

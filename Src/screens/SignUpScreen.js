import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import {f, auth, database} from '../../config/config.js';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};

    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        props.navigation.navigate('HomeScreen');
      } else {
        props.navigation.navigate('SignUpScreen');
      }
    });
  }

  registerUser = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(console.log('signed up'))
      .catch(error => console.log('error, logging in', error));
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.Containter}>
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
                this.registerUser(this.state.email, this.state.password)
              }
              style={{backgroundColor: 'red'}}>
              <Text>Sign Up</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('SignInScreen')}
              style={{backgroundColor: 'green'}}>
              <Text style={{color: 'white'}}>Log in With Email</Text>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

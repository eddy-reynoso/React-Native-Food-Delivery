import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView></SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

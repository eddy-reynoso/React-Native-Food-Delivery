import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Router from './Router';
import {f, auth, database} from '../config/config.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <Router />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

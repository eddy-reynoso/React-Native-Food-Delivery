import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Router from './Router';
import {f, auth, database} from '../config/config.js';
import {TabRouter} from './TabRouter';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <TabRouter />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

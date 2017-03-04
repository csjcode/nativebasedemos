import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, Image,
  View
} from 'react-native';
import {
  Container, Header, Body,
  Card, CardItem, Content,
  Left,Right, Title, Subtitle, Button, Icon,
  Footer, FooterTab, H2, H3, Thumbnail, Badge
   }
from 'native-base';

import HeaderMain from './components/HeaderMain';
import FooterMain from './components/FooterMain';
import NewsList from './components/NewsList';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class nativebasedemo extends Component {
  render() {
    return (
      <Container>

        <HeaderMain/>

        <NewsList/>

        <FooterMain/>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  basicMargin: {
    margin: 10
  }
});

AppRegistry.registerComponent('nativebasedemo', () => nativebasedemo);

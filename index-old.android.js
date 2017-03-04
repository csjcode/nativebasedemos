/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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


import { Col, Row, Grid } from 'react-native-easy-grid';

export default class nativebasedemo extends Component {
  render() {
    return (
      <Container>

        <HeaderMain/>

        <Header style={{backgroundColor:"#d90096"}}>
          <Left>

              <Button transparent>
                <Icon name="refresh" />
              </Button>
          </Left>
          <Body>
              <Title>"No You Dint!"</Title>
              <Subtitle style={{color:"#f1f1f1"}}>Newest memes</Subtitle>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name="person" size={16}/>
              </Button>
          </Right>
        </Header>




        <FooterMain/>

        <Footer>
          <FooterTab style={{backgroundColor:"#ececec"}}>
            <Button active>
                <Text>News</Text>
            </Button>
            <Button>
                <Text>Models</Text>
            </Button>
            <Button>
                <Text>Galleries</Text>
            </Button>
            <Button>
                <Text>Videos</Text>
            </Button>

          </FooterTab>
        </Footer>
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

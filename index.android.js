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
  Footer, FooterTab, H2, H3, Thumbnail
   }
from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';


export default class nativebasedemo extends Component {
  render() {
    return (
      <Container>
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

        <Content style={{backgroundColor: '#fff'}}>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', width: null, height:150 }}>
              <Image source={require('./apple-icon.png')}  style={{margin:0, width:null, height:150}}/>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', width:200,height:150}}>
              <Thumbnail square style={{ width:250, height: 150}} source={require('./road.jpg')}/>
            </Col>
            <Col style={{ backgroundColor: '#635DB7', width: null, height:150 }}>
              <Image source={require('./apple-icon.png')}  style={{margin:0, width:null, height:150}}/>
            </Col>
          </Grid>
          <View style={{paddingTop: 8, paddingLeft: 5, paddingRight:5, paddingBottom:7}}>
            <H2>Latest meme headlines</H2>
            {/* <Text style={{padding:10}}>
              abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text> */}
            <Right>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
           </Text>
           </Right>
          </View>


          {/* <Card>
            <CardItem>
               <Icon active name="logo-googleplus" />
               <Text>Google Plus</Text>
               <Right>
                  <Icon name="arrow-forward" />
               </Right>
             </CardItem>
             <CardItem>
                <Icon active name="logo-googleplus" />
                <Text>Google Plus</Text>
                <Right>
                   <Icon name="arrow-forward" />
                </Right>
              </CardItem>
              <CardItem>
                 <Icon active name="logo-googleplus" />
                 <Text>Google Plus</Text>
                 <Right>
                    <Icon name="arrow-forward" />
                 </Right>
              </CardItem>
              <CardItem>
                 <Icon active name="logo-googleplus" />
                 <Text>Google Plus</Text>
                 <Right>
                    <Icon name="arrow-forward" />
                 </Right>
              </CardItem>
              <CardItem>
                 <Icon active name="logo-googleplus" />
                 <Text>Google Plus</Text>
                 <Right>
                    <Icon name="arrow-forward" />
                 </Right>
              </CardItem>
              <CardItem>
                 <Icon active name="logo-googleplus" />
                 <Text>Google Plus</Text>
                 <Right>
                    <Icon name="arrow-forward" />
                 </Right>
              </CardItem>
              <CardItem>
                 <Icon active name="logo-googleplus" />
                 <Text>Google Plus</Text>
                 <Right>
                    <Icon name="arrow-forward" />
                 </Right>
              </CardItem>
            </Card> */}
          </Content>
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
});

AppRegistry.registerComponent('nativebasedemo', () => nativebasedemo);

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Left,Right, Title, Subtitle, Button, Icon, Body } from 'native-base';

class HeaderMain extends Component {
  render() {
    return (
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
    );
  }

}

export default HeaderMain;

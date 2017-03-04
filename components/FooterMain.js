import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';

class FooterMain extends Component {

  render() {
    return (
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
    );
  }

}

export default FooterMain;

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Icon, Body, List, ListItem } from 'native-base';

export const dataMessages = [
  {'category': 'News', 'user':'nbc', 'message': 'France looks at election results','rating':'26'},
  {'category': 'Tech', 'user': 'google', 'message': 'Google looking to buy a robot company','rating':'5'},
  {'category': 'News', 'user': 'cbs', 'message': 'More Fighting in Iraq','rating':'12'},
  {'category': 'Finance', 'user': 'wallstreetjournal', 'message': 'Stock Market Reaches New Highs','rating':'15'},
  {'category': 'New York City', 'user': 'bobdobbs', 'message': 'SoHo getting makeover, see Houston','rating':'22'},
  {'category': 'Personal', 'user': 'mike', 'message': 'Hey whats up man haven \'t heard from you in a while','rating':'56'}
];


fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})

class NewsList extends Component {

  render() {
    return (
        <Container>
            <Content>
                <List dataArray={dataMessages} renderRow={(data) =>
                    <ListItem>
                        <Text>{data.category} - {data.user} - {data.message} - {data.rating}</Text>
                    </ListItem>
                } />
            </Content>
        </Container>
    );
  }

}

export default NewsList;

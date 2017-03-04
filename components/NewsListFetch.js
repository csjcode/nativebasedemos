import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content, Icon, Body, List, ListItem, Thumbnail  } from 'native-base';

class NewsList extends Component {

  constructor() {
    super();
    this.state = {dataMessages: ''};
  }

  componentWillMount() {
    fetch("http://www.json-generator.com/api/json/get/bQnVABpbsi?indent=2")
      .then((response) => response.json())
      .then((responseData) => {
        console.log('success');
        this.setState({dataMessages: responseData});
      })
      .catch((error) => {
        console.error(error)})
      .done();
  }

  render() {
    return (
        <Container>
            <Content>
                <List dataArray={this.state.dataMessages} renderRow={(data) =>
                    <ListItem>
                      <Thumbnail
                        square style={{marginRight: 5}}
                        source={{uri: data.picture}}
                      />
                      <View>
                        <Text>
                          {data.name} - {data.gender} - {data.age}
                        </Text>
                        <Text>
                          {data.greeting}
                        </Text>
                      </View>
                    </ListItem>
                } />
            </Content>
        </Container>
    );
  }

}

export default NewsList;

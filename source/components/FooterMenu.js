import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Content, Text, Button, Icon, Footer, FooterTab, Badge } from 'native-base';
export default class FooterMenu extends Component {

  render() {
    return (
        <Content>
            <FooterTab>
              <Button active onPress={() => this.props.navigate("Home")}>
                <Icon name="home" />
                <Text>Home</Text>
              </Button>
              <Button onPress={() => this.props.navigate("Places")}>
                <Icon type="FontAwesome" name="location-arrow" />    
                <Text>Places</Text>
              </Button>
              <Button onPress={() => this.props.navigate("News")}>
                <Icon type="FontAwesome" name="hacker-news" /> 
                <Text>News</Text>
              </Button>
              <Button onPress={() => this.props.navigate("Offers")}>
                <Icon type="FontAwesome" name="percent" />
                <Text>Offers</Text>
              </Button>
            </FooterTab>
        </Content>
    );
  }
}
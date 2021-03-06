import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class OfferCard extends Component {

  getThumb(data){
    return <Thumbnail source={{uri: 'https://i.postimg.cc/d3CcHjhp/vizag.png'}} />
  }
  render() {
    return (
        <Content>
          <Card button style={{flex: 0}} onPress={() => this.props.navigate("Home")}>
            <CardItem>
              <Left>
                {this.getThumb(this.props.data)}
                <Body>
                  <Text>{this.props.data.title}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: this.props.data.image}} style={{height: imageHeight, width: imageWidth, flex: 1}}/>
                <Text>
                  {this.props.data.desc}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
    );
  }
}

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width - 60;
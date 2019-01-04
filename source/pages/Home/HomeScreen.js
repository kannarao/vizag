import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Footer, FooterTab, Badge } from "native-base";

import HomeCard from '../../components/HomeCard.js';
import FooterMenu from '../../components/FooterMenu.js';

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      places: [
        {
          id: 1,
          title: 'Vizag Beach',
          image: 'https://i.postimg.cc/wjZ8pJgV/vizag-beach.jpg',
          desc: 'Beautfull beach with greenary'
        },
        {
          id: 2,
          title: 'Araku',
          image: 'https://i.postimg.cc/FzCN8Hpk/araku.jpg',
          desc: 'Beautfull and greenary'
        },
        {
          id: 3,
          title: 'Kailasagiri',
          image: 'https://i.postimg.cc/XJ7vzmWh/kailasagiri.jpg',
          desc: 'Beautfull and greenary'
        },
      ]
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 18}}>Vizag Popular Places</Text>
          {this.state.places.map(function(data, index){
            return <HomeCard key={index} data={data} navigation="this.props.navigation"/>;
          })}
        </Content>
        <Footer>
          <FooterMenu navigate={this.props.navigation.navigate}></FooterMenu>
        </Footer>
      </Container>
    );
  }
}

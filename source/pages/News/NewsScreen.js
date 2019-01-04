import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Footer } from "native-base";
import OfferCard from '../../components/OfferCard.js';
import FooterMenu from '../../components/FooterMenu.js';
export default class OffersScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      places: [
        {
          id: 1,
          title: 'CMR Central',
          image: 'https://i.postimg.cc/MpX9bKgf/925741548s.jpg',
          desc: '50% off on all items from 10th to 20th'
        },
        {
          id: 2,
          title: 'Brand Factory',
          image: 'https://i.postimg.cc/MpX9bKgf/925741548s.jpg',
          desc: '60% off on all items from 10th to 20th'
        },
        {
          id: 3,
          title: 'Lucky',
          image: 'https://i.postimg.cc/MpX9bKgf/925741548s.jpg',
          desc: '40% off on all items from 10th to 20th'
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
            <Title>News</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 18}}>Currently Running Offers</Text>
          {this.state.places.map(function(data, index){
            return <OfferCard key={index} data={data}/>;
          })}
        </Content>
        <Footer>
          <FooterMenu navigate={this.props.navigation.navigate}></FooterMenu>
        </Footer>
      </Container>
    );
  }
}

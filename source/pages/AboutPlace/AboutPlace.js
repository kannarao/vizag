import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import OfferCard from '../../components/OfferCard.js';
export default class OffersScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      places: {
        name: "Kailasaragiri"
      }
    }
  }

  render() {
    return (
      <Container>
        <Text>kannna</Text>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Location Details</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 18}}>About Place</Text>
        </Content>
      </Container>
    );
  }
}

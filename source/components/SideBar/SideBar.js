import React from "react";
import { AppRegistry, ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={{
              uri: 'https://i.postimg.cc/Dz2T5Gdy/main.jpg'
            }}
            style={{
              height: 200,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

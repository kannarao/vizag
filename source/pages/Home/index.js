import React, { Component } from "react";
import SideBar from "../../components/SideBar/SideBar.js";
import { createDrawerNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen.js";
import OffersScreen from "../Offers/OffersScreen.js";
import PlacesScreen from "../Places/PlacesScreen.js";
import NewsScreen from "../News/NewsScreen.js";

import OfferDetailScreen from "../Offers/OfferDetailScreen.js";

import AboutPlace from "../AboutPlace/AboutPlace.js";
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Places: { screen: PlacesScreen },
    News: { screen: NewsScreen },
    Offers: { screen: OffersScreen },

    OfferDetail: {screen: OfferDetailScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />,

  }
);
export default HomeScreenRouter;

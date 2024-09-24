import React, { Component } from "react";
import { SafeAreaView,View } from "react-native";
import LoginPage from "./src/screens/login";
import RootNavigator from "./src/navigator";

export default class App extends Component{
  render() {
      return(
        <RootNavigator/>
      )
  }
}
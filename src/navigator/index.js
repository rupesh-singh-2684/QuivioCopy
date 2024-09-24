import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { ScreenNames } from "./screennames";
// import BottomTab from "./bottomtab";
// import Home from "../screens/home";
// import Profile from "../screens/profile";
import Splash from "../screens/splash";
import { ScreenNames } from "./screennames";
import LoginPage from "../screens/login";
import ForgetPassword from "../screens/forgetpass";
import TutorialScreen from "../screens/tutorial";
import ResetPassword from "../screens/reset";
import AddPhone from "../screens/addPhone";
import TwoFA from "../screens/2fa";
import Otp from "../screens/otp";
import BottomTab from "./bottomtab";



export default class RootNavigator extends Component {
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_bottom',
          }} initialRouteName="Splash"
        >
          <Stack.Screen
            component={Splash}
            name={ScreenNames.Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={TutorialScreen}
            name={ScreenNames.Tutorial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={LoginPage}
            name={ScreenNames.LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={ForgetPassword}
            name={ScreenNames.ForgetPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={ResetPassword}
            name={ScreenNames.ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={AddPhone}
            name={ScreenNames.AddPhone}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Otp}
            name={ScreenNames.Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    )
  }
}
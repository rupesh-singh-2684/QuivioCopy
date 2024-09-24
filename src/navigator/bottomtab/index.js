import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TwoFA from "../../screens/2fa";
import { ScreenNames } from "../screennames";
import { Image } from "react-native";
import Images from "../../assets/images";
import Account from "../../screens/account";
import Favorites from "../../screens/fav";
import Menu from "../../screens/menu";


const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size}) =>{
                    let iconname;
                    if(route.name === 'Home'){
                        if(focused){
                        iconname = Images.blueHome}
                        else{
                            iconname = Images.blankHome
                        }
                    }
                    else if(route.name === 'Account'){
                        if(focused){
                        iconname = Images.blankAccount}
                        else{
                            iconname = Images.blankAccount
                        }
                    }
                    else if(route.name === 'Favorites'){
                        if(focused){
                        iconname = Images.blankFav}
                        else{
                            iconname = Images.blankFav
                        }
                    }
                    else if(route.name === 'Menu'){
                        if(focused){
                        iconname = Images.blankMenu}
                        else{
                            iconname = Images.blankMenu
                        }
                    }
                     return <Image
                     source={iconname}
                     style={{width:22,height:22,}}/>            
                }
            })}>
                <Tab.Screen
                    component={TwoFA}
                    name={ScreenNames.Home}
                    options={{ headerShown: false }}
                />
                
                <Tab.Screen
                    component={Account}
                    name={ScreenNames.Account}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    component={Favorites}
                    name={ScreenNames.Favorites}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    component={Menu}
                    name={ScreenNames.Menu}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        )
    }
}
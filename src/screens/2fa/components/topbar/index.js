import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Images from "../../../../assets/images";

export default class TopBar extends Component {


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.text1}>Welcome</Text>
                        <Text style={styles.text2}>Kevin</Text>
                    </View>

                    <View style={styles.iconCont}>
                        <View style={styles.iconView}><Image source={Images.messages} style={styles.icon} /></View>
                        <View style={styles.iconView}><Image source={Images.bell} style={styles.icon}/></View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


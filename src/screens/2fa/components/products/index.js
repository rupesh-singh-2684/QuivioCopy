import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Images from "../../../../assets/images";

export default class Product extends Component {
constructor(props) {
        super(props);
    }
    render() {
        const { text1 } = this.props;
        return (
            <View style={styles.subCont}>
                <View style={styles.setupView}>
                    <Image source={Images.addProduct} style={styles.sett} />
                    <View style={styles.textView}>
                        <Text style={styles.text1}>{text1}</Text>
                        <Text style={styles.text2}>Jun 3, 2023 | 12:30 PM</Text>
                    </View>
                </View>
            </View>
        )
    }
}


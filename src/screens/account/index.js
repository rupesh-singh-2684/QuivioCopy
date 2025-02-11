import React, { Component } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../assets/images";
import styles from "./styles";


export default class Account extends Component {

    handleNav = () => {
        const { navigation } = this.props;
        navigation.navigate('ProfileUpdate');
    };
    render() {
        return (
            
            <SafeAreaView style={styles.MainContainer}>
                <ScrollView>
                <View style={styles.containerprofile}>
                    <View style={styles.containertwo}>
                        <Image source={Images.NameIcon}
                            style={styles.Img} />
                        <View style={styles.TextContainer}>
                            <Text style={styles.Text1}>John Doe</Text>
                            <Text style={styles.Text2} onPress={this.handleNav}>Your Profile</Text>
                        </View>
                    </View>
                </View>

                <View
                    style={styles.containerItems}>
                    <View style={styles.innerItemContainer}>
                        <Image
                            source={Images.AccountProfile}
                            style={styles.itemImgSize}
                        />
                        <View style={styles.commonMarginHori}>
                            <Text style={styles.itemText}>
                                Employee Directory
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.lineView}
                    />
                    <View style={styles.innerItemContainer}>
                        <Image
                            source={Images.AccountProfile2}
                            style={styles.itemImgSize}
                        />
                        <View style={styles.commonMarginHori}>
                            <Text style={styles.itemText}>
                                User Access Group
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.lineView}
                    />
                    <View style={styles.innerItemContainer}>
                        <Image
                            source={Images.AccountCustomer}
                            style={styles.itemImgSize}
                        />
                        <View style={styles.commonMarginHori}>
                            <Text style={styles.itemText}>Customers</Text>
                        </View>
                    </View>
                    <View
                        style={styles.lineView}
                    />
                    <View style={styles.innerItemContainer}>
                        <Image
                            source={Images.AccountHelpAndSupport}
                            style={styles.itemImgSize}
                        />
                        <View style={styles.commonMarginHori}>
                            <Text style={styles.itemText}>
                                Help & Support
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.lineView}
                    />
                    <View style={styles.innerItemContainer}>
                        <Image
                            source={Images.AccountProfile2}
                            style={styles.itemImgSize}
                        />
                        <View style={styles.commonMarginHori}>
                            <Text style={styles.itemText}>
                                Configuration
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.lineView}
                    />
                    <View style={styles.innerItemContainer}>
                        <Image
                            source={Images.AccountLogOut}
                            style={styles.itemImgSize}
                        />
                        <View style={styles.commonMarginHori}>
                            <Text style={styles.itemText}>Logout</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
           
        )
    }
}
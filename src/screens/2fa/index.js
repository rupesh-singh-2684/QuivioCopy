import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Modal,ScrollView } from 'react-native';
import styles from './styles';
import Button from '../../components/button/button';
import Images from '../../assets/images';
import Modals from './components/modal';
import TopBar from './components/topbar';
import Slides from './components/slides/flatlist';
import Product from './components/products';

export default class TwoFA extends Component {
    state = {
        isModalVisible: true,
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        const { navigation } = this.props;
        navigation.navigate('AddPhone');
    };

    render() {
        const { isModalVisible } = this.state;
        return (
            <View style={styles.container1}>
                <TopBar/>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={this.toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalphonecontainer}>
                                <Image source={Images.phoneinhand} style={styles.image1} />
                            </View>
                            <Text style={styles.secure}>Secure Your Account ?</Text>
                            <Text style={styles.securetext}>Setup two Authentication factor</Text>
                            <Text style={styles.securetext1}>your account in just two steps</Text>
                            <View style={styles.modalimage}>
                                <View style={styles.modalimagecontainer}>
                                    <Image source={Images.linkaccount} style={styles.imagemodal} />
                                </View>
                                <Text style={styles.textlink}>Link your account with your phone {'\n'}number </Text>
                            </View>
                            <View style={styles.modalimage}>
                                <View style={styles.modalimagecontainer}>
                                    <Image source={Images.oneTP} style={styles.imagemodal} />
                                </View>
                                <Text style={styles.textlink}>Enter the one time passcode </Text>
                            </View>
                            <View style={styles.modalimage}>
                                <View style={styles.modalimagecontainer}>
                                    <Image source={Images.secure} style={styles.imagemodal} />
                                </View>
                                <Text style={styles.textlink} >Secure your account </Text>
                            </View>


                            <Button title={'Get Started'} onPress={this.toggleModal} />


                        </View>
                    </View>
                </Modal>
                <View style={styles.subCont}>
                    <View style={styles.setupView}>
                        <Image source={Images.Homesetting} style={styles.sett}/>
                        <View  style={styles.textView}>
                            <Text style={styles.text1}>Complete your account setup</Text>
                            <Text style={styles.text2}>Tap to continue</Text>
                        </View>
                    </View>
                </View>
                <View>
                <Text style={styles.text3}>FREQUENTLY USED</Text>
                <Slides/>
                <View style={styles.textView2}>
                    <Text style={styles.text4}>RECENT ACTIVITIES</Text>
                    <Text style={styles.text5}>All Products</Text>
                </View>
                </View>
                <ScrollView style={styles.productView}>
                    <Product text1={'Successfully configured POS for sites'}/>
                    <Product text1={'You ended the campaign Holiday Special'}/>
                    <Product text1={'Created a campaign Holiday Special'}/>
                    <Product text1={'Activated the user access group named Site manager'}/>
                    <Product text1={'Added a discount code to a campaign named Holiday Special'}/>
                    <Product text1={'Added a new customer C02039'}/>
                    <Product text1={'Activated the user access group named Site manager'}/>
                    <Product text1={'Successfully configured POS for sites'}/>
                    <Product text1={'Successfully configured POS for sites'}/>
                    <Product text1={'You ended the campaign Holiday Special'}/>
                    <Product text1={'Created a campaign Holiday Special'}/>
                    <Product text1={'Activated the user access group named Site manager'}/>
                    <Product text1={'Added a discount code to a campaign named Holiday Special'}/>
                    <Product text1={'Added a new customer C02039'}/>
                    <Product text1={'Activated the user access group named Site manager'}/>
                    <Product text1={'Successfully configured POS for sites'}/>
                </ScrollView>
            </View>
        );
    }
}
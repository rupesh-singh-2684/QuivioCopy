import React, { Component } from 'react';
import { View, Image,Text, Modal} from 'react-native';
import styles from './styles';
import Button from '../../../../components/button/button';
import Images from '../../../../assets/images';

export default class Modals extends Component {
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
                            
                           
                            <Button title={'Get Started'} onPress={this.toggleModal}/>
                           
                            
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
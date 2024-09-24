import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from './styles';
import Images from '../../assets/images';


class CustomToast extends Component {
  render() {
    const { text1 } = this.props;

    return (
      <View style={styles.toastContainer}>
        <View style={styles.toastContent}>
          <Image source={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/error.png')} style={styles.icon} />
          <Text style={styles.toastText}>{text1}</Text>
        </View>
      </View>
    );
  }
}

export default CustomToast;
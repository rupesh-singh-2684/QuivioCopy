import React, {Component, createRef} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import Images from '../../../../assets/images';


export default class ProfileChoice extends Component {
  refRBSheet = createRef();

  componentDidUpdate(prevProps) {
    const {visible} = this.props;
    if (visible !== prevProps.visible) {
      if (visible) {
        this.refRBSheet.current.open();
      } else {
        this.refRBSheet.current.close();
      }
    }
  }

  handleLogin = () => {
    // this.props.onClose
    const {navigation} = this.props;
    // Navigate to Phone screen
    navigation.navigate('Account');
    this.refRBSheet.current.close();
  };

  
  render() {
    const {onClose ,onPressGallery,onPressCamera} = this.props;

    return (
      <RBSheet
        ref={this.refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        // height={Dimensions.get('window').height / 2.2}
        // style={{overflow: 'hidden'}}
        customStyles={{
          wrapper: {
            flex:1,
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          container: {
            flex:1,
            borderRadius: 20,
          },
        }}
        onClose={onClose}>
        <View style={styles.bgColor}>
          <View style={styles.marginSide}>
            <View>
              <Text style={styles.headingText}>Profile Photo</Text>
            </View>
            <View style={styles.lineView}/>

            <ScrollView>
            <TouchableOpacity onPress={onPressGallery}>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={Images.Imgage1RB} style={styles.imgSize} />

                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>Upload from Gallery</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Images.ForArrow} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCamera}>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={Images.Imgage2RB} style={styles.imgSize} />

                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>Use Camera</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Images.ForArrow} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={Images.Imgage3RB} style={styles.imgSize} />

                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>Select an Avatar</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Images.ForArrow} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>
            </ScrollView>
          
          </View>
        </View>
      </RBSheet>
    );
  }
}


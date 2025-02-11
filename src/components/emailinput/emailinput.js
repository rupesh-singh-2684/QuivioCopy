import React, { Component } from "react";
import { View,Image, TextInput,Text, Animated} from "react-native";
import styles from "./styles";
import Icons from "../../assets/icons";

export default class EmailInput extends Component{
constructor(props){
    super(props);
    this.state={
        placeholderAnimation: new Animated.Value(1),
    }
}
// handleFocus = () => {
//     Animated.timing(this.state.placeholderAnimation, {
//       toValue: 0,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   };

//   handleBlur = () => {
//       Animated.timing(this.state.placeholderAnimation, {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: false,
//       }).start();
//   };

    
    render(){
        const { isValid, errorMessage, placeholder, onFocus,onBlur } = this.props;
        // const placeholderStyle = {
        //     position: 'absolute',
        //     left: 10,
        //     top: this.state.placeholderAnimation.interpolate({
        //       inputRange: [0, 1],
        //       outputRange: [-15, 2],
        //     }),
        //     fontSize: this.state.placeholderAnimation.interpolate({
        //       inputRange: [0, 1],
        //       outputRange: [11, 14],
        //     }),
        //     color: Error ? 'red' : '#60707D',
        //   };
        return(
            <View>
            <View style={[styles.container, !isValid && styles.errorBorder]}>
                <Image
                source={this.props.img}
                style={[styles.img , !isValid && styles.errorIcon]}
                />
                <View style={{flexDirection:'row'}}>
                {/* <Animated.Text style={placeholderStyle}>
                    {this.props.pass}
                </Animated.Text> */}

                <TextInput
                placeholder={this.props.pass}
                style={styles.placeholdertext}
                onChangeText={this.props.onChangeText}
                onBlur={
                    this.props.onBlur
                   }
                // onFocus={()=>{
                //     this.handleFocus();
                //     // if (onFocus) onFocus();
                // }}
                />
                </View>
            </View>
            {!isValid && 
            <View style={{flexDirection:'row'}}>
                <Image source={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/error.png')}
                style={{height:15,width:15,marginVertical: 5,marginHorizontal:10}}/>
                <Text style={styles.errorText}>{errorMessage}</Text>
            </View>}
            </View>
        )
    }
}
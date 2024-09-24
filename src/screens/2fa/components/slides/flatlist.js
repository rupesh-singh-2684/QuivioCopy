import React, { Component} from "react";
import { FlatList, Image, Text, View } from "react-native";
import Images from "../../../../assets/images";
import styles from "./styles";




const obj=[
    {
        iconname: Images.MicHome,
        text1:'Create',
        text2:'Campaign',
    },
    {
        iconname: Images.TimerHome,
        text1:'One time',
        text2:'Triger',
    },
    {
        iconname: Images.MicHome,
        text1:'Create',
        text2:'Campaign',
    },
    {
        iconname: Images.TimerHome,
        text1:'One time',
        text2:'Triger',
    },
    {
        iconname: Images.MicHome,
        text1:'Create',
        text2:'Campaign',
    },
    
]

export default class Slides extends Component{

    renderItem = ({ item }) =>{
        return(
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                <Image
                source={item.iconname}
                style={styles.img}/>  
                </View>
                <View style={styles.subcontainer2}>  
                    <Text style={styles.text}>
                        {item.text1}
                    </Text>
            
                    <Text style={styles.text}>
                        {item.text2}
                    </Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            <FlatList
            data={obj}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderItem}
            />
        )
    }
}
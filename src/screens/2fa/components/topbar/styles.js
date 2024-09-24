import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A7BBB',
    },
    subContainer: {
        marginHorizontal: 24,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text1: {
        fontSize: 18,
        fontWeight: "400",
        color: '#FFFFFF'
    },
    text2: {
        fontSize: 20,
        fontWeight: "600",
        color: '#FFFFFF',
    },
    iconCont:{
        flexDirection:'row'
    },
    iconView:{
        backgroundColor:'#5998cf',
        marginLeft:8,
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:8,
    },
    icon:{
        height:24,
        width:24,
    }
})

export default styles ;
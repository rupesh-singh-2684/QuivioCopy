import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        borderRadius:8,
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth: 0.7,
        borderColor:'grey'
    },
    placeholdertext:{
        marginHorizontal:10,
        paddingHorizontal:8,
        flex:1
    },
    img:{
        height:24,width:24
    },
    container2:{
        flexDirection:'row',
        alignItems:'center'
    },
    errorBorder: {
        borderColor: 'red',
    },
    errorIcon: {
        tintColor: 'red',
    },
    errorText: {
        // color: 'red',
        marginTop: 5,
        fontSize: 12,
    },



})
export default styles;
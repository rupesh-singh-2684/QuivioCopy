import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Maincontainer:{
        flex:1,
        marginHorizontal:25,
        marginVertical:50
    },

    container:{
        // backgroundColor:'white',
        width:50,
        padding:15,
        borderRadius:8,
        
        marginHorizontal:Platform.OS === 'ios' ? -15 : -15,
        marginVertical:Platform.OS === 'ios' ? 0 : 12,
        
    },
    img:{
        height:50,
        width:75,
        position:'absolute'
    },
    TextView:{
        marginVertical:60,
    },
    Title1:{
        fontWeight:'700',
        fontSize:24
    },
    Title2:{
        fontSize:15,
        fontWeight:'400',
        marginTop:10,
        marginBottom:30
    },
    ButtomDiv:{
        justifyContent:'flex-end',
        marginBottom:30,
    },
    keyboardView:{
        flex: 1 ,
        backgroundColor:'#E6EDF3'
    },
    container2:{
        flex: 1, 
        justifyContent: 'space-between'
    },
    
})

export default styles;
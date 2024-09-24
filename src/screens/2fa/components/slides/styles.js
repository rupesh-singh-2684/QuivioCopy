import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin:10,paddingHorizontal:20,borderRadius:8,flexDirection:'row',backgroundColor:'white',paddingVertical:15
    },
    subcontainer:{
        backgroundColor: '#46A4BA',borderRadius:25,
    },
    img:{
        height:24,width:24,margin:10,
    },
    subcontainer2:{
        marginStart:10,marginTop:5
    },
    text:{
        color:'#0E1F2C',fontWeight:'600'
    }

})
export default styles;
import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container1:{
        flex:1,
        // backgroundColor:'#D9E2EE'
    },
    container2:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:'#2A7BBB'
    },
    welcometext:{
        fontSize:26,
        fontWeight:"400"
    },
    kevintext:{
        fontWeight:"600",
        fontSize:26,
    },
    arrowcontainer:{
        borderRadius:5,
        flexDirection:"row"
        
    },
    image: {
        width: 35,
        height: 30,
        resizeMode: 'contain',
        marginTop: 5,
        tintColor:'black'
      },
      imagecontainer:{
        backgroundColor:"white",
        width: 45,
        height: 45,
        borderRadius:5,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center"
      },
    
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    modalContent: {
        height: '80%', 
        backgroundColor: '#E6EDF3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
       
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    secure:{
        fontWeight:"600",
        fontSize:23,
        marginTop:20,
    },
    securetext:{
        fontSize:17,
        marginTop:10,
        color:"grey",

    },
    securetext1:{
        fontSize:17,
        color:"grey",
    },
    modalimage:{
        height:60,
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    modalimagecontainer:{
        backgroundColor:"white",
        borderRadius:100,
        width: 50,
        height: 50,
        justifyContent:"center",
        alignItems:"center",
        marginRight:15,
        
    },
    imagemodal:{
        width: 80,
        height: 80,
        resizeMode: 'contain',
        // borderRadius:50,
        modalText:15
    },
    image1:{
        resizeMode:"contain",
        height:150,
    },
    modalphonecontainer:{
        justifyContent:"center",
        alignItems:"center",
        height:150,

    },
    textlink:{
        fontWeight:"600",
        fontSize:15
    },
    subCont:{
        marginHorizontal:16,
        marginTop:24
    },
    setupView:{
        padding:20,
        backgroundColor:'#D9E2EE',
        flexDirection:'row',
        borderRadius:8
    },
    sett:{
        height:36,
        width:36,
    },
    textView:{
        marginLeft:16
    },
    text1:{
        fontSize:15,
        fontWeight:'700',
        color: '#164061'
    },
    text2:{
        color: '#60707D',
        fontSize:13,
    },
    text3:{
        marginTop:32,
        marginHorizontal:16,
        fontWeight:'600',
        fontSize:12
    },
    text4:{
        marginTop:12,
        marginHorizontal:16,
        fontWeight:'600',
        fontSize:12
    },
    text5:{
        marginTop:12,
        marginHorizontal:16,
        fontWeight:'600',
        fontSize:15,
        color:'#23679D'
    },
    textView2:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    productView:{
        backgroundColor:'#FFFFFF',
        marginHorizontal:16,
        marginTop:16,
        borderRadius:8,
        paddingH:10,
    }
});

export default styles;
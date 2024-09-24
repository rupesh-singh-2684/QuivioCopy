import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:"#d9dedb",
        paddingTop:60,
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
        borderRadius:50,
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
    }
});

export default styles;
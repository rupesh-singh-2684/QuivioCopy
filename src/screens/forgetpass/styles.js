import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Maincontainer:{
        flex:1,
        marginHorizontal:20,
        marginTop:60
    },
    container:{
        backgroundColor:'white',
        width:55,
        padding:15,
        borderRadius:8,
        
    },
    img:{
        height:25,
        width:25,
    },
    TextView:{
        marginVertical:60,
        // backgroundColor:'red'
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
        marginBottom:20
    },
    keyboardView:{
        flex: 1,
        backgroundColor:'#E6EDF3'
    },
    container2:{
        flex: 1, 
        justifyContent: 'space-between' 
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        marginHorizontal: 24,
        paddingHorizontal: 50,
        paddingVertical: 28,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
    },
    modalMessage: {
        marginVertical: 15,
        textAlign: 'center',
        fontWeight: '400',
        color: '#60707D',
        fontSize: 13,
    },

})
export default styles;
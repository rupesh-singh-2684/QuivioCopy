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
    validCriteria: {
        // color: 'green',
        marginVertical: 2,
    },
    invalidCriteria: {
        // color: 'red',
        marginVertical: 2,
    },
    criteriaIcon:{
        height:20,
        width:20,
        marginRight: 10,
    },
    criteriaRow:{
        flexDirection:'row',
        alignItems: 'center',
        // marginVertical: 5,
    },
    // criteriaContainer: {
    //     marginTop: 10,
    //     padding: 10,
    //     // borderWidth: 1,
    //     borderColor: '#ccc',
    //     borderRadius: 8,
    //     // backgroundColor: '#f9f9f9',
       
    // },
})

export default styles;
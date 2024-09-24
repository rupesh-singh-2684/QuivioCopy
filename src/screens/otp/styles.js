import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Maincontainer:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20,
       
    },
    container:{
        backgroundColor:'white',
        width:55,
        padding:15,
        borderRadius:8,
        justifyContent:'space-between',
        
        // flex:1
    },
    img:{
        height:25,
        width:25,
    },
    TextView:{
        marginVertical:40
    },
    Title1:{
        fontWeight:'700',
        fontSize:24
    },
    Title2:{
        fontSize:15,
        fontWeight:'500',
        marginTop:10,
        marginBottom:30,
        color:' #4F5F72'
    },
    inputBox: {
        flexDirection: 'row',
        // alignItems: 'center',
        // marginTop: 30,
        // paddingHorizontal: 15,
        paddingVertical:10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        
        // flex:1
    },
    otpInput: {
        // marginTop:30,        
        height: 40,
        width: 40,
        fontSize: 24,
        borderRightWidth: 0.8,
        // borderRadius: 10,
        borderColor: 'grey',
        textAlign: 'center',
        borderRightColor:'lightgrey'
    },
    
    phoneInputContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    textInputContainer: {
        backgroundColor: 'transparent',
        paddingVertical: 0,
    },
    codeText: {
        fontSize: 16,
        color: 'black',
    },
    phoneText: {
        fontSize: 16,
        color: 'black',
    },
    flagButton: {
        width: 40,
        margin:10,
        borderRadius:50
    },
    LoginButton: {
        height: 50,
        width: 'auto',
        backgroundColor: '#007bff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    LoginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'left',
    },
    ButtomDiv:{
        justifyContent:'flex-end',
        flex:1,
        marginBottom:20
    },
    Textcontainer:{
        borderRightWidth:1,
        paddingHorizontal:20,
        paddingVertical:10,
        borderColor:'lightgrey'
    },
    TextcontainerLast:{
        paddingHorizontal:20,
        paddingVertical:10,
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
    ModalImg:{
        height: 60, width: 60
    }

})

export default styles;
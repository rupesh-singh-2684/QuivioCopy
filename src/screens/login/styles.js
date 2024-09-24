import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Img:{
        marginHorizontal:30,
        marginTop:90,
        height:55,
        width:82
    },
    BgImg:{
        flex:1
    },
    container2:{
        position:'absolute'
    },
    Title1:{
        fontSize:28,
        fontWeight:'800',
        color:'white',
        marginHorizontal:30,
        marginTop:20
    },
    Title2:{
        fontSize:17,
        fontWeight:'400',
        color:'white',
        marginHorizontal:30,
        marginTop:7
    },
    renderItem: {
        margin: 20,
        padding:5,
        borderRadius: 20,
        flexDirection:'row',
    },
    signinView:{
        marginTop:22,
        marginHorizontal:30,
    },
    textHead2:{
        fontSize:24,
        fontWeight:'700',
    },
    text2:{
        fontSize:15,
        fontWeight:'400',
        color: '#4F5F72',
        marginTop:4,
        marginBottom:27,
    },
    forgetdiv:{
        alignItems: 'flex-end', 
        marginTop: 28, 
        marginBottom: 38
    },
    listContainer:{
        flexDirection:'row',
        marginTop:30,
        alignItems:'center',
    },
    listIcon:{
        marginHorizontal:10,
        width:17,
        height:17,
    },
    listText:{
        width:71,
        height:34,
        fontWeight:'400',
        fontSize:13,
        lineHeight:17,
        color:'#F8F9F9',
        marginRight:42,
    },
    keyboardView:{
        flex: 1 ,
        backgroundColor:'white'
    },
    view1:{
        flex: 0.5 
    },
    view2:{
        flex: 0.65 ,
        backgroundColor:'white'
    },
    signinview2:{
    //    flex:1,
       justifyContent:'space-between'
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
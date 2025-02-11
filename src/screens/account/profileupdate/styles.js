import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
Maincontainer:{
    flex: 1, 
},
container:{
    flex: 1, marginTop: 20, marginHorizontal: 20 
},
backarrowDiv:{
    backgroundColor: '#DFE0E0', borderRadius: 10, width: 40
},
backArrowImg:{
    height: 40, width: 40
},
EditDiv:{
    alignItems: 'center'
},
EditText:{
    fontWeight: '500', fontSize: 26
},
ProfileDiv:{
flexDirection: 'row', alignItems: 'center'
},
ProfileImgDiv:{
    alignItems: 'flex-start', margin: 10 
},
BgImg:{
    height: 150, width: 150 
},
Img:{
    height: 150, width: 150,borderRadius:100 
},
ProfileText:{
    fontSize: 14, fontWeight: '500', marginBottom: 10
},
ChangeText:{
fontSize: 16, fontWeight: '500', color: '#EE28A9'
},
});

export default styles;   
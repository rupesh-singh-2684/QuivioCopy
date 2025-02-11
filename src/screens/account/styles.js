import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  MainContainer:{
    flex: 1, backgroundColor: '#DEECF1'
 },
  containerprofile:{
    borderWidth: 0.3, marginHorizontal: 20, padding: 20, marginVertical: 20, backgroundColor: '#F8F9F9', borderColor: 'white', borderRadius: 8
  },
  containertwo:{
    flexDirection: 'row', alignItems: 'center' 
  },
  Img:{
    height: 60, width: 60
  },
  TextContainer:{
    marginHorizontal: 20
  },
  Text1:{
    fontWeight: '700', fontSize: 20, marginBottom: 10
  },
  Text2:{
    fontWeight: '600', fontSize: 14, color: '#2A7BBB'
  },
  containerItems: {
    borderWidth: 1,
    margin: 24,
    padding: 20,
    backgroundColor: '#F8F9F9',
    borderColor: 'white',
    borderRadius: 8,
  },
  innerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImgSize:{
    height: 40, 
        width: 40,
  },
  commonMarginHori:{
    marginHorizontal:20,
  },
  itemText:{
    fontWeight: '600',
    color:'#000000', 
    fontSize: 14,
  },
  lineView: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginVertical: 20,
  },
});

export default styles;
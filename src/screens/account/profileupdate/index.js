import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  FlatList,
  ScrollView
} from "react-native";
import Images from "../../../assets/images";
import Button from "../../../components/button/button";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";
import { Agenda, AgendaList, Calendar } from 'react-native-calendars'; 
import ProfileChoice from "./component";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class ProfileUpdate extends Component {
  state = {
    showDatePicker: false,
    picture:'',
    selectedDate: new Date(),
    genderModalVisible: false,
    selectedGender: '',
    genders: ['Male', 'Female', 'Other'],
    isProfileChoiceVisible: false
  };

  profilePicker =() =>{
    this.setState(prevState => ({ isProfileChoiceVisible: !prevState.isProfileChoiceVisible}))
  }

  toggleDatePicker = () => {
    this.setState({ showDatePicker: !this.state.showDatePicker });
  };

  handleDateChange = (day) => {
    const selectedDate = new Date(day.dateString);
    this.setState({ selectedDate, showDatePicker: false });
  };

  toggleGenderModal = () => {
    this.setState({ genderModalVisible: !this.state.genderModalVisible });
  };

  selectGender = (gender) => {
    this.setState({ selectedGender: gender, genderModalVisible: false });
  };

  handleuploadFromGallery = async() =>{
    launchImageLibrary({mediaType: 'photo'},response =>{
      
        if(response.didCancel){
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker:', response.error);
        }
        else{
            console.log('Image URI:',response.assets[0].uri)
            this.setState({picture:response.assets[0].uri})
        }
        this.setState({isProfileChoiceVisible:false})
    }

    )
  }

  handleupUseCamera = async() =>{
    launchCamera({mediaType: 'photo'},response =>{
      
        if(response.didCancel){
            console.log('User cancelled Camera');
        }
        else if (response.error) {
            console.log('Camera error:', response.error);
        }
        else{
            console.log('Camera Image URI:',response.assets[0].uri)
            this.setState({picture:response.assets[0].uri})
        }
        this.setState({isProfileChoiceVisible:false})
    }

    )
  }
  handleNav =() =>{
    const {navigation} = this.props;

    navigation.navigate('Account');
  }
  render() {
    const { showDatePicker, selectedDate, genderModalVisible, selectedGender, genders ,isProfileChoiceVisible,picture} = this.state;

    return (
        <SafeAreaView style={styles.Maincontainer}>
          <View style={styles.container}>
            <View style={styles.backarrowDiv}>
              <TouchableOpacity onPress={this.handleNav}>
                <Image source={Images.backarrow} style={styles.backArrowImg} />
              </TouchableOpacity>
            </View>

            <View style={styles.EditDiv}>
              <Text style={styles.EditText}>Edit Profile</Text>
            </View>

            <TouchableOpacity onPress={this.profilePicker}>
            <View style={styles.ProfileDiv}>
              <View style={styles.ProfileImgDiv}>
                <ImageBackground source={Images.ProfileBackgound} style={styles.BgImg}>
                
                  <Image source={picture ? {uri: picture}: Images.ProfileMainImg} style={styles.Img} />
                </ImageBackground>
              </View>
              <View>
                <Text style={styles.ProfileText}>Profile Picture</Text>
                <Text style={styles.ChangeText} >Change Photo</Text>
              </View>
            </View>
            </TouchableOpacity>

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <ScrollView>
              <View>
                <TextInput
                  style={{ borderWidth: 1, marginHorizontal: 10, borderRadius: 22, borderColor: 'lightgrey', padding: 20, fontSize: 18, marginTop: 20, backgroundColor: 'white' }}
                  placeholder="Name"
                />
                <TextInput
                  style={{ borderWidth: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 22, borderColor: 'lightgrey', padding: 20, fontSize: 18, backgroundColor: 'white' }}
                  placeholder="Username"
                />

                <TouchableOpacity onPress={this.toggleDatePicker}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, marginHorizontal: 10, borderRadius: 22, borderColor: 'lightgrey',paddingHorizontal:20, backgroundColor: 'white',alignItems:"center",height:65}}>
                  {/* <View style={{}}> */}
                    <TextInput
                      placeholder="Birthday"
                      style={{ fontSize: 18,}}
                      value={selectedDate.toLocaleDateString()}
                      editable={false}
                    />
                  {/* </View> */}
                  
                    <View>
                      <Image source={Images.Calender} style={{ height: 20, width: 20 }} />
                    </View>
                  
                </View>
                </TouchableOpacity>

                {showDatePicker && (
                  <View style={{ position: 'absolute', zIndex: 1, top: 'auto', left: 20, right: 20 }}>
                    <Calendar
                      onDayPress={this.handleDateChange}
                      markedDates={{
                        [selectedDate.toLocaleDateString()]: { selected: false},
                        '2024-09-01': {selected: true, marked: true, selectedColor: 'blue'},
                        '2024-09-02': {marked: true},
                        '2024-09-03': {selected: true, marked: true, selectedColor: 'blue'}
                      }}
                      style={{
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        height: 350,
                        borderRadius:20
                      }}
                    
                    />
                  </View>
                )}


                <TouchableOpacity onPress={this.toggleGenderModal}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 22, borderColor: 'lightgrey', height:65, backgroundColor: 'white' ,paddingHorizontal:20}}>
                  {/* <View style={{  }}> */}
                    <TextInput
                      placeholder="Gender"
                      style={{ fontSize: 18}}
                      value={selectedGender}
                      editable={false}
                    />
                  {/* </View> */}
                  
                    <View>
                      <Image source={Images.DropDown} style={{ height: 8, width: 15 }} />
                    </View>
                  
                </View>
                </TouchableOpacity>

                <Modal
                  transparent={true}
                  visible={genderModalVisible}
                  animationType="slide"
                >
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ width: 300, backgroundColor: 'white', borderRadius: 10 }}>
                      <FlatList
                        data={genders}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                          <TouchableOpacity onPress={() => this.selectGender(item)}>
                            <Text style={{ padding: 20, fontSize: 18 }}>{item}</Text>
                          </TouchableOpacity>
                        )}
                      />
                      <TouchableOpacity onPress={this.toggleGenderModal}>
                        <Text style={{ paddingVertical: 20, textAlign: 'center', color: 'red' }}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, marginHorizontal: 10, borderRadius: 22, borderColor: 'lightgrey', height:65, backgroundColor: 'white',paddingHorizontal:-10 }}>
                  <View>
                    <TextInput />
                  </View>
                  <View>
                    <PhoneInput
                      textContainerStyle={{ borderRadius: 20, backgroundColor: 'white',height:60,paddingVertical:-20}}
                      flagButtonStyle={{ marginLeft: -5 }}
                      containerStyle={{backgroundColor:'transparent'}}
                    />
                  </View>
                  <TouchableOpacity>
                  <View style={{ right: 50 }}>
                    <Text style={{ color: '#EE28A9' }}>Change</Text>
                  </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 22, borderColor: 'lightgrey', height:65, backgroundColor: 'white',paddingHorizontal:20 }}>
                  <View>
                    <TextInput
                      placeholder="Email ID"
                      style={{ fontSize: 18 }}
                    />
                  </View>
                  <TouchableOpacity>
                  <View>
                    <Text style={{ color: '#EE28A9' }}>Verify</Text>
                  </View>
                  </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
              <View>
                <Button title={'Update'} />
              </View>
            </View>
          </View>
          <ProfileChoice
          visible={isProfileChoiceVisible}
          onClose={() =>this.setState({isProfileChoiceVisible: false})}
          navigation ={this.props.navigation}
          onPressGallery={this.handleuploadFromGallery}
          onPressCamera={this.handleupUseCamera}
            />
        </SafeAreaView>
       
     
    );
  }
}

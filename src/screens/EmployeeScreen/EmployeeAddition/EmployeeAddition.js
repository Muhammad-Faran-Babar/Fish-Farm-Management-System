import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
let model = {
  EmployeeName: '',
  EmployeeAddress: '',
  EmployeeMobNo: '',
  EmployeeEmail: '',
  MonthOfHiring: '',
  Cnic: '',
  date: '',
  Salary: '',
  comment: '',
  Purpose: '',
};
const App = () => {
  //const [checked, setchecked] = useState(false);
  const [image, setImage] = useState(
    require('../../../../assets/images/emp.png'),
  );
  const [date, setDate] = useState(' ');
  const navigation = useNavigation();
  const [datamodel, setDataModel] = useState(model);
  const [loading, setLoading] = useState(false);
  const onEmployeeModule = () => {
    navigation.navigate('EmployeeScreen');
  };
  const ChooseFromGallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const addData = () => {
    setLoading(true);
    firestore()
      .collection('EmployeeRecord')
      .add(datamodel)
      .then(data => {
        setLoading(false);
        setDataModel(model);
        console.log('User added!', data.docs);
      })
      .catch(err => {
        setLoading(false);
        console.log('error=================>>', err);
      });
  };
  useEffect(() => {}, []);
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../../assets/images/logo2.png')}
          style={styles.item}></Image>

        <Text style={styles.title}>Enter Details </Text>
        <View style={styles.button2}>
          <TouchableOpacity
            style={styles.smallButton2}
            onPress={onEmployeeModule}>
            <Image
              style={styles.imgStyle}
              source={require('../../../../assets/images/backicon2.png')}
            />
            {/* <Text style={styles.smallButtonText2}> Back </Text> */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.title2}>
          <Text style={styles.text5}>Enter Eemployee Record </Text>

          <Text style={styles.text}>Date:</Text>
          <DatePicker
            style={{width: 200}}
            date={datamodel.date}
            onDateChange={date => setDataModel({...datamodel, date: date})}
            //date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1990-05-01"
            maxDate="3000-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 2,
                marginLeft: 200,
              },
              dateInput: {
                marginLeft: 110,
              },
              // ... You can check the source to find the other keys.
            }}
            //onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
        <View style={styles.title2}>
          <Text style={styles.text}>Employee Picture:</Text>

          <TouchableOpacity onPress={ChooseFromGallary}>
            <Text style={{color: '#828282', marginLeft: 120, marginTop: 20}}>
              select picture:
            </Text>
          </TouchableOpacity>
          <Image
            style={{
              height: 80,
              width: 80,
              marginLeft: 260,
              marginTop: -50,
              borderRadius: 20,
            }}
            source={(uri = image)}
          />

          <Text style={styles.text}>Employee Name:</Text>
          <TextInput
            placeholder="Name"
            value={datamodel.EmployeeName}
            onChangeText={text =>
              setDataModel({...datamodel, EmployeeName: text})
            }
            style={styles.textinput}></TextInput>

          <Text style={styles.text}>Employee Contact Number:</Text>
          <TextInput
            placeholder="Contact Number"
            value={datamodel.EmployeeMobNo}
            onChangeText={text =>
              setDataModel({...datamodel, EmployeeMobNo: text})
            }
            style={styles.textinput}></TextInput>

          <Text style={styles.text}>Employee Email Address:</Text>
          <TextInput
            placeholder="Email@abc.com"
            value={datamodel.EmployeeEmail}
            onChangeText={text =>
              setDataModel({...datamodel, EmployeeEmail: text})
            }
            style={styles.textinput}></TextInput>

          <Text style={styles.text}> Enter CNIC Number Of Employee:</Text>
          <TextInput
            placeholder="0000-0000000-0"
            value={datamodel.Cnic}
            onChangeText={text => setDataModel({...datamodel, Cnic: text})}
            style={styles.textinput}></TextInput>
          <Text style={styles.text}> Month Of Hiring:</Text>
          <TextInput
            placeholder="Month Of Hiring"
            value={datamodel.MonthOfHiring}
            onChangeText={text =>
              setDataModel({...datamodel, MonthOfHiring: text})
            }
            style={styles.textinput}></TextInput>

          <Text style={styles.text}>Enter The Address Of Employee:</Text>
          <TextInput
            placeholder="Address"
            value={datamodel.EmployeeAddress}
            onChangeText={text =>
              setDataModel({...datamodel, EmployeeAddress: text})
            }
            style={styles.textinput}></TextInput>

          <Text style={styles.text}>Enter The Amount Of Salary:</Text>
          <TextInput
            placeholder="Salary"
            value={datamodel.Salary}
            onChangeText={text => setDataModel({...datamodel, Salary: text})}
            style={styles.textinput}></TextInput>

          <Text style={styles.text}>Purpose Of Hiring:</Text>
          <TextInput
            placeholder="Purpose"
            value={datamodel.Purpose}
            onChangeText={text => setDataModel({...datamodel, Purpose: text})}
            style={styles.textinput}></TextInput>
          <Text style={styles.text}>Comments:</Text>
          <TextInput
            multiline={true}
            placeholder=" Comment here"
            value={datamodel.comment}
            onChangeText={text => setDataModel({...datamodel, comment: text})}
            style={[
              styles.commentStyle,
              {
                height: 100,
                paddingVertical: 10,
                textAlignVertical: 'top',
              },
            ]}></TextInput>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            disabled={loading}
            style={styles.smallButton}
            onPress={() => {
              addData();
              //Alert.alert('submit buton pressed', 'form submited');
            }}>
            {loading ? (
              <ActivityIndicator size={'small'} color={'#FFF'} />
            ) : (
              <Text style={styles.smallButtonText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <BottomMenu2 />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  smallButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#05c46b',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 1000,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  smallButtonText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -45,
    marginLeft: 110,
    padding: 0,
  },

  title2: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems:'stretch',
  },
  title3: {
    display: 'flex',
    alignItems: 'center',
  },
  text3: {
    //fontStyle: 'bold',
    fontSize: 18,
  },

  textinput: {
    flex: 1,
    height: '19%',
    backgroundColor: '#D3D3D3',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 8,
    //paddingHorizontal:100,
    maxWidth: 330,
    //width: '100%',
    //borderColor: '#e8e8e8',
    borderWidth: 1,
    //borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  commentStyle: {
    flex: 1,
    height: 44,
    backgroundColor: '#D3D3D3',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 8,
    maxWidth: 330,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  textinput2: {
    flex: 1,
    height: 44,
    backgroundColor: '#fffafa',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    maxWidth: 200,
  },
  text: {
    fontSize: 15,
    //fontWeight: "400",
    marginLeft: 10,
    marginTop: 10,
  },
  button: {
    marginLeft: 250,
    marginTop: 9,
    marginBottom: 10,
    maxWidth: 90,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#363636',
  },
  item: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  text5: {
    fontSize: 22,
    fontWeight: '100',
    marginLeft: 75,
    marginTop: 10,
    marginBottom: 20,
  },
  smallButton2: {
    display: 'flex',
    alignItems: 'center',
    //backgroundColor: '#05c46b',
    paddingVertical: 14,
    paddingHorizontal: 10,
    //borderRadius: 1000,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  smallButtonText2: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 17,
  },
  button2: {
    marginLeft: 290,
    marginTop: -46,
    //marginBottom: 10,
    maxWidth: 90,
  },

  imgStyle: {
    marginLeft: 12,
    marginRight: 5,
    marginTop: -4,
    height: 30,
    width: 30,
  },
  lineStyle: {
    marginBottom: 20,
    //borderWidth: 1,
    // borderColor: 'grey',
  },
  menuStyle: {
    backgroundColor: '#363636',
    height: 65,
  },
});
export default App;

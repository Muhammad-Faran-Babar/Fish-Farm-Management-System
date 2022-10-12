import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
import firestore from '@react-native-firebase/firestore';

let model = {
  UserCNIC: '',
  UserName: '',
  DeliveryAddress: '',
  FishType: '',
  TotalWieght: '',
  PriceWieght: '',
  TotalPrice: '',
  date: '',
  picker: '',
  comment: '',
  WieghtCategory: '',
  PiecesNumber: '',
  PondUnitId: '',
};
const App = () => {
  //const [checked, setchecked] = useState(false);
  const [date, setDate] = useState(' ');
  const [checked, setchecked] = useState('Male');
  const [datamodel, setDataModel] = useState(model);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const onStockModule = () => {
    navigation.navigate('Home');
  };
  const onFeedModule = () => {
    navigation.navigate('FeedStock');
  };
  const onFeedData = () => {
    navigation.navigate('FeedData');
  };
  state = {gender: ''};
  showGender = option => {
    if (option !== 'disabled') {
      //alert(option);
      this.setState({gender: option});
    }
  };
  const addData = () => {
    setLoading(true);
    firestore()
      .collection('FishSelling')
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
      <>
        <View style={styles.header}>
          <Image
            source={require('../../../../assets/images/logo2.png')}
            style={styles.item}></Image>

          <Text style={styles.title}>Enter Details </Text>
          <View style={styles.button2}>
            <TouchableOpacity
              style={styles.smallButton2}
              onPress={onStockModule}>
              <Image
                style={styles.imgStyle}
                source={require('../../../../assets/images/backicon2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.title2}>
            <Text style={styles.text5}>Enter Fish Sales Details</Text>

            <Text style={styles.text}>Date:</Text>
            <DatePicker
              style={{width: 200}}
              //date={this.state.date}
              date={datamodel.date}
              onDateChange={date => setDataModel({...datamodel, date: date})}
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
            />

            <Text style={styles.text}>Buyer Name:</Text>

            <TextInput
              placeholder="Name"
              value={datamodel.UserName}
              onChangeText={text =>
                setDataModel({...datamodel, UserName: text})
              }
              style={styles.textinput}></TextInput>
            <Text style={styles.text}>Buyer CNIC :</Text>

            <TextInput
              placeholder="00000-0000000-0"
              value={datamodel.UserCNIC}
              onChangeText={text =>
                setDataModel({...datamodel, UserCNIC: text})
              }
              style={styles.textinput}></TextInput>
            <Text style={styles.text}>Enter Delivery Address:</Text>

            <TextInput
              placeholder="Delivery Address"
              value={datamodel.DeliveryAddress}
              onChangeText={text =>
                setDataModel({...datamodel, DeliveryAddress: text})
              }
              style={styles.textinput}></TextInput>
            <Text style={styles.text}>Enter Pond Unit Id:</Text>

            <TextInput
              placeholder="Pond Unit Id"
              value={datamodel.PondUnitId}
              onChangeText={text =>
                setDataModel({...datamodel, PondUnitId: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Fish Category:</Text>

            <Picker
              selectedValue={datamodel.FishType}
              onValueChange={text =>
                setDataModel({...datamodel, FishType: text})
              }>
              <Picker.Item
                label="Please select "
                value="disabled"
                color="#aaa"
              />
              <Picker.Item label="khagga" value="khagga" />
              <Picker.Item label="Rohu (Labeo rohita)" value="Rohu" />
              <Picker.Item label="Malli" value="Malli" />
              <Picker.Item label="Mushka" value="Mushka" />
              <Picker.Item label="Hamour" value="Hamour" />
              <Picker.Item label="Royal Hamour" value="Royal Hamour" />
              <Picker.Item label="Dama" value="Dama" />
              <Picker.Item label="khagga" value="khagga" />
            </Picker>

            <Text style={styles.text}>Enter Number of Pieces:</Text>

            <TextInput
              placeholder="Sold Number Of Pieces"
              value={datamodel.PiecesNumber}
              onChangeText={text =>
                setDataModel({...datamodel, PiecesNumber: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Select Category Of Wieght:</Text>

            <Picker
              selectedValue={datamodel.picker}
              onValueChange={text =>
                setDataModel({...datamodel, picker: text})
              }>
              <Picker.Item
                label="Please select "
                value="disabled"
                color="#aaa"
              />
              <Picker.Item label="1kg" value="1kg" />
              <Picker.Item label="1.5kg" value="1.5kg" />
              <Picker.Item label="2kg" value="2kg" />
              <Picker.Item label="2.5kg" value="2.5kg" />
              <Picker.Item label="3kg" value="3kg" />
              <Picker.Item label="3.5kg" value="3.5kg" />
              <Picker.Item label="4kg" value="4kg" />
              <Picker.Item label="4.5kg" value="4.5kg" />
            </Picker>

            <Text style={styles.text}>Enter Price According To Wieght:</Text>

            <TextInput
              placeholder="Price/Wieght"
              value={datamodel.PriceWieght}
              onChangeText={text =>
                setDataModel({...datamodel, PriceWieght: text}) &&
                this.setState({input2: parseInt(text)})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Total Wieght:</Text>

            <TextInput
              placeholder="Total Wieght"
              value={datamodel.TotalWieght}
              onChangeText={text =>
                setDataModel({...datamodel, TotalWieght: text}) &&
                this.setState({input1: parseInt(text)})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Total Bill:</Text>
            {/* <TouchableOpacity
              onPress={() => {
                result: this.state.input1
                  ? ((this.state.input1 * 40) / 41) * this.state.input2
                  : null;
              }}>
              <Text> Calculate</Text>
            </TouchableOpacity>
            <Text>
              {' '}
              {this.state.resul ? 'Result =' + this.state.result : null}
            </Text> */}
            {/* <Text >{ this.state.result ? 'Result= '+ this.state.result : null}</Text> */}

            <TextInput
              placeholder="Total Price"
              value={datamodel.TotalPrice}
              onChangeText={text =>
                setDataModel({...datamodel, TotalPrice: text})
              }
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
                // Alert.alert('submit buton pressed', 'form submited');
              }}>
              {loading ? (
                <ActivityIndicator size={'small'} color={'#FFF'} />
              ) : (
                <Text style={styles.smallButtonText}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
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
    marginBottom: 10,
    textAlign: 'center',
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
  titem: {
    flex: 1,
    height: 120,
    marginTop: -6,
    display: 'flex',
    //alignItems: 'center',
    //backgroundColor: '#05c46b',
    paddingVertical: 14,
    paddingHorizontal: 10,
    //borderRadius: 1000,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    //paddingVertical: 20,
    //borderColor: colors.primaryLight,
    //borderWidth: 1,
    //borderRadius: 5,
    //alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 3,
    marginLeft: -5,
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
  smallButton2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  smallButtonText2: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 16,
    marginTop: 5,
  },
  button2: {
    marginLeft: 300,
    marginTop: -48,
    marginBottom: 10,
    maxWidth: 100,
  },

  text5: {
    fontSize: 22,
    fontWeight: '100',
    marginLeft: 80,
    marginTop: 10,
    marginBottom: 20,
  },
  imgStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
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

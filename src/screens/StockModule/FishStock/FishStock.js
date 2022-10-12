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
let model = {
  InitialWeight: '',
  CompanyId: '',
  FishType: ' ',
  BoughtNUmber: '',
  Quantity: '',
  TotalAmount: '',
  PondUnits: '',
  Price: '',
  SpaceBeforeAddition: '',
  SpaceAfterAddition: '',
  date: '',
  comment: '',
};

const App = () => {
  //const [checked, setchecked] = useState(false);
  const [date, setDate] = useState(' ');
  const navigation = useNavigation();
  const [datamodel, setDataModel] = useState(model);
  const [loading, setLoading] = useState(false);
  const onStockModule = () => {
    navigation.navigate('StockModule');
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
      .collection('FishStock')
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
              {/* <Text style={styles.smallButtonText2}> Back </Text> */}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.title2}>
            <Text style={styles.text5}> Enter Fish Stock Record </Text>
            <Text style={styles.text}>Date:</Text>
            <DatePicker
              date={datamodel.date}
              onDateChange={date => setDataModel({...datamodel, date: date})}
              style={{width: 200}}
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
            />

            <Text style={styles.text}>Company Name:</Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 11,
                marginLeft: 10,
              }}>
              from which fish seed is bought
            </Text>

            <TextInput
              placeholder="Company Name"
              value={datamodel.CompanyId}
              onChangeText={text =>
                setDataModel({...datamodel, CompanyId: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Fish Pond Unit ID:</Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 11,
                marginLeft: 10,
              }}>
              In Which New Fish Stock Is Adding{' '}
            </Text>

            <TextInput
              placeholder="Pond Unit ID"
              value={datamodel.PondUnits}
              onChangeText={text =>
                setDataModel({...datamodel, PondUnits: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Enter Initial Size Of Fish</Text>

            <TextInput
              placeholder="Weight Of Fish"
              value={datamodel.InitialWeight}
              onChangeText={text =>
                setDataModel({...datamodel, InitialWeight: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Enter Type Of Fish:</Text>

            <TextInput
              placeholder="Species Of Fish"
              value={datamodel.FishType}
              onChangeText={text =>
                setDataModel({...datamodel, FishType: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Enter Total Quantity Of Fish Seed:</Text>

            <TextInput
              placeholder="Bought Number Of Fish"
              value={datamodel.BoughtNUmber}
              onChangeText={text =>
                setDataModel({...datamodel, BoughtNUmber: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Enter Total Purchasing Price:</Text>

            <TextInput
              placeholder="Purchasing Price"
              value={datamodel.Price}
              onChangeText={text => setDataModel({...datamodel, Price: text})}
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Available Space:</Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 11,
                marginLeft: 10,
              }}>
              before adding:
            </Text>

            <TextInput
              placeholder="Space Before Addition"
              value={datamodel.SpaceBeforeAddition}
              onChangeText={text =>
                setDataModel({...datamodel, SpaceBeforeAddition: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Remaining Space:</Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 11,
                marginLeft: 10,
              }}>
              after adding
            </Text>

            <TextInput
              placeholder="Remaining Space"
              value={datamodel.SpaceAfterAddition}
              onChangeText={text =>
                setDataModel({...datamodel, SpaceAfterAddition: text})
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
    marginLeft: 110,
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
    marginLeft: 85,
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
    marginTop: -55,

    //marginBottom: 10,
    maxWidth: 90,
  },
  imgStyle: {
    marginLeft: 5,
    marginRight: 3,
    marginTop: -5,
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
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ScrollView,
  TextInput,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
import firestore from '@react-native-firebase/firestore';

let model = {
  ManagerId: '',
  quantity: '',
  PondUnitId: '',
  FeedType: '',
  date: '',
  // FeedStockBefore: ' ',
  // RemainingFeedStock: '',
  comment: '',
};
const App = () => {
  //const [checked, setchecked] = useState(false);
  const [date, setDate] = useState(' ');
  const [checked, setchecked] = useState('Male');
  const [datamodel, setDataModel] = useState(model);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const onStockModule = () => {
    navigation.navigate('StockModule');
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
      .collection('DailyFeedStock')
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
            <Text style={styles.text5}> Enter Daily Feed Record </Text>

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

            <Text style={styles.text}>Pond Unit Id:</Text>

            <TextInput
              placeholder="Pond Id "
              value={datamodel.PondUnitId}
              onChangeText={text =>
                setDataModel({...datamodel, PondUnitId: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Feed Type:</Text>
            <TextInput
              placeholder="Feed Name"
              value={datamodel.FeedType}
              onChangeText={text =>
                setDataModel({...datamodel, FeedType: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Quantity Of Feed: </Text>
            <TextInput
              placeholder="Quantity in kg"
              value={datamodel.quantity}
              onChangeText={text =>
                setDataModel({...datamodel, quantity: text})
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
    //    textAlign: 'center',
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
    //backgroundColor: '#05c46b',
    //paddingVertical: 10,
    //paddingHorizontal: 5,
    //borderRadius: 1000,
    //elevation: 2,
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
    marginLeft: 75,
    marginTop: 10,
    marginBottom: 20,
  },
  imgStyle: {
    marginLeft: 8,
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

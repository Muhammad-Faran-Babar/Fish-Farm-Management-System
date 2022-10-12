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
  FlatList,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
import firestore from '@react-native-firebase/firestore';
let model = {
  ManagerId: '',
  NewPondUnitId: '',
  PondLocation: '',
  PondRequirment: '',
  TypesOfFish: '',
  Quantity: '',
  date: '',
  AfterAddition: '',
  MaximumOccupancy: '',
  comment: '',
};
const App = () => {
  //const [checked, setchecked] = useState(false);
  const [date, setDate] = useState(' ');
  const [datamodel, setDataModel] = useState(model);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  // const [state, setState] = useState({options: ''});
  // const [stockData, setStockData] = useState([]);

  const onPondModule = () => {
    navigation.navigate('PondModule');
  };

  const addData = () => {
    setLoading(true);
    firestore()
      .collection('NewPondAddition')
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

  // const getData = () => {
  //   firestore()
  //     .collection('NewPondAddition')
  //     // Order results
  //     .orderBy('NewPondUnitId', 'desc')
  //     .get()
  //     .then(result => {
  //       let data = [];
  //       result.docs.map(item => {
  //         data.push({...item.data(), ref: item.ref});
  //       });
  //       setStockData(data);
  //       console.log(stockData);
  //       console.log('User added!', result.docs);
  //     })
  //     .catch(err => {
  //       console.log('error=================>>', err);
  //     });
  // };
  // useEffect(() => {
  //   if (stockData.length == 0) getData();
  // }, []);

  // useEffect(() => {
  //   if (stockData.length != 0) console.log('stock Data', stockData);
  // }, [stockData]);

  // useEffect(() => {}, []);
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../../assets/images/logo2.png')}
          style={styles.item}></Image>

        <Text style={styles.title}>Enter Details </Text>
        <View style={styles.button2}>
          <TouchableOpacity style={styles.smallButton2} onPress={onPondModule}>
            <Image
              style={styles.imgStyle}
              source={require('../../../../assets/images/backicon2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.title2}>
          <Text style={styles.text5}> Add New Pond </Text>
          <Text style={styles.text}>Date:</Text>
          <DatePicker
            style={{width: 200}}
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
            }}
            //onDateChange={(date) => {this.setState({date: date})}}
          />
          {/* data={stockData}
          keyExtractor={(item, index) => index}
          renderItem=
          {({item}) => {
            return (
              <View style={styles.flatlistview}>
                <Text style={styles.TextView}>
                  Pond Unit Id: {item.NewPondUnitId}
                </Text>
              </View>
            );
          }} */}
          <Text style={styles.text}>Enter New Pond Unit ID:</Text>
          <TextInput
            placeholder="New Pond Unit Id"
            value={datamodel.NewPondUnitId}
            onChangeText={text =>
              setDataModel({...datamodel, NewPondUnitId: text})
            }
            style={styles.textinput}></TextInput>
          <Text style={styles.text}>Enter Pond Location:</Text>
          <TextInput
            placeholder="Pond Location"
            value={datamodel.PondLocation}
            onChangeText={text =>
              setDataModel({...datamodel, PondLocation: text})
            }
            style={styles.textinput}></TextInput>
          <Text style={styles.text}> Enter Requirment For New Pond:</Text>
          <TextInput
            placeholder="Pond Requirments"
            value={datamodel.PondRequirment}
            onChangeText={text =>
              setDataModel({...datamodel, PondRequirment: text})
            }
            style={styles.textinput}></TextInput>
          <Text style={styles.text}>Enter Total Number Of Pond Units: </Text>
          <TextInput
            placeholder="total Number Of Pond Units"
            value={datamodel.AfterAddition}
            onChangeText={text =>
              setDataModel({...datamodel, AfterAddition: text})
            }
            style={styles.textinput}></TextInput>
          <Text style={styles.text}>Maximum Occupancy Of New Pond: </Text>
          <TextInput
            placeholder="Maximus Occupancy"
            value={datamodel.MaximumOccupancy}
            onChangeText={text =>
              setDataModel({...datamodel, MaximumOccupancy: text})
            }
            style={styles.textinput}></TextInput>
          <Text style={styles.text}>Types Of Fish in New Pond: </Text>
          <TextInput
            placeholder="Types Of Fish"
            value={datamodel.TypesOfFish}
            onChangeText={text =>
              setDataModel({...datamodel, TypesOfFish: text})
            }
            style={styles.textinput}></TextInput>
          <Text style={styles.text}> Quantity Of Fish: </Text>
          <TextInput
            placeholder="Quantity Of Fish"
            value={datamodel.Quantity}
            onChangeText={text => setDataModel({...datamodel, Quantity: text})}
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
    marginLeft: 105,
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
    //marginLeft: -2,
    marginRight: 3,
    marginTop: -3,
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
  flatlistview: {},
  TextView: {
    fontSize: 15,
    fontWeight: '900',
    marginLeft: 10,
    //marginTop: 10,
    //marginBottom: 10,
  },
});
export default App;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import DatePicker from 'react-native-datepicker';

// import {BorderlessButton} from 'react-native-gesture-handler';
// //import {View, Text, TextInput, StyleSheet} from 'react-native';

// const App = () => {
//   //const [checked, setchecked] = useState(false);
//   const [date, setDate] = useState(' ');

//   return (
//     <>
//       <View style={styles.header}>
//         <Image
//           source={require('../../../../assets/images/logo2.png')}
//           style={styles.item}></Image>

//         <Text style={styles.title}>Enter Details </Text>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <Text style={styles.text5}> Add New Pond Unit </Text>

//         <View style={styles.title2}>
//           <Text style={styles.text}>Date:</Text>
//           <DatePicker
//             style={{width: 200}}
//             //date={this.state.date}
//             mode="date"
//             marginTop="30"
//             placeholder="select date"
//             format="YYYY-MM-DD"
//             minDate="2016-05-01"
//             maxDate="2016-06-01"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             customStyles={{
//               dateIcon: {
//                 position: 'absolute',
//                 left: 0,
//                 top: 2,
//                 marginLeft: 200,
//               },
//               dateInput: {
//                 marginLeft: 110,
//               },
//               // ... You can check the source to find the other keys.
//             }}
//             //onDateChange={(date) => {this.setState({date: date})}}
//           />
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Manager ID:</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>

//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter New Pond Unit ID :</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>

//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter Pond Location:</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter Requirment For New Pond:</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter Previous Number Of Pond</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter New Number Of Pond</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Maximum Occupancy Of New Pond</Text>

//           <TextInput style={styles.textinput}></TextInput>
//         </View>

//         <View style={styles.button}>
//           <TouchableOpacity
//             style={styles.smallButton}
//             onPress={() => {
//               Alert.alert('submit buton pressed', 'form submited');
//             }}>
//             <Text style={styles.smallButtonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   smallButton: {
//     backgroundColor: '#05c46b',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 2, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },
//   smallButtonText: {
//     color: '#fff',
//     fontWeight: '100',
//     fontSize: 16,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',

//     marginTop: -45,
//     textAlign: 'center',
//     padding: 0,
//   },

//   title2: {
//     display: 'flex',
//     flexDirection: 'column',
//     // alignItems:'stretch',
//   },
//   title3: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   text3: {
//     //fontStyle: 'bold',
//     fontSize: 18,
//   },
//   text4: {
//     fontSize: 9,
//     fontStyle: 'italic',
//     marginLeft: 5,
//   },

//   textinput: {
//     flex: 1,
//     height: 34,
//     backgroundColor: '#fffafa',
//     marginLeft: 5,
//     marginTop: 10,
//     borderRadius: 8,
//     paddingHorizontal: 100,
//     maxWidth: 330,
//   },
//   textinput2: {
//     flex: 1,
//     height: 44,
//     backgroundColor: '#fffafa',
//     marginLeft: 10,
//     marginTop: 10,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     maxWidth: 200,
//   },
//   text: {
//     fontSize: 14,
//     fontWeight: '400',
//     marginLeft: 5,
//   },
//   text5: {
//     fontSize: 22,
//     fontWeight: '100',
//     marginLeft: 85,
//   },
//   button: {
//     marginLeft: 250,
//     marginTop: 9,
//     marginBottom: 10,
//     maxWidth: 90,
//   },
//   header: {
//     width: '100%',
//     height: 70,
//     backgroundColor: '#4d4d4d',
//   },
//   item: {
//     height: 50,
//     width: 50,
//     marginLeft: 10,
//     marginTop: 10,
//   },
// });

// export default App;

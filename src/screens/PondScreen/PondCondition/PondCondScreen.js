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

import {BorderlessButton} from 'react-native-gesture-handler';
let model = {
  ManagerId: '',
  PondUnitId: '',
  TempratureOfPond: '',
  phOfPond: '',
  NumberOfFish: '',
  date: '',
  comment: '',
  TypesOfFish: '',
};
const App = () => {
  const [date, setDate] = useState(' ');
  const [checked, setchecked] = useState('Male');
  const [datamodel, setDataModel] = useState(model);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const onPondModule = () => {
    navigation.navigate('PondModule');
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
      .collection('PondCondtion')
      .add(datamodel)
      .then(data => {
        setLoading(false);
        setDataModel(model);
        console.log('data saved!', data.docs);
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
              onPress={onPondModule}>
              <Image
                style={styles.imgStyle}
                source={require('../../../../assets/images/backicon2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.title2}>
            <Text style={styles.text5}> Enter Pond Condition Record </Text>

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

            <Text style={styles.text}>Pond Unit ID :</Text>

            <TextInput
              placeholder='"Pond Unit Id'
              value={datamodel.PondUnitId}
              onChangeText={text =>
                setDataModel({...datamodel, PondUnitId: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Temprature Of Pond:</Text>

            <TextInput
              placeholder="Temprature In Celsius"
              value={datamodel.TempratureOfPond}
              onChangeText={text =>
                setDataModel({...datamodel, TempratureOfPond: text})
              }
              style={styles.textinput}></TextInput>

            {/* <View style={styles.title2}>
            <Text style={styles.text}>Select the category of form </Text>
            <Picker
            // selectedValue={datamodel.ManagerId}
            // onValueChange={text =>
            //   setDataModel({...datamodel, ManagerId: text})
            // }
            >
              <Picker.Item
                // date={datamodel.picker}
                // onDateChange={date =>
                //   setDataModel({...datamodel, picker: Picker})
                // }
                label="Please select"
                value="disabled"
                color="#aaa"
              />
              <Picker.Item label="Electricity Expenses" value="electricity" />
              <Picker.Item label="Feed Expenses" value="feedexpense" />
              <Picker.Item label="Maintanence Expenses" value="mexpense" />
              <Picker.Item label="Medicine Expenses" value="medexpense" />
              <Picker.Item label="Salary Expenses" value="salaryexpense" />
            </Picker>
          </View> */}

            <Text style={styles.text}>ph Of Pond:</Text>

            <TextInput
              placeholder="ph Of pond"
              value={datamodel.phOfPond}
              onChangeText={text =>
                setDataModel({...datamodel, phOfPond: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Number of Fish In That Pond:</Text>
            <TextInput
              placeholder="Number Of Fish"
              value={datamodel.NumberOfFish}
              onChangeText={text =>
                setDataModel({...datamodel, NumberOfFish: text})
              }
              style={styles.textinput}></TextInput>

            <Text style={styles.text}>Types of Fish In That Pond:</Text>
            <TextInput
              placeholder="Types Of Fish"
              value={datamodel.TypesOfFish}
              onChangeText={text =>
                setDataModel({...datamodel, TypesOfFish: text})
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
    marginLeft: 45,
    marginTop: 10,
    marginBottom: 20,
  },
  imgStyle: {
    marginLeft: 10,
    marginRight: 3,
    marginTop: 3,
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

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
//   TextInput,
//   ActivityIndicator,
// } from 'react-native';
// import DatePicker from 'react-native-datepicker';
// import {useNavigation} from '@react-navigation/native';
// import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
// import firestore from '@react-native-firebase/firestore';

// import {BorderlessButton} from 'react-native-gesture-handler';
// let model = {
//   ManagerId: '',
//   PondUnitId: '',
//   TempratureOfPond: '',
//   phOfPond: '',
//   NumberOfFish: '',
//   date: '',
// };
// const App = () => {
//   const [checked, setchecked] = useState(false);
//   const [date, setDate] = useState(' ');
//   const navigation = useNavigation();
//   const [datamodel, setDataModel] = useState(model);
//   const [loading, setLoading] = useState(false);

//   const onPondModule = () => {
//     navigation.navigate('PondModule');
//   };
//   const addData = () => {
//     setLoading(true);
//     firestore()
//       .collection('PondCondtion')
//       .add(datamodel)
//       .then(data => {
//         setLoading(false);
//         setDataModel(model);
//         console.log('User added!', data.docs);
//       })
//       .catch(err => {
//         setLoading(false);
//         console.log('error=================>>', err);
//       });
//   };
//   useEffect(() => {}, []);
//   return (
//     <>
//       <View style={styles.header}>
//         <Image
//           source={require('../../../../assets/images/logo2.png')}
//           //source={require('../../../assets/images/logo2.png')}
//           style={styles.item}></Image>

//         <Text style={styles.title}>Enter Details </Text>
//         <View style={styles.button2}>
//           <TouchableOpacity style={styles.smallButton2} onPress={onPondModule}>
//             <Image
//               style={styles.imgStyle}
//               source={require('../../../../assets/images/backicon2.png')}
//             />
//             {/* <Text style={styles.smallButtonText2}> Back </Text> */}
//           </TouchableOpacity>
//         </View>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.title2}>
//           <Text style={styles.text5}> Enter Pond Condition </Text>

//           <Text style={styles.text}>Date:</Text>
//           <DatePicker
//             style={{width: 200}}
//             //date={this.state.date}
//             date={datamodel.date}
//             onDateChange={date => setDataModel({...datamodel, date: date})}
//             mode="date"
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
//           />
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Manager ID:</Text>
//           <TextInput
//             value={datamodel.ManagerId}
//             onDateChange={text => setDataModel({...datamodel, ManagerId: text})}
//             placeholder="Manager Id"
//             style={styles.textinput}></TextInput>
//         </View>

//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter Pond Unit ID:</Text>

//           <TextInput
//             value={datamodel.PondUnitId}
//             onDateChange={text =>
//               setDataModel({...datamodel, PondUnitId: text})
//             }
//             placeholder="Pond Unit Id"
//             style={styles.textinput}></TextInput>
//         </View>

//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter Pond Temprature:</Text>

//           <TextInput
//             value={datamodel.TempratureOfPond}
//             onDateChange={text =>
//               setDataModel({...datamodel, TempratureOfPond: text})
//             }
//             placeholder="Temprature Of Pond In Celsius"
//             style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>Enter ph of Pond:</Text>

//           <TextInput
//             value={datamodel.phOfPond}
//             onDateChange={text => setDataModel({...datamodel, phOfPond: text})}
//             placeholder="ph OF Pond"
//             style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.title2}>
//           <Text style={styles.text}>
//             Enter Total Number Of Fish In That Pond:{' '}
//           </Text>

//           <TextInput
//             value={datamodel.NumberOfFish}
//             onDateChange={text =>
//               setDataModel({...datamodel, NumberOfFish: text})
//             }
//             placeholder="Number of Fish"
//             style={styles.textinput}></TextInput>
//         </View>
//         <View style={styles.button}>
//           <TouchableOpacity
//             disabled={loading}
//             style={styles.smallButton}
//             onPress={() => {
//               addData();
//               //   // Alert.alert('submit buton pressed', 'form submited');
//             }}>
//             {loading ? (
//               <ActivityIndicator size={'small'} color={'#FFF'} />
//             ) : (
//               <Text style={styles.smallButtonText}>Submit</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       <View style={styles.menuStyle}>
//         <View style={styles.lineStyle}></View>
//         <BottomMenu2 />
//         <View
//           style={[
//             styles.lineStyle,
//             {
//               marginVertical: 10,
//             },
//           ]}></View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   smallButton: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#05c46b',
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     borderRadius: 1000,
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

//   textinput: {
//     flex: 1,
//     height: '19%',
//     backgroundColor: '#D3D3D3',
//     marginLeft: 10,
//     marginTop: 10,
//     borderRadius: 8,
//     //paddingHorizontal:100,
//     maxWidth: 330,
//     //width: '100%',
//     //borderColor: '#e8e8e8',
//     borderWidth: 1,
//     //borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 5,
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
//     fontSize: 15,
//     //fontWeight: "400",
//     marginLeft: 10,
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
//   text5: {
//     fontSize: 22,
//     fontWeight: '100',
//     marginLeft: 85,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   smallButton2: {
//     display: 'flex',
//     alignItems: 'center',
//     //backgroundColor: '#05c46b',
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     //borderRadius: 1000,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 2, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },
//   smallButtonText2: {
//     color: '#fff',
//     fontWeight: '400',
//     fontSize: 17,
//   },
//   button2: {
//     marginLeft: 290,
//     marginTop: -46,
//     //marginBottom: 10,
//     maxWidth: 90,
//   },
//   imgStyle: {
//     marginLeft: 12,
//     marginRight: 5,
//     marginTop: -5,
//     height: 35,
//     width: 35,
//   },
//   lineStyle: {
//     marginBottom: 20,
//     //borderWidth: 1,
//     // borderColor: 'grey',
//   },
//   menuStyle: {
//     backgroundColor: '#4d4d4d',
//     height: 65,
//   },
// });
// export default App;

// // import React, {useState} from 'react';
// // import {
// //   View,
// //   Text,
// //   Image,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Alert,
// //   ScrollView,
// //   TextInput,
// // } from 'react-native';
// // import DatePicker from 'react-native-datepicker';

// // import {BorderlessButton} from 'react-native-gesture-handler';
// // //import {View, Text, TextInput, StyleSheet} from 'react-native';

// // const App = () => {
// //   //const [checked, setchecked] = useState(false);
// //   const [date, setDate] = useState(' ');

// //   return (
// //     <>
// //       <View style={styles.header}>
// //         <Image
// //           source={require('../../../../assets/images/logo2.png')}
// //           style={styles.item}></Image>

// //         <Text style={styles.title}>Enter Details </Text>
// //       </View>
// //       <ScrollView showsVerticalScrollIndicator={false}>
// //         <Text style={styles.text5}> Pond Condition </Text>

// //         <View style={styles.title2}>
// //           <Text style={styles.text}>Date:</Text>
// //           <DatePicker
// //             style={{width: 200}}
// //             //date={this.state.date}
// //             mode="date"
// //             marginTop="30"
// //             placeholder="select date"
// //             format="YYYY-MM-DD"
// //             minDate="2016-05-01"
// //             maxDate="2016-06-01"
// //             confirmBtnText="Confirm"
// //             cancelBtnText="Cancel"
// //             customStyles={{
// //               dateIcon: {
// //                 position: 'absolute',
// //                 left: 0,
// //                 top: 2,
// //                 marginLeft: 200,
// //               },
// //               dateInput: {
// //                 marginLeft: 110,
// //               },
// //               // ... You can check the source to find the other keys.
// //             }}
// //             //onDateChange={(date) => {this.setState({date: date})}}
// //           />
// //         </View>
// //         <View style={styles.title2}>
// //           <Text style={styles.text}>Manager ID:</Text>

// //           <TextInput style={styles.textinput}></TextInput>
// //         </View>

// //         <View style={styles.title2}>
// //           <Text style={styles.text}>Enter Pond Unit ID :</Text>

// //           <TextInput style={styles.textinput}></TextInput>
// //         </View>

// //         <View style={styles.title2}>
// //           <Text style={styles.text}>Enter Pond Temprature:</Text>

// //           <TextInput placeholder="Celsius" style={styles.textinput}></TextInput>
// //         </View>
// //         <View style={styles.title2}>
// //           <Text style={styles.text}>Enter ph of Pond:</Text>

// //           <TextInput style={styles.textinput}></TextInput>
// //         </View>
// //         <View style={styles.title2}>
// //           <Text style={styles.text}>Enter Total Number Of Fish Available</Text>

// //           <TextInput style={styles.textinput}></TextInput>
// //         </View>

// //         <View style={styles.button}>
// //           <TouchableOpacity
// //             style={styles.smallButton}
// //             onPress={() => {
// //               Alert.alert('submit buton pressed', 'form submited');
// //             }}>
// //             <Text style={styles.smallButtonText}>Submit</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   smallButton: {
// //     backgroundColor: '#05c46b',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     elevation: 2,
// //     shadowColor: '#000',
// //     shadowOffset: {width: 2, height: 2},
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.5,
// //   },
// //   smallButtonText: {
// //     color: '#fff',
// //     fontWeight: '100',
// //     fontSize: 16,
// //   },
// //   title: {
// //     fontSize: 30,
// //     fontWeight: 'bold',
// //     color: '#fff',

// //     marginTop: -45,
// //     textAlign: 'center',
// //     padding: 0,
// //   },

// //   title2: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     // alignItems:'stretch',
// //   },
// //   title3: {
// //     display: 'flex',
// //     alignItems: 'center',
// //   },
// //   text3: {
// //     //fontStyle: 'bold',
// //     fontSize: 18,
// //   },
// //   text4: {
// //     fontSize: 9,
// //     fontStyle: 'italic',
// //     marginLeft: 5,
// //   },

// //   textinput: {
// //     flex: 1,
// //     height: 34,
// //     backgroundColor: '#fffafa',
// //     marginLeft: 5,
// //     marginTop: 10,
// //     borderRadius: 8,
// //     paddingHorizontal: 100,
// //     maxWidth: 330,
// //   },
// //   textinput2: {
// //     flex: 1,
// //     height: 44,
// //     backgroundColor: '#fffafa',
// //     marginLeft: 10,
// //     marginTop: 10,
// //     borderRadius: 8,
// //     paddingHorizontal: 10,
// //     maxWidth: 200,
// //   },
// //   text: {
// //     fontSize: 14,
// //     fontWeight: '400',
// //     marginLeft: 5,
// //   },
// //   text5: {
// //     fontSize: 22,
// //     fontWeight: '100',
// //     marginLeft: 85,
// //   },
// //   button: {
// //     marginLeft: 250,
// //     marginTop: 9,
// //     marginBottom: 10,
// //     maxWidth: 90,
// //   },
// //   header: {
// //     width: '100%',
// //     height: 70,
// //     backgroundColor: '#4d4d4d',
// //   },
// //   item: {
// //     height: 50,
// //     width: 50,
// //     marginLeft: 10,
// //     marginTop: 10,
// //   },
// // });

// // export default App;

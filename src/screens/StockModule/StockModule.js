import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../components/BottomMenu2/BottomMenu2';

const App = props => {
  const [state, setState] = useState({options: ''});
  const [stockData, setStockData] = useState([]);

  const setOptions = option => {
    if (option !== 'disabled') {
      setState({options: 'disabled'});
    }
    if (option == 'feedstock') {
      props.navigation.navigate('FeedStock');
    } else if (option == 'fishstock') {
      props.navigation.navigate('FishStock');
    } else if (option == 'medstock') {
      props.navigation.navigate('MedicineStock');
    } else if (option == 'FertilizerStock') {
      props.navigation.navigate('FertilizerStock');
    } else if (option == 'DailyFeedStock') {
      props.navigation.navigate('DailyFeedStock');
    }
  };
  // const [isPress, setIsPress] = React.useState(false);

  // const touchProps = {
  //   activeOpacity: 1,
  //   underlayColor: '#828282',
  //   style: isPress ? styles.btnPress : styles.btnNormal,
  //   onHideUnderlay: () => setIsPress(false),
  //   onShowUnderlay: () => setIsPress(true),

  //   onPress: () => {
  //     if (key == 1) {
  //       props.navigation.navigate('MedicineStock');
  //     }
  //   },
  // };

  // const getData = () => {
  //   firestore()
  //     .collection('stock')
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

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={styles.item}></Image>

        <Text style={styles.title}>Stock Details </Text>
        <View style={styles.button}>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              props.navigation.navigate('Home');
              //Alert.alert('submit buton pressed', 'form submited');
            }}>
            <Image
              style={styles.imgStyle}
              source={require('../../../assets/images/backicon2.png')}
            />
            {/* <Text style={styles.smallButtonText}>Home</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>Select the category of form </Text>
        <Picker onValueChange={setOptions} selectedValue={state.options}>
          <Picker.Item label="Please select" value="disabled" color="#aaa" />
          <Picker.Item label="Feed Stock" value="feedstock" />
          <Picker.Item label="Fish Stock" value="fishstock" />
          <Picker.Item label="Medicine Stock" value="medstock" />
          <Picker.Item label="Fertilizer Stock" value="FertilizerStock" />
          <Picker.Item label="Daily Feed Stock" value="DailyFeedStock" />
        </Picker>
      </View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
        }}>
        Select category of Stock Reports
      </Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FeedData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Feed Stock Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FishStockData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fish Stock Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('MedicineStockData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Medicine Stock Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FertilizerStockData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fertilizer Stock Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('DailyFeedStockData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Daily Feed Stock Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FishStockSummery');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fish Stock Summery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('MedicineStockSummery');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Medicine Stock Summery</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SplashScreen');
        }}>
        <Text style={styles.slidertext}>Splash Screen</Text>
      </TouchableOpacity>

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

export default App;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  flattextview: {
    marginTop: 15,
    marginLeft: 10,
  },
  flatlistitemview: {
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  flatbutton: {
    marginLeft: 200,
    marginTop: -35,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#05c46b',
    //paddingVertical: 14,
    //paddingHorizontal: 10,
    borderRadius: 10,
    width: 50,
    height: 30,
    // elevation: 2,
    shadowColor: '#000',
    //shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    //shadowRadius: 3.5,
  },
  flatlistview: {
    margin: 4,
    height: 70,
    //flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 14,
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginRight: 10,
    marginLeft: 10,
    //width: 350,
    //paddingHorizontal: 10,
    //marginVertical: 5,

    // justifyContent: 'space-around',
  },
  body: {
    flex: 1,
    margin: 30,
  },
  item: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  imgStyle: {
    // transform: [{rotate: '330deg'}],
    marginLeft: 19,
    marginRight: 3,
    marginTop: 5,
    height: 30,
    width: 30,
  },
  item3: {
    //height: 45,
    //width: 45,
    fontSize: 18,
    marginLeft: 290,
    marginTop: -45,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -45,
    marginLeft: 110,
    padding: 0,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#363636',
  },
  smallButton: {
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
  smallButtonText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 16,
    marginTop: 7.5,
  },
  button: {
    marginLeft: 290,
    marginTop: -40,
    marginBottom: 10,
    maxWidth: 100,
  },
  lineStyle: {
    marginBottom: 15,
    //borderWidth: 1,
    // borderColor: 'grey',
  },
  menuStyle: {
    backgroundColor: '#363636',
    height: 60,
  },
  btnNormal: {
    borderColor: '#828282',
    borderWidth: 0,
    borderRadius: 20,
    height: 30,
    width: 200,
  },
  btnPress: {
    borderColor: '#4d4d4d',
    borderWidth: 0,
    height: 30,
    width: 200,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  row: {
    //flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 35,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row2: {
    //flexDirection: 'row',
    justifyContent: 'space-evenly',

    marginLeft: 70,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row3: {
    //flexDirection: 'row',
    marginLeft: 65,
    marginRight: 35,
    justifyContent: 'space-evenly',

    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row4: {
    marginLeft: 35,
    marginRight: 35,
    justifyContent: 'space-evenly',

    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  sliderimage: {
    height: 125,
    width: 120,
    //marginBottom: 20,
    marginLeft: 10,
    marginTop: -10,
    alignSelf: 'center',
  },
  slidertext: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  item2: {
    flex: 1,
    height: 110,
    paddingVertical: 30,
    borderColor: '#828282',
    borderWidth: 20,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    //backgroundColor: '#727272',
  },
});

//
// import React from 'react';
// import{View, Text, StyleSheet, Image } from 'react-native';
// const App = () => {
// return (
//   <View style={styles.header}>

//         <Image
//         source={require('../../../../assets/images/logo2.png')}
//         style={styles.item}></Image>

//         <Text style={styles.title}>Fish Farm </Text>

//   </View>
// );
// }
// const styles = StyleSheet.create({
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',

//     marginTop: -45,
//     textAlign:'center',
//     padding: 0,

//   },
//   header: {
//     width: '100%',
//     height: 70,
//     backgroundColor: '#4d4d4d'

//   },
//    item: {
//     height: 50,
//     width: 50 ,
//     marginLeft: 10,
//     marginTop:10,
//    },
// });

// export default App;

// import React from 'react';
// import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {colors, fonts} from '../../styles';
// const Feed = require('../../../assets/images/Fishfeed.png');
// const Medicine = require('../../../assets/images/Fishmedicine.png');
// const Fish = require('../../../assets/images/Growth-icon.png');

// export default function PagesScreen() {
//   const navigation = useNavigation();

//   const onFishStock = () => {
//     navigation.navigate('FishStock');
//   };
//   const onFeedStock = () => {
//     navigation.navigate('FeedStock');
//   };
//   const onMedicineStock = () => {
//     navigation.navigate('MedicineStock');
//   };
//   const onHome = () => {
//     navigation.navigate('Home');
//   };
//   return (
//     <>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={onHome}>
//           <Image
//             source={require('../../../assets/images/logo2.png')}
//             style={styles.item2}></Image>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.title}>Fish Farm </Text>

//       <View style={styles.container}>
//         <View style={styles.row}>
//           <TouchableOpacity onPress={onFishStock} style={styles.item}>
//             <Image
//               resizeMode="contain"
//               source={Fish}
//               style={styles.itemImage}
//             />
//             {/* <Text>{' '}</Text>
// <Text>{' '}</Text>
// <Text>{' '}</Text> */}
//             <Text> Fish Stock Information</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.row}>
//           <TouchableOpacity onPress={onFeedStock} style={styles.item}>
//             <Image
//               resizeMode="contain"
//               source={Feed}
//               style={styles.itemImage}
//             />
//             <Text>Enter Feed Stock Information</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.row}>
//           <TouchableOpacity onPress={onMedicineStock} style={styles.item}>
//             <Image
//               resizeMode="contain"
//               source={Medicine}
//               style={styles.itemImage}
//             />
//             {/* <Text>{' '}</Text>
// <Text>{' '}</Text>
// <Text>{' '}</Text> */}
//             <Text>Enter Medicine Stock Information</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//     paddingTop: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     paddingHorizontal: 70,
//     marginTop: 30,
//   },
//   item: {
//     flex: 1,
//     height: 160,
//     paddingVertical: 10,
//     borderColor: colors.primaryLight,
//     borderWidth: 1,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     marginHorizontal: 3,
//   },
//   blogItem: {
//     width: '31%',
//     height: 120,
//     paddingVertical: 20,
//     borderColor: colors.primaryLight,
//     borderWidth: 1,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     marginHorizontal: 5,
//   },
//   itemText: {
//     color: colors.primary,
//     fontFamily: fonts.primary,
//   },
//   itemImage: {
//     height: 80,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: -75,
//     textAlign: 'center',
//     padding: 0,
//   },
//   header: {
//     width: '100%',
//     height: 102,
//     backgroundColor: '#4d4d4d',
//   },
//   item2: {
//     height: 50,
//     width: 50,
//     marginLeft: 10,
//     marginTop: 10,
//   },
// });

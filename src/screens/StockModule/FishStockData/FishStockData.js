import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
import firestore from '@react-native-firebase/firestore';
import FishStock from '../FishStock';

//import {Icon} from 'react-native-vector-icons/FontAwesome';
// const onHome = () => {
//   navigation.navigate('Home');
//};
// const navigation = useNavigation();
// useEffect(
//   () =>
//     navigation.addListener('beforeRemove', event => {
//       // Prevent default behavior
//       event.preventDefault();

//       Alert.alert('Discard Details', 'Are you sure you want to discard this?', [
//         {text: 'No', style: 'cancel', onPress: () => {}},
//         {
//           text: 'Yes',
//           style: 'destructive',
//           onPress: () => navigation.dispatch(event.data.action),
//         },
//       ]);
//     })[navigation],
// );

const App = props => {
  const [state, setState] = useState({options: ''});
  const [stockData, setStockData] = useState([]);

  const setOptions = option => {
    //if (option !=='disabled'){
    if (option !== 'disabled') {
      //alert(option);
      setState({options: option});
    }

    //}
  };

  const getData = () => {
    firestore()
      .collection('FishStock')
      .get()
      .then(result => {
        let data = [];
        result.docs.map(item => {
          data.push({...item.data(), ref: item.ref});
        });
        setStockData(data);
        console.log(stockData);
        console.log('User added!', result.docs);
      })
      .catch(err => {
        console.log('error=================>>', err);
      });
  };
  useEffect(() => {
    if (stockData.length == 0) getData();
  }, []);

  useEffect(() => {
    if (stockData.length != 0) console.log('stock Data', stockData);
  }, [stockData]);

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../../assets/images/logo2.png')}
          style={styles.item}></Image>

        <Text style={styles.title}> Stock Details </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              props.navigation.navigate('StockModule');
              //Alert.alert('submit buton pressed', 'form submited');
            }}>
            <Image
              style={styles.imgStyle}
              source={require('../../../../assets/images/backicon2.png')}
            />
            {/* <Text style={styles.smallButtonText}>Home</Text> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.body}>
        <Text style={styles.text}>Select the category of form </Text>
        <Picker onValueChange={setOptions} selectedValue={state.options}>
          <Picker.Item label="Please select" value="disabled" color="#aaa" />
          <Picker.Item label="Feed Stock" value="feedstock" />
          <Picker.Item label="Fish Stock" value="fishstock" />
          <Picker.Item label="Medicine Stock" value="medstock" />
        </Picker>
      </View> */}
      {/* <Image
        style={styles.ReportimgStyle}
        source={require('../../../../assets/images/reporticon.png')}
      /> */}

      <Text style={styles.TitleView}>Fish Stock Reports</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={stockData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return (
            <>
              <View style={styles.flatlistview}>
                <Text style={styles.TextView}> Date: {item.date}</Text>

                <Text style={styles.TextView}>
                  Company Id: {item.companyId}
                </Text>
                <Text style={styles.TextView}>
                  Pond Unit Id: {item.PondUnits}
                </Text>
                <Text style={styles.TextView}>
                  Initial Size Of Fish: {item.InitialWeight}
                </Text>
                <Text style={styles.TextView}>
                  Type Of Fish: {item.FishType}
                </Text>
                <Text style={styles.TextView}>
                  Total Quantity Of Fish Seed: {item.BoughtNUmber}
                </Text>
                <Text style={styles.TextView}>
                  Enter Total Purchasing Price: {item.Price}
                </Text>
                <Text style={styles.TextView}>
                  Space Before New Addition: {item.SpaceBeforeAddition}
                </Text>
                <Text style={styles.TextView}>
                  Remaining Space After Addition: {item.SpaceAfterAddition}
                </Text>
                <Text style={styles.TextView}>Comments: {item.comment}</Text>

                <View style={styles.flatbutton}>
                  <TouchableOpacity
                    style={styles.deletebtn}
                    onPress={() => {
                      item.ref
                        .delete()
                        .then(res => {
                          console.log('Deleted');
                          getData();
                        })
                        .catch(err => {
                          console.log(err);
                        });
                    }}>
                    <Image
                      style={styles.deleteimg}
                      source={require('../../../../assets/images/deleteblack.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          );
        }}
      />

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
  TextView: {
    //display: 'flex',
    padding: 1,
    fontWeight: '700',
    fontSize: 15,
    margin: 3,
    marginLeft: 10,
  },
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
    marginLeft: 250,
    marginTop: -27,
  },
  flatlistview: {
    // justifyContent: 'space-between',
    margin: 4,
    height: 430,
    //flexDirection: 'row',
    borderWidth: 10,
    borderRadius: 30,
    borderColor: '#777B7E',
    paddingVertical: 14,
    marginTop: 10,
    paddingHorizontal: 10,
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
    marginLeft: 19,
    marginRight: 3,
    marginTop: 5,
    height: 30,
    width: 30,
  },
  deleteimg: {
    //transform: [{rotate: '90deg'}],
    height: 45,
    width: 45,
    marginTop: 63,
    marginRight: 30,
  },
  ReportimgStyle: {
    height: 20,
    width: 20,
    //marginTop: 20,
    //marginLeft: 90,
  },
  reportimgview: {
    marginLeft: 50,
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
    marginLeft: 100,
    padding: 0,
  },
  TitleView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
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
});

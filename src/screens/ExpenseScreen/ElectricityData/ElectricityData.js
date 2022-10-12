import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import BottomMenu2 from '../../../components/BottomMenu2/BottomMenu2';
import firestore from '@react-native-firebase/firestore';

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
      .collection('ElectricityRecord')
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

        <Text style={styles.title}> Expense Details </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              props.navigation.navigate('ExpenseModule');
              //Alert.alert('submit buton pressed', 'form submited');
            }}>
            <Image
              style={styles.imgStyle}
              source={require('../../../../assets/images/backicon2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.TitleView}>Electricity Expense Reports</Text>

      <FlatList
        data={stockData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return (
            <>
              <View style={styles.flatlistview}>
                <Text style={styles.TextView}>Date: {item.date}</Text>

                <Text style={styles.TextView}>
                  Bill Month: {item.BillMonth}
                </Text>
                <Text style={styles.TextView}>
                  Units Consumed: {item.UnitConsumed}
                </Text>
                <Text style={styles.TextView}>
                  Meter Number: {item.MeterNumber}
                </Text>
                <Text style={styles.TextView}>
                  Total Bill Amount: {item.BillAmount}
                </Text>
                <Text style={styles.TextView}>
                  Bill Of Previous Month: {item.PreviousMonthBill}
                </Text>
                <Text style={styles.TextView}>Comments: {item.comment}</Text>

                {/* </View> */}
                <View style={styles.flatbutton}>
                  <TouchableOpacity
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
    marginTop: -7,
  },
  flatbutton2: {
    marginTop: -37,
    display: 'flex',
    borderRadius: 10,
    width: 45,
    height: 38,
    // elevation: 2,
    shadowColor: '#000',
    //shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    //shadowRadius: 3.5,
  },
  flatlistview: {
    // justifyContent: 'space-between',
    margin: 4,
    height: 350,
    //flexDirection: 'row',
    borderWidth: 13,
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
    marginLeft: 13,
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
    marginRight: 1,
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
  reportImg: {
    height: 45,
    width: 45,
    marginTop: 3,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -39,
    marginLeft: 100,
    padding: 0,
  },
  TitleView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 70,
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

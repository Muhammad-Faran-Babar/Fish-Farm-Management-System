import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
//import {Icon} from 'react-native-vector-icons/FontAwesome';
import BottomMenu2 from '../../components/BottomMenu2/BottomMenu2';
const App = props => {
  const [state, setState] = useState({options: ''});
  const setOptions = option => {
    if (option !== 'disabled') {
      setState({options: 'disabled'});
    }
    if (option == 'electricity') {
      props.navigation.navigate('ElectricityCost');
      // } else if (option == 'feedexpense') {
      //   props.navigation.navigate('FeedCost');
      // }
    } else if (option == 'mexpense') {
      props.navigation.navigate('MaintainceCost');
    } else if (option == 'capinvestment') {
      props.navigation.navigate('CapitalInvestment');
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={styles.item}></Image>
        <Text style={styles.title}>Expense Details </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              props.navigation.navigate('Home');
              //Alert.alert('submit buton pressed', 'form submited');
            }}>
            {/* <Icon name="chevron-left" size={30} color={'#fff'} /> */}
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
          <Picker.Item label="Electricity Expenses" value="electricity" />
          {/* <Picker.Item label="Feed Expenses" value="feedexpense" /> */}
          <Picker.Item label="Maintanence Expenses" value="mexpense" />
          <Picker.Item label="Capital Investment" value="capinvestment" />
        </Picker>
      </View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
        }}>
        Select category of Expense Reports
      </Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('ElectricityData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Electricity Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FeedExpenseData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Feed Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('MaintainceData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Maintaince Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('MedicineExpenseData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Medicine Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row5}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FishSellingRecord');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fish Selling Record</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row6}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('CapitalInvestmentData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Capital Investment Record</Text>
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

export default App;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: 'center',
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -45,
    marginLeft: 90,
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
  smallButtonText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 16,
  },
  button: {
    marginLeft: 290,
    marginTop: -45,

    //marginBottom: 10,
    maxWidth: 90,
  },
  imgStyle: {
    marginLeft: 10,
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
    justifyContent: 'space-evenly',

    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row4: {
    //flexDirection: 'row',
    marginLeft: 70,
    marginRight: 30,
    justifyContent: 'space-evenly',

    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row5: {
    //flexDirection: 'row',
    marginLeft: 45,
    marginRight: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row6: {
    //flexDirection: 'row',
    //marginLeft: 35,
    marginRight: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
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
});

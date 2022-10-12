import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import BottomMenu2 from '../../components/BottomMenu2/BottomMenu2';

const App = props => {
  const [state, setState] = useState({options: ''});
  const setOptions = option => {
    if (option !== 'disabled') {
      setState({options: 'disabled'});
    }
    if (option == 'growthdetail') {
      props.navigation.navigate('GrowthRecord');
    } else if (option == 'deathdetail') {
      props.navigation.navigate('DeathRecord');
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={styles.item}></Image>
        <Text style={styles.title}>Growth Details </Text>
        <View style={styles.button}>
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
          <Picker.Item label="Enter Fish Growth Detail" value="growthdetail" />
          <Picker.Item
            label="Enter Fish Death/Disease detail"
            value="deathdetail"
          />
        </Picker>
      </View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
        }}>
        Select category of Fish Growth/Death Reports
      </Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('GrowthRecordData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fish Growth Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('DeathRecordData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fish Death Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FishGrowthSummery');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Fish Growth Summery</Text>
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
    //textAlign: 'center',
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
    //marginRight: 30,
    marginLeft: 70,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  row3: {
    //flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 30,
    marginLeft: 40,
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

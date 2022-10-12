import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import AboutBottomMenu from '../../components/AboutBottomMenu/AboutBottomMenu';

class App extends Component {
  state = {gender: ''};
  showGender = option => {
    //if (option !=='disabled'){
    if (option !== 'disabled') {
      //alert(option);
      this.setState({gender: option});
    }
    if (option == 'feedstock') {
      this.props.navigation.navigate('FeedStock');
    } else if (option == 'fishstock') {
      this.props.navigation.navigate('FishStock');
    } else if (option == 'medstock') {
      this.props.navigation.navigate('MedicineStock');
    }

    //}
  };
  render() {
    return (
      <>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logo2.png')}
            style={styles.item}></Image>

          <Text style={styles.title}>About Us</Text>
          <View style={styles.button}>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => {
                this.props.navigation.navigate('Home');
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
        <Text style={styles.TextStyle}>
          Mobile Enabled Farm Management Software Application for Fish Farms
        </Text>
        <Text style={styles.TextStyle2}>
          Having a tough time maintaining your fish farm? Looking for the right
          assistance? With our state-of-the-art Fish Farm Maintenance Management
          Software. We bring you the assistance you need to manage your farm
          with perfection and enhance the productivity. Along with a reduction
          in maintenance costs! Get rid of the stressful and time-consuming
          paper-based processes and automate your system with the best farm
          management software in the market.
        </Text>
        <View style={styles.menuStyle}>
          <View style={styles.lineStyle}></View>
          <AboutBottomMenu />
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
  }
}

export default App;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  TextStyle: {
    marginTop: 19,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#4d4d4d',
  },
  TextStyle2: {
    textAlign: 'left',
    fontSize: 17,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    marginLeft: 15,
    lineHeight: 35,
    fontFamily: 'JosefinSans_400Regular',
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
    marginLeft: 22,
    marginRight: 3,
    marginTop: 7,
    height: 26,
    width: 26,
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
    backgroundColor: '#4d4d4d',
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
    marginBottom: 20,
    //borderWidth: 1,
    // borderColor: 'grey',
  },
  menuStyle: {
    marginTop: 62,
    backgroundColor: '#4d4d4d',
    height: 65,
  },
});

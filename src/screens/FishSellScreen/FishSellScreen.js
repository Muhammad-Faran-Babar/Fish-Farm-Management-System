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
import BottomMenu2 from '../../components/BottomMenu2/BottomMenu2';
import Carousel from 'react-native-snap-carousel';
import {windowWidth} from '../../utils/Dimensions';
import {sliderData} from '../../model/data';
import BannerSlider from '../../components/BannerSlider';
const App = props => {
  const [state, setState] = useState({options: ''});
  const [stockData, setStockData] = useState([]);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };
  // const setOptions = option => {
  //   if (option !== 'disabled') {
  //     setState({options: option});
  //   }
  //   if (option == 'feedstock') {
  //     props.navigation.navigate('FeedStock');
  //   } else if (option == 'fishstock') {
  //     props.navigation.navigate('FishStock');
  //   } else if (option == 'medstock') {
  //     props.navigation.navigate('MedicineStock');
  //   }
  // };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={styles.item}></Image>

        <Text style={styles.title}>Enter Details </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <Image
              style={styles.imgStyle}
              source={require('../../../assets/images/backicon2.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={10 - windowWidth - 10}
          itemWidth={300}
          loop={true}
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.item2}
          onPress={() => {
            props.navigation.navigate('FishSelling');
          }}>
          <Image
            style={styles.sliderimage}
            source={require('../../../assets/images/fishlogo3.png')}
          />
          <Text style={styles.slidertext}>Enter Fish Selling Form</Text>
          {/* <View style={styles.fishView}></View> */}
          <Image
            style={styles.sliderimage2}
            source={require('../../../assets/images/back.png')}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.row}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('FishSelling');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/fishlogo3.png')}
            />
            <Text style={styles.slidertext}>Fish Selling Summary</Text>
            {/* <View style={styles.fishView}></View> */}
      {/* <Image
              style={styles.sliderimage2}
              source={require('../../../assets/images/back.png')}
            />
          </TouchableOpacity>
        </View> */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.item4}
            onPress={() => {
              props.navigation.navigate('FishSellingData');
            }}>
            <Image
              style={styles.sliderimage4}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext4}>Selling Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity
            style={styles.item4}
            onPress={() => {
              props.navigation.navigate('FishSalesSummery');
            }}>
            <Image
              style={styles.sliderimage4}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext4}>Fish Sales Summery</Text>
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
  row4: {
    //flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 35,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  sliderimage4: {
    height: 125,
    width: 120,
    //marginBottom: 20,
    marginLeft: 10,
    marginTop: -10,
    alignSelf: 'center',
  },
  slidertext4: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  item4: {
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
    margin: 0,
  },
  item: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  imgStyle: {
    marginLeft: 16,
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
    flexDirection: 'row',
    //justifyContent: 'space-evenly',
    marginLeft: -5,

    paddingHorizontal: 0,
    marginTop: 20,
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
    marginLeft: 5,
    marginRight: 35,
    justifyContent: 'space-evenly',

    paddingHorizontal: 20,
    marginTop: 20,
    height: 190,
    width: 290,
  },
  sliderimage: {
    height: 85,
    width: 40,
    //marginBottom: 20,
    marginLeft: 20,
    marginTop: -15,
    //alignSelf: 'center',
  },
  sliderimage2: {
    height: 35,
    width: 35,
    //marginBottom: 20,
    marginLeft: 30,
    marginTop: 8,
    //alignSelf: 'center',
  },
  slidertext: {
    marginTop: 15,
    fontSize: 16,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  item2: {
    flex: 1,
    height: 100,
    paddingVertical: 10,
    borderColor: '#828282',
    borderWidth: 13,
    borderRadius: 35,
    //alignItems: 'center',
    flexDirection: 'row',
    //justifyContent: 'space-around',
    marginHorizontal: 15,
    //backgroundColor: '#727272',
  },
  smallButton2: {
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
  button2: {
    marginLeft: 240,
    marginTop: 0,
    alignSelf: 'center',
    marginBottom: 10,
    //maxWidth: 90,
    marginRight: 10,
  },
  fishView: {
    borderWidth: 2,
    maxWidth: 90,
    height: 40,
    marginRight: 10,
    marginBottom: 18,
    justifyContent: 'center',
    marginLeft: 210,
    borderRadius: 20,
    borderWidth: 3,
  },
});

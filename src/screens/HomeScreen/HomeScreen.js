import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../../styles';
import Menu from '../../components/BottomMenu/Menu';
import FishSelling from '../FishSellScreen/FishSelling';
const Stock = require('../../../assets/images/stock2.png');
const Pond = require('../../../assets/images/pond4.png');
const Growth = require('../../../assets/images/growth4.png');
const Expense = require('../../../assets/images/expense2.png');
const Employee = require('../../../assets/images/emp2.png');
const Fish = require('../../../assets/images/selling3.png');

export default function PagesScreen() {
  const navigation = useNavigation();
  const onStockModule = () => {
    navigation.navigate('StockModule');
  };
  const onPondModule = () => {
    navigation.navigate('PondModule');
  };
  const onGrowthModule = () => {
    navigation.navigate('GrowthModule');
  };
  const onExpenseModule = () => {
    navigation.navigate('ExpenseModule');
  };
  const onEmployeeModule = () => {
    navigation.navigate('EmployeeScreen');
  };
  const onFishSellScreen = () => {
    navigation.navigate('FishSellScreen');
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={styles.item2}></Image>

        <Text style={styles.title}>Fish Farm </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity onPress={onStockModule} style={styles.item}>
            <Image
              resizeMode="contain"
              source={Stock}
              style={styles.itemImage}
            />

            <Text style={{marginTop: 50, fontWeight: 'bold'}}>
              Manage Stock
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity onPress={onPondModule} style={styles.item}>
            <Image
              resizeMode="contain"
              source={Pond}
              style={{
                marginLeft: 10,
                marginTop: -3,
                height: 120,
                width: 120,
              }}
            />
            <Text style={{marginTop: 30, fontWeight: 'bold'}}>
              Manage Fish Ponds
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={onGrowthModule} style={styles.item}>
            <Image
              resizeMode="contain"
              source={Growth}
              style={{
                marginLeft: -10,
                marginTop: -15,
                height: 125,
                width: 125,
              }}
            />

            <Text style={{marginTop: 40, fontWeight: 'bold'}}>
              Manage Fish Growth
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity onPress={onExpenseModule} style={styles.item}>
            <Image
              resizeMode="contain"
              source={Expense}
              style={{
                marginLeft: 13,
                height: 110,
                width: 100,
              }}
            />
            <Text style={{marginTop: 45, fontWeight: 'bold'}}>
              Manage Expense
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={onEmployeeModule} style={styles.item}>
            <Image
              resizeMode="contain"
              source={Employee}
              style={{
                marginLeft: 5,
                marginTop: -30,
                height: 165,
                width: 165,
              }}
            />
            <Text style={{marginTop: 15, fontWeight: 'bold'}}>
              Manage Employee
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity onPress={onFishSellScreen} style={styles.item}>
            <Image
              resizeMode="contain"
              source={Fish}
              style={{
                marginTop: -5,
                marginLeft: 5,
                height: 110,
                width: 100,
              }}
            />
            <Text style={{marginTop: 50, fontWeight: 'bold'}}>
              Fish Selling
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    //flexDirection: 'row',
    marginLeft: -5,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    marginTop: 10,
    height: 180,
    width: 220,
  },
  row2: {
    marginLeft: 155,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    marginTop: -180,
    height: 180,
    width: 220,
  },
  row3: {
    marginLeft: 155,
    justifyContent: 'space-evenly',
    margin: -5,
    paddingHorizontal: 20,
    marginTop: -180,
    height: 180,
    width: 220,
  },
  item: {
    //flex: 1,
    paddingVertical: 30,
    borderColor: '#828282',
    borderWidth: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    //backgroundColor: '#808080',
  },

  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',

    marginTop: -45,
    textAlign: 'center',
    padding: 0,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#363636',
  },
  item2: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 10,
  },

  lineStyle: {
    marginBottom: 10,
    //borderWidth: 1,
    // borderColor: 'grey',
  },
  menuStyle: {
    backgroundColor: '#363636',
    height: 55,
    marginTop: 0,
  },
});

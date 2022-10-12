import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import {AuthContext} from '../../navigation/authProvider';

const Menu = () => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => logout()}>
        <Image
          style={styles.imgStyle}
          source={require('../../../assets/images/logout.png')}
        />
        <Text style={styles.textStyle}>logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('FeedCalculator')}>
        <Image
          style={styles.imgStyle}
          source={require('../../../assets/images/calculatoricon.png')}
        />
        <Text style={styles.textStyle2}>For Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('AboutUs')}>
        <Image
          style={styles.imgStyle}
          source={require('../../../assets/images/aboutus.png')}
        />
        <Text style={styles.textStyle3}>about us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',

    //backgroundColor: '#4d4d4d',
  },
  textStyle: {
    marginTop: -2,
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textStyle2: {
    marginTop: -2,
    marginLeft: -3,
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textStyle3: {
    marginTop: -2,
    marginLeft: -4,
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  imgStyle: {
    //marginLeft: 10,
    //marginRight: 3,
    marginTop: -5,
    height: 35,
    width: 35,
    //aspectRatio: 1,
  },
  //   iconStytle: {
  //     width: "100%",
  //     height: 50,
  //     aspectRatio: 1,
  //   },
});

export default Menu;

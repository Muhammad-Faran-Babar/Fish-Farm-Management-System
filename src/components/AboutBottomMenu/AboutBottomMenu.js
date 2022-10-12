import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import {AuthContext} from '../../navigation/authProvider';

const Menu = () => {
  const {logout} = useContext(AuthContext);
  const navigation = useNavigation();
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
        onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.imgStyle2}
          source={require('../../../assets/images/homeicon.png')}
        />
        <Text style={styles.textStyle2}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    // backgroundColor: '#4d4d4d',
  },
  textStyle: {
    marginTop: -2,
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textStyle2: {
    marginTop: -3,
    marginLeft: 4,
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textStyle3: {
    marginTop: -2,
    marginLeft: -10,
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  imgStyle: {
    //marginLeft: 10,
    //marginRight: 3,
    marginTop: -15,
    height: 40,
    width: 40,
    //aspectRatio: 1,
  },
  imgStyle2: {
    //marginLeft: 10,
    //marginRight: 3,
    marginTop: -15,
    height: 43,
    width: 43,
    //aspectRatio: 1,
  },
  //   iconStytle: {
  //     width: "100%",
  //     height: 50,
  //     aspectRatio: 1,
  //   },
});

export default Menu;

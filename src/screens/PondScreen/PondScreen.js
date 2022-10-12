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
    if (option == 'pondcondition') {
      props.navigation.navigate('PondCondForm');
    } else if (option == 'pondlocation') {
      props.navigation.navigate('AddNewPond');
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          style={styles.item}></Image>
        <Text style={styles.title}>Pond Details </Text>
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
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Select the category of form </Text>
        <Picker onValueChange={setOptions} selectedValue={state.options}>
          <Picker.Item label="Please select" value="disabled" color="#aaa" />
          <Picker.Item label="Pond Condition" value="pondcondition" />
          <Picker.Item label="Add New Pond Loaction" value="pondlocation" />
        </Picker>
      </View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
        }}>
        Select category of Fish Pond Reports
      </Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('PondCondtionData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>Pond Condition Reports</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.item2}
            onPress={() => {
              props.navigation.navigate('NewPondData');
            }}>
            <Image
              style={styles.sliderimage}
              source={require('../../../assets/images/reporticon4.png')}
            />
            <Text style={styles.slidertext}>New Pond Reports</Text>
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

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import DatePicker from 'react-native-datepicker';

// import { BorderlessButton } from 'react-native-gesture-handler';
// //import {View, Text, TextInput, StyleSheet} from 'react-native';

// const App = () =>

// {
//   //const [checked, setchecked] = useState(false);
//     const[date,setDate]=useState(' ');

//   return (
//       <><View style={styles.header}>
//       <Image
//         source={require('../../../assets/images/logo2.png')}
//         style={styles.item}></Image>

//       <Text style={styles.title}>Enter Details </Text>

//     </View>
//     <ScrollView showsVerticalScrollIndicator={false}>
//     <Text style={styles.text5} > Pond Condition </Text>

//        <View style={ styles.title2}>
//        <Text style={styles.text}>Date:</Text>
//             <DatePicker
//         style={{width: 200}}
//         //date={this.state.date}
//         mode="date"
//         marginTop="30"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         minDate="2016-05-01"
//         maxDate="2016-06-01"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 2,
//             marginLeft: 200,
//           },
//           dateInput: {
//             marginLeft: 110
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         //onDateChange={(date) => {this.setState({date: date})}}
//       />
//       </View>
//             <View style={ styles.title2}>

//               <Text style={styles.text}>Manager ID:</Text>

//               <TextInput style={styles.textinput}>

//               </TextInput>

//             </View>

//             <View style={ styles.title2}>

// <Text style={styles.text}>Enter Pond Unit ID :</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>

// <View style={ styles.title2}>
// <Text style={styles.text}>Enter Pond Temprature:</Text>

// <TextInput placeholder="Celsius" style={styles.textinput}>

// </TextInput>

// </View>
// <View style={ styles.title2}>

// <Text style={styles.text}>Enter ph of Pond:</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>
//             <View style={ styles.title2}>

// <Text style={styles.text}>Enter Total Number Of Fish Available</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>

// <View style={styles.button}>
// <TouchableOpacity
// style={styles.smallButton}
// onPress={()=> {
// Alert.alert(
//   'submit buton pressed',
//   'form submited'
// );

// }}>
//   <Text
//   style={styles.smallButtonText}>
//     Submit
//   </Text>
// </TouchableOpacity>
// </View>
// <Text style={styles.text5} > Add New Pond Unit  </Text>

// <View style={ styles.title2}>
// <Text style={styles.text}>Date:</Text>
//      <DatePicker
//  style={{width: 200}}
//  //date={this.state.date}
//  mode="date"
//  marginTop="30"
//  placeholder="select date"
//  format="YYYY-MM-DD"
//  minDate="2016-05-01"
//  maxDate="2016-06-01"
//  confirmBtnText="Confirm"
//  cancelBtnText="Cancel"
//  customStyles={{
//    dateIcon: {
//      position: 'absolute',
//      left: 0,
//      top: 2,
//      marginLeft: 200,
//    },
//    dateInput: {
//      marginLeft: 110
//    }
//    // ... You can check the source to find the other keys.
//  }}
//  //onDateChange={(date) => {this.setState({date: date})}}
// />
// </View>
//      <View style={ styles.title2}>

//        <Text style={styles.text}>Manager ID:</Text>

//        <TextInput style={styles.textinput}>

//        </TextInput>

//      </View>

//      <View style={ styles.title2}>

// <Text style={styles.text}>Enter New Pond Unit ID:</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>

// <View style={ styles.title2}>
// <Text style={styles.text}>Enter Pond Location:</Text>

// <TextInput  style={styles.textinput}>

// </TextInput>

// </View>
// <View style={ styles.title2}>

// <Text style={styles.text}>Enter Requirment For New Pond:</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>
//      <View style={ styles.title2}>

// <Text style={styles.text}>Enter Previous Number Of Pond</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>
// <View style={ styles.title2}>

// <Text style={styles.text}>Enter New Number Of Pond</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>
// <View style={ styles.title2}>

// <Text style={styles.text}>Maximum Occupancy Of New Pond</Text>

// <TextInput style={styles.textinput}>

// </TextInput>

// </View>

// <View style={styles.button}>
// <TouchableOpacity
// style={styles.smallButton}
// onPress={()=> {
// Alert.alert(
// 'submit buton pressed',
// 'form submited'
// );

// }}>
// <Text
// style={styles.smallButtonText}>
// Submit
// </Text>
// </TouchableOpacity>
// </View>

// </ScrollView></>
//  );
// };

// const styles = StyleSheet.create({
//   smallButton:{
//     backgroundColor:'#05c46b',
//     paddingVertical: 10,
//     paddingHorizontal:20,
//     elevation:2,
//     shadowColor:'#000',
//     shadowOffset:{width:2,
//     height:2},
//     shadowOpacity:0.25,
//     shadowRadius:3.5,

//   },
//   smallButtonText:{
//     color:'#fff',
//     fontWeight:'100',
//     fontSize:16,

//   },
//   title: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#fff',

//         marginTop: -45,
//         textAlign:'center',
//         padding: 0,
//         },

//         title2:{
//         display:'flex',
//         flexDirection:'column',
//        // alignItems:'stretch',

//         },
//         title3:{
//           display:'flex',
//           alignItems:'center',
//         },
//         text3:{
//           //fontStyle: 'bold',
//           fontSize: 18,
//         },
//         text4:{
//           fontSize: 9,
//           fontStyle:'italic',
//           marginLeft:5,

//         },

//         textinput:{
//         flex:1,
//         height:34,
//         backgroundColor:'#fffafa',
//         marginLeft:5,
//         marginTop:10,
//         borderRadius:8,
//         paddingHorizontal:100,
//         maxWidth:330,

//         },
//         textinput2: {
//           flex:1,
//           height:44,
//           backgroundColor:'#fffafa',
//           marginLeft:10,
//           marginTop:10,
//           borderRadius:8,
//           paddingHorizontal:10,
//           maxWidth:200,

//         },
//         text:{
//         fontSize: 14,
//         fontWeight: "400",
//         marginLeft:5,
//         },
//         text5:{
//           fontSize: 22,
//           fontWeight: "100",
//           marginLeft:85,

//         },
//         button:{
//           marginLeft:250,
//           marginTop:9,
//           marginBottom:10,
//           maxWidth:90,

//         },
//         header: {
//         width: '100%',
//         height: 70,
//         backgroundColor: '#4d4d4d'

//         },
//         item: {
//         height: 50,
//         width: 50 ,
//         marginLeft: 10,
//         marginTop:10,
//         },
//         });

// export default App;

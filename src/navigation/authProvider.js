import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestoe from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            debugger;
            let data = await auth().signInWithEmailAndPassword(email, password);
            debugger;
            if (data.user) {
              debugger;
              console.log(data.user.email);
            }
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, userType, userName) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user => {
                if (user.additionalUserInfo.isNewUser) {
                  let userdata = {
                    name: userName,
                    DisplayPhoto: user.user.photoURL,
                    email: user.user.email,
                    userType: userType,
                    uid: user.user.uid,
                  };
                  firestoe()
                    .collection('Users')
                    .doc(user.user.uid)
                    .set(userdata)
                    .then(response => {
                      Alert.alert(
                        'Create user',
                        'you have registerd successfully',
                        [
                          {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                          },
                        ],
                      );
                    })
                    .catch(error => {
                      Alert.alert('Error', 'Error Message' + e, [
                        {
                          text: 'Try again',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ]);
                    });
                }
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

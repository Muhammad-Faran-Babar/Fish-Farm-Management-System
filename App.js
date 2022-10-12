import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import {AuthProvider} from './src/navigation/authProvider';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
export default App;

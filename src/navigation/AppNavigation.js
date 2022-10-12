import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import StockModule from '../screens/StockModule';
import PondScreen from '../screens/PondScreen';
import GrowthScreen from '../screens/GrowthScreen';
import ExpenseScreen from '../screens/ExpenseScreen';
import FeedStock from '../screens/StockModule/FeedStock';
import MedicineStock from '../screens/StockModule/MedicineStock';
import FishStock from '../screens/StockModule/FishStock';
import ElectricityForm from '../screens/ExpenseScreen/ElectricityForm';
import MaintainceExpense from '../screens/ExpenseScreen/MaintainceExpense';
// import FeedExpense from '../screens/ExpenseScreen/FeedExpense';
// import MedicineExpense from '../screens/ExpenseScreen/MedicineExpense';
//import SalaryExpense from '../screens/ExpenseScreen/SalaryExpense';
import PondCondition from '../screens/PondScreen/PondCondition';
import NewPondUnit from '../screens/PondScreen/NewPondUnit';
import GrowthRecordScreen from '../screens/GrowthScreen/GrowthRecordScreen';
import DeathRecordScreen from '../screens/GrowthScreen/DeathRecordScreen';
import FeedCalculator from '../screens/FeedCalulator/FeedCalculator';
import FeedData from '../screens/StockModule/FeedData';
import FishStockData from '../screens/StockModule/FishStockData';
import About from '../screens/About/About';
import MedicineStockData from '../screens/StockModule/MedicineStockData';
import PondconditionData from '../screens/PondScreen/PondConditionData';
import NewPondData from '../screens/PondScreen/NewPondData';
import GrowthRecordData from '../screens/GrowthScreen/GrowthRecordData';
import DeathRecordData from '../screens/GrowthScreen/DeathRecordData';
import ElectricityData from '../screens/ExpenseScreen/ElectricityData';
import FeedExpenseData from '../screens/ExpenseScreen/FeedExpenseData';
import MaintainceData from '../screens/ExpenseScreen/MaintainceData';
import MedicineExpenseData from '../screens/ExpenseScreen/MedicineExpenseData';
//import SalaryExpenseData from '../screens/ExpenseScreen/SalaryExpenseData';
import EmployeeScreen from '../screens/EmployeeScreen';
import EmployeeAddition from '../screens/EmployeeScreen/EmployeeAddition';
import EmployeeAdditionData from '../screens/EmployeeScreen/EmployeeAdditionData';
import EmployeeSalary from '../screens/EmployeeScreen/EmployeeSalary';
import EmployeeSalaryData from '../screens/EmployeeScreen/EmployeeSalaryData';
import {AuthContext, AuthProvider} from './authProvider';
import FishSellScreen from '../screens/FishSellScreen';
import FishSelling from '../screens/FishSellScreen/FishSelling';
import FishSellingRecord from '../screens/ExpenseScreen/FishSellingRecord';
import FertilizerStock from '../screens/StockModule/FertilizerStock';
import FertilizerStockData from '../screens/StockModule/FertilizerStockData';
import DailyFeedCalculator from '../screens/StockModule/DailyFeedStock';
import DailyFeedStock from '../screens/StockModule/DailyFeedStock';
import DailyFeedStockData from '../screens/StockModule/DailyFeedStockData';
import FishSellingData from '../screens/FishSellScreen/FishSellingData';
import CapitalInvestment from '../screens/ExpenseScreen/CapitalInvestment';
import CapitalInvestmentData from '../screens/ExpenseScreen/CapitalInvestmentData';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import FishSalesSummery from '../screens/FishSellScreen/FishSalesSummery';
import FishStockSummery from '../screens/StockModule/FishStockSummery';
import MedicineStockSummery from '../screens/StockModule/MedicineStockSummery';
import FishGrowthSummery from '../screens/GrowthScreen/FishGrowthSummery';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Loader = ({route}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator size="large" color="blue" />
  </View>
);
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [userType, setUserType] = useState('');
  async function onAuthStateChanged(User) {
    if (initializing) setInitializing(false);
    setLoading(false);
    setUser(User);
    if (User != null) {
      setLoading(true);
      let useDocref = await firestore().collection('Users').doc(User.uid).get();
      setUserType(useDocref.data().userType);
      setLoading(false);
    } else {
      setUser('');
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {loading ? (
          <Stack.Screen name="loader" component={Loader} />
        ) : (
          <>
            {!user ? (
              <>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen
                  name="ConfirmEmail"
                  component={ConfirmEmailScreen}
                />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPasswordScreen}
                />
                <Stack.Screen
                  name="NewPassword"
                  component={NewPasswordScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="StockModule" component={StockModule} />
                <Stack.Screen name="PondModule" component={PondScreen} />
                <Stack.Screen name="GrowthModule" component={GrowthScreen} />
                <Stack.Screen name="ExpenseModule" component={ExpenseScreen} />
                <Stack.Screen name="FeedStock" component={FeedStock} />
                <Stack.Screen name="FishStock" component={FishStock} />
                <Stack.Screen name="MedicineStock" component={MedicineStock} />

                <Stack.Screen
                  name="ElectricityCost"
                  component={ElectricityForm}
                />
                {/* <Stack.Screen name="FeedCost" component={FeedExpense} /> */}
                {/* <Stack.Screen name="MedicineCost" component={MedicineExpense} /> */}
                {/* <Stack.Screen name="SalaryCost" component={SalaryExpense} /> */}
                <Stack.Screen
                  name="MaintainceCost"
                  component={MaintainceExpense}
                />
                <Stack.Screen name="PondCondForm" component={PondCondition} />
                <Stack.Screen name="AddNewPond" component={NewPondUnit} />
                <Stack.Screen
                  name="GrowthRecord"
                  component={GrowthRecordScreen}
                />
                <Stack.Screen
                  name="DeathRecord"
                  component={DeathRecordScreen}
                />

                <Stack.Screen name="FeedData" component={FeedData} />
                <Stack.Screen name="FishStockData" component={FishStockData} />

                <Stack.Screen
                  name="MedicineStockData"
                  component={MedicineStockData}
                />
                <Stack.Screen
                  name="PondCondtionData"
                  component={PondconditionData}
                />
                <Stack.Screen name="NewPondData" component={NewPondData} />
                <Stack.Screen
                  name="GrowthRecordData"
                  component={GrowthRecordData}
                />
                <Stack.Screen
                  name="DeathRecordData"
                  component={DeathRecordData}
                />
                <Stack.Screen
                  name="ElectricityData"
                  component={ElectricityData}
                />
                <Stack.Screen
                  name="FeedExpenseData"
                  component={FeedExpenseData}
                />
                <Stack.Screen
                  name="MaintainceData"
                  component={MaintainceData}
                />

                {/* <Stack.Screen name="SalaryExpenseData" component={SalaryExpenseData} /> */}
                <Stack.Screen
                  name="MedicineExpenseData"
                  component={MedicineExpenseData}
                />
                <Stack.Screen
                  name="EmployeeScreen"
                  component={EmployeeScreen}
                />
                <Stack.Screen
                  name="EmployeeAddition"
                  component={EmployeeAddition}
                />
                <Stack.Screen
                  name="EmployeeAdditionData"
                  component={EmployeeAdditionData}
                />
                <Stack.Screen
                  name="EmployeeSalary"
                  component={EmployeeSalary}
                />
                <Stack.Screen
                  name="EmployeeSalaryData"
                  component={EmployeeSalaryData}
                />
                <Stack.Screen
                  name="FishSellingRecord"
                  component={FishSellingRecord}
                />
                <Stack.Screen
                  name="FishSellingData"
                  component={FishSellingData}
                />
                <Stack.Screen name="AboutUs" component={About} />
                <Stack.Screen
                  name="FeedCalculator"
                  component={FeedCalculator}
                />
                <Stack.Screen
                  name="FishSellScreen"
                  component={FishSellScreen}
                />
                <Stack.Screen name="FishSelling" component={FishSelling} />
                <Stack.Screen
                  name="FertilizerStock"
                  component={FertilizerStock}
                />
                <Stack.Screen
                  name="CapitalInvestment"
                  component={CapitalInvestment}
                />
                <Stack.Screen
                  name="CapitalInvestmentData"
                  component={CapitalInvestmentData}
                />

                <Stack.Screen
                  name="FertilizerStockData"
                  component={FertilizerStockData}
                />
                <Stack.Screen
                  name="DailyFeedStock"
                  component={DailyFeedStock}
                />
                <Stack.Screen
                  name="DailyFeedStockData"
                  component={DailyFeedStockData}
                />
                <Stack.Screen
                  name="FishSalesSummery"
                  component={FishSalesSummery}
                />
                <Stack.Screen
                  name="FishStockSummery"
                  component={FishStockSummery}
                />
                <Stack.Screen
                  name="MedicineStockSummery"
                  component={MedicineStockSummery}
                />
                <Stack.Screen
                  name="FishGrowthSummery"
                  component={FishGrowthSummery}
                />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

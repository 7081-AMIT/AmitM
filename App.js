// import {
//   StyleSheet,
//   Dimensions,
//   Text,
//   TextInput,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// //import {Dropdown} from 'react-native-material-dropdown';

// const {height, width} = Dimensions.get('window');

// const Signup = props => {

//   return (
//     <SafeAreaView>
//     <ScrollView>
//       <View style={styles.maincontainer}>
//       <Text>Amit</Text>
       
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Signup;

// const styles = StyleSheet.create({
//   maincontainer: {
//     height: height * 1,
//     width: width * 1,
//     backgroundColor:'red',
//   },
//   arrowcontainer: {
//     height: height * 0.13,
//     width: width * 0.85,
//     // backgroundColor:'cyan',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   arrow: {
//     height: height * 0.06,
//     width: width * 0.12,
//     backgroundColor: 'cyan',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 17,
//   },
//   signup: {
//     height: height * 0.09,
//     width: width * 0.85,
//     // backgroundColor:'cyan',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   inputcontainer: {
//     height: height * 0.067,
//     width: width * 0.85,
//     backgroundColor: '#e3e3e3',
//     justifyContent: 'center',
//     padding: 5,
//     alignSelf: 'center',
//     borderRadius: 14,
//   },
//   con: {
//     height: height * 0.1,
//     width: width * 0.85,
//     // backgroundColor:'cyan'
//   },
//   ttcontainer: {
//     height: height * 0.5,
//     width: width * 0.85,
//     alignSelf: 'center',
//     // justifyContent:'space-between',
//     // backgroundColor:'green'
//   },
//   pickercontainer: {
//     height: height * 0.067,
//     width: width * 0.85,
//     backgroundColor: '#e3e3e3',
//     justifyContent: 'flex-end',
//     padding: 5,
//     alignSelf: 'center',
//     borderRadius: 14,
//   },
//   btncontainer: {
//     height: height * 0.12,
//     width: width * 0.85,
//     // backgroundColor:'black',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   btn: {
//     height: height * 0.074,
//     width: width * 0.85,
//     backgroundColor: 'cyan',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 43,
//   },
//   lcontainer: {
//     height: height * 0.07,
//     width: width * 0.85,
//     // backgroundColor:'green',
//     alignSelf: 'center',
//     alignItems: 'flex-end',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   start: {
//     height: height * 0.05,
//     width: width * 0.37,
//     //   backgroundColor:'cyan',
//   },
//   end: {
//     height: height * 0.05,
//     width: width * 0.2,
//     //   backgroundColor:'red'
//   },
// });


import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import Ebull from './Src1/Screen/Ebull';
import LoginEmail from './Src1/Screen/LoginEmail';

import LoginPhone from './Src1/Screen/LoginPhone';
import Register from './Src1/Screen/Register';
import Account from './Src1/Screen/Account';
import Referal from './Src1/Screen/Referal';
import Personal from './Src1/Screen/Personal';
import Personalinfo from './Src1/Screen/Personalinfo';
import PersonalVer from './Src1/Screen/PersonalVer';
import Pver from './Src1/Screen/Pver';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        {/* <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen   name="Signup" component={SignupScreen} /> */}
      
       
 
        <Stack.Screen  name="Ebull" component={Ebull} options={{headerShown:false}} />
        <Stack.Screen  name="LoginEmail" component={LoginEmail} options={{headerShown:false}} />
        <Stack.Screen  name="LoginPhone" component={LoginPhone} options={{headerShown:false}} />
        <Stack.Screen  name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen  name="Account" component={Account} options={{headerShown:false}} />
        <Stack.Screen  name="Referal" component={Referal} options={{headerShown:false}} />
        <Stack.Screen  name="Personal" component={Personal} options={{headerShown:false}} />
        <Stack.Screen  name="Personalinfo" component={Personalinfo} options={{headerShown:false}} />
        <Stack.Screen  name="PersonalVer" component={PersonalVer} options={{headerShown:false}} />
        <Stack.Screen  name="Pver" component={Pver} options={{headerShown:false}} />
       
       
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
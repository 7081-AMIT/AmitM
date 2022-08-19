import {
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  onPress,
} from 'react-native';
import React, {useState} from 'react';
import Personalinfo from './Personalinfo';
//import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const PersonalVer = ({navigation}) => {
  const [pnumber, setPnumber] = useState('');
  const [errorPnumber, setErrorPnumber] = useState(null);
  const pnumberValidate = pnumber => {
    var Regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (pnumber === '' || pnumber === undefined || pnumber === null) {
      setErrorPnumber('please enter number');
    }
    if (!Regex.test(pnumber)) {
      setErrorPnumber('Enter valid phone number');
    } else {
      setErrorPnumber(null);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.txt1}>
              <Text style={styles.txt}>Phone Verfication</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.txt12}>
            <Text style={styles.txt11}>
              Please enter the 6-digit verification code{' '}
            </Text>
            <Text style={styles.txt11}>
              that was sent to +91-99366595085. The
            </Text>
            <Text style={styles.txt11}>code is valid for 3 minutes.</Text>
          </View>
          <View style={styles.ver1}>
            <Text style={styles.ver}>Phone Number Verification Code</Text>
          </View>
          <View style={styles.input}>
            <View style={styles.input1}>
              <TextInput
                placeholder="Enter Phone Number"
                placeholderTextColor={'#8E8E8E'}
                keyboardType="numeric"
                onChangeText={text => {
                  setPnumber(text), pnumberValidate(text);
                }}
                maxLength={15}
                fontSize={17}
                style={{color: 'white'}}></TextInput>
            </View>

            <View style={styles.input2}>
              <TouchableOpacity>
                <Text style={styles.code}>Get Code</Text>
              </TouchableOpacity>
            </View>
          </View>
          {errorPnumber !== null ? (
            <View
              style={{
                height: height * 0.02,
                width: width * 0.7,
                //backgroundColor: 'green',
                justifyContent: 'center',
                //alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  //textAlign: 'center',
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                {errorPnumber}
              </Text>
            </View>
          ) : null}
          <View>
            <Text style={styles.time}>03:00</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Pver')}>
            <View style={styles.btn}>
              <Text style={styles.btntxt}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalVer;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'black',
  },

  txt: {
    color: 'white',
    // textAlign:'center',
    fontSize: 30,
    fontWeight: '900',
  },
  container: {
    //backgroundColor:'red',
    height: height * 1,
    width: width / 1.1,
    alignSelf: 'center',
    marginTop: 70,
  },
  txt1: {
    // backgroundColor:'yellow',
    height: height * 0.06,
  },
  txt2: {
    //  backgroundColor:'yellow',
    height: height * 0.065,
  },
  txt11: {
    color: '#8E8E8E',
    fontSize: 17,
  },
  txt12: {
    backgroundColor: 'black',
    height: height * 0.17,
  },
  ver: {
    color: 'white',
    fontSize: 19,
  },
  ver1: {
    //backgroundColor:'green',
    height: height * 0.037,
  },
  input: {
    backgroundColor: '#1E1E1E',
    height: height * 0.068,
    width: width / 1.1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  input1: {
    backgroundColor: '#1E1E1E',
    height: height * 0.068,
    width: width * 0.6,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  input2: {
    backgroundColor: '#EAB73B',
    height: height * 0.032,
    width: width * 0.27,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  code: {
    textAlign: 'center',
    fontSize: 18,
  },
  time: {
    marginTop: 15,
    color: '#EAB73B',
    fontSize: 20,
    //fontWeight:'bold'
  },
  btn: {
    backgroundColor: '#EAB73B',
    height: height * 0.065,
    width: width / 1.1,
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 25,
  },
});

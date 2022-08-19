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
  // import Icon from 'react-native-vector-icons/Fontisto';
  import Ionicons from 'react-native-vector-icons/Fontisto';
  import {Avatar} from 'react-native-paper';
  
  //import {Dropdown} from 'react-native-material-dropdown';
  
  const {height, width} = Dimensions.get('window');
  
  const Referal = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true);


  const [passwordVisible, setPasswordVisible] = useState('false');
  const [isSelected, setSelection] = useState(false);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);


  const [pnumber, setPnumber] = useState('');
  const [errorPnumber, setErrorPnumber] = useState(null);


  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);


  const [cpassword, setCpassword] = useState('');
  const [ErrorCpassword, setErrorCpassword] = useState(null);

  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('please enter email');
    }
    if (!Regex.test(email)) {
      setErrorEmail('Please enter valid email ');
    } else {
      setErrorEmail(null);
    }
  };

  const pnumberValidate = pnumber => {
    var Regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (pnumber === '' || pnumber === undefined || pnumber === null) {
      setErrorPnumber('please enter number');
    }
    if (!Regex.test(pnumber)) {
      setErrorPnumber('Please enter valid phone number');
    } else {
      setErrorPnumber(null);
    }
  };

  const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorpassword('Please enter password');
    }
    if (!Regex.test(password)) {
      setErrorpassword('Please enter valid password');
    } else {
      setErrorpassword(null);
    }
  };
  const cpasswordValidate = cpassword=> {
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (cpassword === '' || cpassword === undefined || cpassword === null) {
      setErrorCpassword('please enter number');
    }
    if (!Regex.test(cpassword)) {
      setErrorCpassword('Please enter valid confirm password');
    } else {
      setErrorCpassword(null);
    }
  };

  

  const validate = () => {
    const flag = true;
    if (email === '') {
      setErrorEmail('Please enter email');
    }
    if (password === '') {
      setErrorpassword('Please enter password');
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('SignIn');
    } else {
      alert('Something went wrong');
    }
  };

    return (
      <SafeAreaView>
        <View style={styles.maincontainer}>
          <View style={styles.txt1}>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
            source={require('../Screen/Image/arro.jpeg')}
            style={styles.img}></Image>
            </TouchableOpacity>
            </View>
            <Text style={styles.txt2}>×</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txt}>Enter Account Details</Text>
          </View>
  
          <View style={styles.email}>
          <Text style={styles.etxt}>Email</Text>
          <View style={styles.einput}>
            <View style={styles.einput1}>
              <View>
              <TouchableOpacity>
              <Image
              source={require('../Screen/Image/sms1.jpeg')}
              style={styles.img}></Image>
              </TouchableOpacity>
              </View>

              <View
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  al: 'center',
                }}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 30}}>
                  |
                </Text>
              </View>

              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={'white'}
                keyboardType="email-address"
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                }}
                maxLength={30}
                style={styles.input}></TextInput>
            </View>
          </View>
        </View>
        {errorEmail !== null ? (
          <View
            style={{
              height: height * 0.02,
              width: width * 0.7,
              //backgroundColor: 'green',
              justifyContent: 'center',
              //alignSelf: 'center',
              marginLeft: 15,
            }}>
           
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                //textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {errorEmail}
            </Text>
          </View>
        ) : null}
  
        <View style={styles.email}>
        <Text style={styles.etxt}>Phone Number</Text>
        <View style={styles.einput}>
          <View style={styles.einput1}>
            <View>
              <Image
                source={require('../Screen/Image/ind.jpeg')}
                style={styles.img1}></Image>
            </View>

            <View
              style={{
                color: 'white',
                textAlign: 'center',
                justifyContent: 'center',
                al: 'center',
              }}>
              <Text
                style={{color: 'white', textAlign: 'center', fontSize: 30}}>
                |
              </Text>
            </View>

            <TextInput
              placeholder="Enter your number"
              placeholderTextColor={'white'}
              keyboardType="numeric"
              onChangeText={text => {
                setPnumber(text), pnumberValidate(text);
              }}
              maxLength={15}
              style={styles.input}></TextInput>
          </View>
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
            marginTop:5,
            marginLeft:15
          }}>
         
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              //textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {errorPnumber}
          </Text>
        </View>
      ) : null}
  
      <View style={styles.email}>
      <Text style={styles.etxt}>Password</Text>
      <View style={styles.einput}>
        <View style={styles.einput1}>
          <View>
            <Image
              source={require('../Screen/Image/lock1.jpeg')}
              style={styles.img}></Image>
          </View>
          <View
            style={{
              color: 'white',
              textAlign: 'center',
              justifyContent: 'center',
              al: 'center',
            }}>
            <Text
              style={{color: 'white', textAlign: 'center', fontSize: 30}}>
              |
            </Text>
          </View>

          <View style={styles.input1}>
            <TextInput
              placeholder=" Enter your password"
              placeholderTextColor={'white'}
              keyboardType="default"
              onChangeText={text => {
                setPassword(text), passwordValidate(text);
              }}
             
            
              maxLength={30}
              style={styles.input}></TextInput>
          </View>
          <View style={styles.eye}>
            <View>
              <Image
                source={require('../Screen/Image/loc.jpeg')}
                style={styles.img}></Image>
            </View>
          </View>
        </View>
        {Errorpassword !== null ? (
          <View
            style={{
              height: height * 0.02,
              width: width * 0.7,
              //backgroundColor: 'green',
              justifyContent: 'center',
              //alignSelf: 'center',
              marginTop:7
            }}>
    
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                //textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {Errorpassword}
            </Text>
          </View>
        ) : null}
        
      </View>
    </View>
  
          <View style={styles.email}>
            <Text style={styles.etxt}>Confirm Password</Text>
            <View style={styles.einput}>
              <View style={styles.einput1}>
                <View>
                  <Image
                    source={require('../Screen/Image/lock1.jpeg')}
                    style={styles.img}></Image>
                </View>
                <View
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    al: 'center',
                  }}>
                  <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 30}}>
                    |
                  </Text>
                </View>
  
                <View style={styles.input1}>
                  <TextInput
                    placeholder=" Enter your password"
                    placeholderTextColor={'white'}
                    keyboardType="default"
                    onChangeText={text => {
                      setCpassword(text), cpasswordValidate(text);
                    }}
                    maxLength={30}
                    style={styles.input}></TextInput>
                </View>
                <View style={styles.eye}>
                  <View>
                    <Image
                      source={require('../Screen/Image/loc.jpeg')}
                      style={styles.img}></Image>
                  </View>
                </View>
              </View>
              {ErrorCpassword !== null ? (
                <View
                  style={{
                    height: height * 0.02,
                    width: width * 0.7,
                    //backgroundColor: 'green',
                    justifyContent: 'center',
                    //alignSelf: 'center',
                    marginTop:5
                  }}>
                 
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 15,
                      //textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {ErrorCpassword}
                  </Text>
                </View>
              ) : null}
            
                <View style={styles.rem}>
                  <Text style={styles.remtxt}>Referral ID (Optional)</Text>
                  <Text style={styles.remtxt1}>▼</Text>
         
              </View>
              <View style={styles.einput}>
              <View style={styles.einput1}>
                
  
  
                <TextInput
                  placeholder=""
                  placeholderTextColor={'white'}
                  maxLength={30}
                  style={styles.input}></TextInput>
              </View>
            </View>
           
            
    
            </View>
          </View>
  
          <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
            <View style={styles.btn1}>
              <Text style={styles.btntxt}>Next</Text>
            </View>
          </TouchableOpacity>
          
          
        </View>
      </SafeAreaView>
    );
  };
  
  export default Referal;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height * 1,
      width: width * 1,
      backgroundColor: 'black',
      //  justifyContent:'center'
      //marginTop:90
    },
  
    txt: {
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '900',
    },
    txt1: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width / 1.02,
      alignSelf: 'center',
    },
    txt2: {
      fontSize: 30,
      color: 'white',
    },
    container: {
      marginTop: 30,
      width: width / 1.1,
    },
    container1: {
      // backgroundColor:'red',
      height: height * 0.06,
      width: width / 1.2,
      alignSelf: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      margin: 20,
    },
    container2: {
      backgroundColor: '#EAB73B',
      height: height * 0.05,
      width: width * 0.23,
      borderRadius: 10,
      justifyContent: 'center',
    },
    container3: {
      backgroundColor: 'black',
      height: height * 0.05,
      width: width * 0.35,
      borderRadius: 10,
      justifyContent: 'center',
    },
    txt3: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    txt4: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    email: {
      margin: 15,
    },
    etxt: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    einput: {
      backgroundColor: 'rgb(30,30,30)',
      borderRadius: 10,
      height: height * 0.07,
      // justifyContent:'center',
      marginTop: 8,
      borderWidth: 1,
      borderColor: 'grey',
    },
    einput1: {
      flexDirection: 'row',
      marginLeft: 10,
      margin: 9,
    },
    input: {
      color: 'white',
    },
    eye: {
      //backgroundColor:'red',
    },
    chek: {
      //  backgroundColor:'yellow',
      height: height * 0.03,
      width: width * 0.06,
      marginTop: 20,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'white',
    },
    btn: {
      flexDirection: 'row',
    },
    rem: {
      //justifyContent: 'center',
      marginTop: 20,
      marginLeft: 10,
      flexDirection:'row'
    },
    remtxt: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    remtxt1: {
      color: '#EAB73B',
      fontSize: 18,
      fontWeight: 'bold',
    },
    btn1: {
      backgroundColor: '#EAB73B',
      height: height * 0.06,
      width: width / 1.1,
      marginTop: 110,
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    btntxt: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    btntxt: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    btntxt1: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#EAB73B',
      marginTop: 40,
    },
    btntxt2: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 40,
      color: '#EAB73B',
      textDecorationLine: 'underline',
    },
    img: {
      height: height * 0.04,
      width: width * 0.055,
      borderRadius: 100,
      marginTop: 4,
      color: 'rgb(30,30,30)',
    },
    input1: {
      justifyContent: 'center',
      width: width * 0.75,
    },
    img1:{
      height:height*0.04,
      width:width*0.2,
      borderRadius:100,
      marginTop:4,
      color: 'rgb(30,30,30)',
  },
  });
  
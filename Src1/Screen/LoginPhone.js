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
  
  const LoginPhone = ({navigation}) => {
      const [toggleCheckBox, setToggleCheckBox] = useState(false);
      const [toggleCheckBox1, setToggleCheckBox1] = useState(true);


  const [passwordVisible, setPasswordVisible] = useState('false');
  const [isSelected, setSelection] = useState(false);

  const [pnumber, setPnumber] = useState('');
  const [errorPnumber, setErrorPnumber] = useState(null);

  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);

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
  const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorpassword('Please enter password');
    }
    if (!Regex.test(password)) {
      setErrorpassword('Enter valid password');
    } else {
      setErrorpassword(null);
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
            <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
            <Text style={styles.txt2}>×</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
             
                <Text style={styles.txt}>E-bullsAccount Login</Text>
        
            </View>
            <View style={styles.container1}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginEmail')}>
                <View style={styles.container2}>
                  <Text style={styles.txt3}>Email</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.container3}>
                  <Text style={styles.txt4}>Phone number</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.email}>
              <Text style={styles.etxt}>Phone Number</Text>
              <View style={styles.einput}>
                <View style={styles.einput1}>
                <View>
                <Image source={require('../Screen/Image/ind.jpeg')} style={styles.img1}></Image>
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
                    style={styles.input0}></TextInput>
                </View>
                {errorPnumber !== null ? (
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
                      {errorPnumber}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
            
  
  
  
            <View style={styles.email}>
            <Text style={styles.etxt}>Password</Text>
            <View style={styles.einput}>
              <View style={styles.einput1}>
              <View>
              <Image source={require('../Screen/Image/lock1.jpeg')} style={styles.img2}></Image>
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
                <Image source={require('../Screen/Image/loc.jpeg')} style={styles.img}></Image>
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
            <View style={styles.btn}>
            <TouchableOpacity>
            <View style={styles.chek}></View>
              
            </TouchableOpacity>
               <View style={styles.rem}>
               <Text style={styles.remtxt}>Remember me</Text>
               </View>
               </View>

  
           
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <View style={styles.btn1}>
        <Text style={styles.btntxt}>Sign In</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View>
        <Text style={styles.btntxt1}>Forget password ?</Text>
        </View>
        </TouchableOpacity>
          <View style={styles.btn2}>
       <TouchableOpacity>
       <Text style={styles.btntxt2}>Register now</Text>
       </TouchableOpacity>
          </View>
          
  
  
  
  
            
          </View>
      
      </SafeAreaView>
    );
  };
  
  export default LoginPhone;
  
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
     
    },
    txt2: {
      fontSize: 30,
      color:'white'
    },
    container: {
      marginTop: 30,
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
    
      backgroundColor: 'black',
      height: height * 0.05,
      width: width * 0.23,
      borderRadius: 10,
      justifyContent: 'center',
    },
    container3: {
        backgroundColor: '#EAB73B',
      height: height * 0.05,
      width: width * 0.38,
      borderRadius: 10,
      justifyContent: 'center',
    },
    txt3: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    txt4: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 17,
      //fontWeight: 'bold',
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
      marginTop:8,
      borderWidth:1,
      borderColor:'grey',
      borderColor:'red'
      
      
    },
    einput1: {
      flexDirection: 'row',
      marginLeft: 10,
      margin: 9,
    },
    input: {
   
      color: 'white',
      alignSelf: 'center',
      height: height * 0.05,
      width: width * 0.78,
      // backgroundColor: 'yellow',
      marginLeft:30
    },
    input0: {
   
      color: 'white',
      alignSelf: 'center',
      height: height * 0.05,
      width: width * 0.78,
      // backgroundColor: 'yellow',
      marginLeft:5
    },
    eye:{
     
      //backgroundColor:'red',
     
    },
    chek:{
    //  backgroundColor:'yellow',
      height:height*0.03,
      width:width*0.06,
      marginTop:20,
      borderRadius:5,
      borderWidth:2,
      borderColor:'white'
    },
    btn:{
      flexDirection:'row'
    },
    rem:{
      justifyContent:'center',
      marginTop:20,
      marginLeft:10
    },
    remtxt:{
      color:'white',
      fontSize:18,
      fontWeight:'bold'
    },
    btn1:{
      backgroundColor: '#EAB73B',
      height:height*0.06,
      width:width/1.1,
      marginTop:40,
      alignSelf:'center',
      justifyContent:'center',
      borderRadius:10
    },
    btntxt:{
      textAlign:'center',
      color:'black',
      fontSize:18,
      fontWeight:'bold',
    },
    
    btntxt:{
      textAlign:'center',
      color:'black',
      fontSize:18,
      fontWeight:'bold',
    },
    btntxt1:{
      textAlign:'center',
      color:'black',
      fontSize:18,
      fontWeight:'bold',
      color:'#EAB73B',
      marginTop:40
    },
    btntxt2:{
      textAlign:'center',
      color:'black',
      fontSize:18,
      fontWeight:'bold',
      marginTop:40,
      color:'#EAB73B',
      textDecorationLine:'underline'
    },
    img:{
        height:height*0.04,
        width:width*0.055,
        borderRadius:100,
        marginTop:4,
        color: 'rgb(30,30,30)',
    },
    img1:{
        height:height*0.04,
        width:width*0.2,
        borderRadius:100,
        marginTop:4,
        color: 'rgb(30,30,30)',
    },
    img2:{
        height:height*0.04,
        width:width*0.07,
        borderRadius:100,
        marginTop:4,
        color: 'rgb(30,30,30)',
    },
    input1:{
        justifyContent:'center',
        width:width*0.7
    }
  });
  
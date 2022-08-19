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
//import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const Personalinfo = ({navigation}) => {

  const [address, setAddress] = useState('');
  const [errorAddress, setErrorAddress] = useState(null);

  const addressValidate = address => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (address === '' || address === undefined || address === null) {
      setErrorAddress('Please enter name');
    }
    if (!Regex.test(address)) {
      setErrorAddress('Please enter residential address');
    } else {
      setErrorAddress(null);
    }
  };

  const [pin, setPin] = useState('');
  const [errorPin, setErrorPin] = useState(null);

  const pinValidate = pin => {
    var Regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (pin === '' || pin === undefined || pin === null) {
      setErrorPin('Please enter name');
    }
    if (!Regex.test(pin)) {
      setErrorPin('Please enter pin.');
    } else {
      setErrorPin(null);
    }
  };
  
  const [city, setCity] = useState('');
  const [errorCity, setErrorCity] = useState(null);

  const cityValidate = city => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (city === '' || city === undefined || city === null) {
      setErrorCity('Please enter name');
    }
    if (!Regex.test(city)) {
      setErrorCity('Please enter city.');
    } else {
      setErrorCity(null);
    }
  };

  const [pan, setPan] = useState('');
  const [errorPan, setErrorPan] = useState(null);

  const panValidate = pan => {
    var Regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (pan === '' || pan === undefined || pan === null) {
      setErrorPan('Please enter name');
    }
    if (!Regex.test(pan)) {
      setErrorPan('Please enter PAN Number');
    } else {
      setErrorPan(null);
    }
  };
  
  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
     <View>
     <View style={styles.txt11}>
     <View>
     <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
       <Image
         source={require('../Screen/Image/arro.jpeg')}
         style={styles.img}></Image>
         </TouchableOpacity>
     </View>
     <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
     <Text style={styles.txt2}>×</Text>
     </TouchableOpacity>
   </View>
     
     </View>
        <View style={styles.container}>
          <View style={styles.infot}>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Personal Information</Text>
            </View>
            <View>
              <Text style={styles.infotxt1}>Additional Information</Text>
            </View>
          </View>
          <View style={styles.indtxt}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Residential Address</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter residential address"
                placeholderTextColor={'#8E8E8E'}
                keyboardType="default"
                onChangeText={text => {
                  setAddress(text), addressValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                
                ></TextInput>
            </View>
            {errorAddress !== null ? (
              <View
                style={{
                  //height: height * 0.02,
                  width: width * 0.7,
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  //alignSelf: 'center',
                  
                }}>
               
                <Text
                  style={{
                    color: 'red',
                    fontSize: 15,
                    //textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop:8
                  }}>
                  {errorAddress}
                </Text>
              </View>
            ) : null}
          </View>
         
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Pin</Text>
              <Text style={styles.txtna1}>City</Text>
            </View>
       
              <View style={styles.ind6}>
                <View style={styles.ind5}>
                  <TextInput
                    placeholder="Pin"
                    placeholderTextColor={'#8E8E8E'}
                    keyboardType="default"
                onChangeText={text => {
                  setPin(text), pinValidate(text);
                }}
                maxLength={10}  style={{color:'white'}}
                    ></TextInput>
                </View>

                <View style={styles.ind5}>
                  <TextInput
                    placeholder="City"
                    placeholderTextColor={'#8E8E8E'}
                    onChangeText={text => {
                      setCity(text), cityValidate(text);
                    }}
                    maxLength={10}  style={{color:'white'}}
                    ></TextInput>
                </View>
      
            </View>
           
      
          </View>
         <View style={{flexDirection:'row',
         //backgroundColor:'green',
        //  height:height*0.032,
        //  width:width/1.1
        }}>
     <View style={styles.pin}>
     {errorPin !== null ? (
      <View
        style={{
          //height: height * 0.02,
          width: width * 0.7,
          //backgroundColor: 'green',
          justifyContent: 'center',
          //alignSelf: 'center',
          
        }}>
       
        <Text
          style={{
            color: 'red',
            fontSize: 15,
            //textAlign: 'center',
            fontWeight: 'bold',
            marginTop:3
          }}>
          {errorPin}
        </Text>
      </View>
    ) : null}
     </View>
      <View style={styles.city}>
      {errorCity !== null ? (
        <View
          style={{
            //height: height * 0.02,
            width: width * 0.7,
            //backgroundColor: 'green',
            justifyContent: 'center',
            //alignSelf: 'center',
            
          }}>
         
          <Text
            style={{
              color: 'red',
              fontSize: 15,
              //textAlign: 'center',
              fontWeight: 'bold',
              marginTop:3,
            
            }}>
            {errorCity}
          </Text>
        </View>
      ) : null}
      </View>
         </View>
          <View style={styles.indtxt}>
          <View style={styles.txtna}>
            <Text style={styles.txtn}>PAN CARD NUMBER</Text>
          </View>
          <View style={styles.ind}>
            <TextInput
              placeholder="10 digits"
              placeholderTextColor={'#8E8E8E'}
              keyboardType="default"
              onChangeText={text => {
                setPan(text),panValidate(text);
              }}
              maxLength={30}  style={{color:'white'}}
              ></TextInput>
          </View>
          {errorPan !== null ? (
            <View
              style={{
                //height: height * 0.02,
                width: width * 0.7,
                //backgroundColor: 'green',
                justifyContent: 'center',
                //alignSelf: 'center',
                
              }}>
             
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  //textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop:8
                }}>
                {errorPan}
              </Text>
            </View>
          ) : null}
        </View>
     
        <TouchableOpacity onPress={() => navigation.navigate('PersonalVer')}>
     <View style={styles.btntxt1}>
     <Text style={styles.btntxt}>Continue</Text>
     </View>
     </TouchableOpacity>
      
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Personalinfo;

const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    width: width * 1,
    backgroundColor: 'black',
  },

  txt: {
    //  backgroundColor:'red',
    height: height * 0.05,
    width: width * 0.09,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  container: {
    //backgroundColor: 'cyan',
    height: height * 1,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 30,
  },
  txt1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  info: {
    //  backgroundColor:'red',
    height: height * 0.041,
  },
  infotxt: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
  },
  infotxt1: {
    color: 'white',
    fontSize: 17,
  },
  infot: {
    // backgroundColor:'red',
    height: height * 0.117,
  },
  txtna: {
    //  backgroundColor:'red',
    height: height * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.65,
  },
  txtna1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ind: {
    backgroundColor: '#1E1E1E',
    height: height * 0.065,
    width: width / 1.1,
    borderRadius: 10,

    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  indtxt: {
    height: height * 0.14,
    // backgroundColor:'red'
  },
  h: {
    //backgroundColor:'red',
    height: height * 0.122,
  },
  fl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ind4: {
    backgroundColor: '#1E1E1E',
    height: height * 0.065,
    width: width / 1.1,
    borderRadius: 10,
    padding: 20,
    //justifyContent:'space-between',
    // alignItems:'flex-end'
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btntxt1: {
    height: height * 0.065,
    width: width / 1.1,
    backgroundColor: '#EAB73B',
    justifyContent: 'center',
    borderRadius: 10,
  },
  ind6:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  ind5:{
    backgroundColor:'#1E1E1E',
    height:height*0.06,
    width:width*0.43,
    justifyContent:'center',
    padding:10,
    borderRadius:10,
    
  },
  txtn:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  img: {
    height: height * 0.04,
    width: width * 0.055,
    borderRadius: 100,
    marginTop: 4,
    color: 'rgb(30,30,30)',
  },
  txt11: {
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
  pin:{
    //backgroundColor:'white',
    width:width*0.47
  },
  city:{
   // backgroundColor:'yellow',
    width:width*0.47
  }
});

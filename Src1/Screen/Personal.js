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

const Personal = ({navigation}) => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(null);
  const [mname, setMName] = useState('');
  const [errorMName, setErrorMName] = useState(null);

  const [lname, setLName] = useState('');
  const [errorLName, setErrorLName] = useState(null);

 

  const nameValidate = name => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (name === '' || name === undefined || name === null) {
      setErrorName('Please enter name');
    }
    if (!Regex.test(name)) {
      setErrorName('Please enter first name');
    } else {
      setErrorName(null);
    }
  };
  const mnameValidate = mname => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (mname === '' || mname === undefined || mname === null) {
      setErrorMName('Please enter name');
    }
    if (!Regex.test(mname)) {
      setErrorMName('Please enter middle name');
    } else {
      setErrorMName(null);
    }
  };
  const lnameValidate = lname => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (lname === '' || lname === undefined || lname === null) {
      setErrorLName('Please enter name');
    }
    if (!Regex.test(lname)) {
      setErrorLName('Please enter last name');
    } else {
      setErrorLName(null);
    }
  };


  return (
    <SafeAreaView>
      <View style={styles.maincontainer}>
        <View style={styles.txt}>
        <TouchableOpacity onPress={() => navigation.navigate('Referal')}>
            <Text style={styles.txt1}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.infot}>
            <View style={styles.info}>
              <Text style={styles.infotxt}>Personal Information</Text>
            </View>
            <View>
              <Text style={styles.infotxt1}>Identity Information</Text>
            </View>
          </View>
          <View style={styles.indtxt}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Nationality</Text>
            </View>
            <View style={styles.ind}>
              <View style={styles.ind1}>
                <Image
                  source={require('../Screen/Image/indi.jpeg')}
                  style={styles.img}></Image>
                <Text style={styles.txt5}>India</Text>
              </View>
              <View style={styles.ind2}>
                <Text style={styles.remtxt1}>▼</Text>
              </View>
            </View>
          </View>
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>First Name</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter first name"
                placeholderTextColor={'#8E8E8E'} 
                keyboardType="default"
                onChangeText={text => {
                  setName(text), nameValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                
                ></TextInput>
            </View>
          </View>
          {errorName !== null ? (
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
                }}>
                {errorName}
              </Text>
            </View>
          ) : null}
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Middle Name</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter middle name"
                placeholderTextColor={'#8E8E8E'} 
                keyboardType="default"
                onChangeText={text => {
                  setMName(text), mnameValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                ></TextInput>
            </View>
          </View>
          {errorMName !== null ? (
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
                }}>
                {errorMName}
              </Text>
            </View>
          ) : null}
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Last Name</Text>
            </View>
            <View style={styles.ind}>
              <TextInput
                placeholder="Enter last name"
                placeholderTextColor={'#8E8E8E'} 
                
                keyboardType="default"
                onChangeText={text => {
                  setLName(text), lnameValidate(text);
                }}
                maxLength={30}  style={{color:'white'}}
                
                ></TextInput>
            </View>
          </View>
      
        {errorLName !== null ? (
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
              }}>
              {errorLName}
            </Text>
          </View>
        ) : null}
     
          <View style={styles.h}>
            <View style={styles.txtna}>
              <Text style={styles.txtna1}>Gender</Text>
            </View>
            <View style={styles.ind4}>
              <View style={styles.fl}>
                <TextInput
                  placeholder="Gender"
                  placeholderTextColor={'#8E8E8E'} maxLength={30}></TextInput>
                <View style={styles.ind2}>
                  <Text style={styles.remtxt1}>▼</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Personalinfo')}>
          <View style={styles.btntxt1}>
          <Text style={styles.btntxt}>Continue</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Personal;

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
    color: '#8E8E8E',
    fontSize: 17,
  },
  infot: {
    // backgroundColor:'red',
    height: height * 0.115,
  },
  txtna: {
    //  backgroundColor:'red',
    height: height * 0.04,
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
  ind1: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ind2: {
    justifyContent: 'center',
  },
  img: {
    height: height * 0.05,
    width: width * 0.11,
    // borderRadius:100,
    //  marginTop:4
    //alignSelf:'center'
  },
  remtxt1: {
    color: '#EAB73B',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt5: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 18,
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
  btntxt:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  btntxt1:{
    height:height*0.065,
    width:width/1.1,
    backgroundColor:'#EAB73B',
    justifyContent:'center',
    borderRadius:10,

  }
});

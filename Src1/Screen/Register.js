import {
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    View,onPress,
  } from 'react-native';
  import React, {useState} from 'react';
  //import {Dropdown} from 'react-native-material-dropdown';
  
  const {height, width} = Dimensions.get('window');
  
  
  const Register = ({navigation}) => {
   
    
  
    return (
      <SafeAreaView>

        <View style={styles.maincontainer}>
        <View style={styles.close}>
        <TouchableOpacity onPress={() => navigation.navigate('Ebull')}>
        <Text style={styles.txt2}>×</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <View style={styles.crete}>
        <Text style={styles.cretetxt}>Create Your Account</Text>
        </View>
        <View style={styles.crete1}>
        <Text style={styles.cretetxt1}>Company is the world's largest crypto</Text>
        <Text style={styles.cretetxt1}>exchange platform</Text>
        </View>
       <View style={styles.cont}>
        
       <View style={styles.men}>
       <View>
       <Image source={require('../Screen/Image/men.jpeg')} style={styles.img}></Image>
       </View>
       <View>
       <Text style={styles.txt3}>Create Account</Text>
       
       </View>
       </View>
       <View>
        <Text style={styles.txt4}>Enter your account details.</Text>
        
        </View>

       </View>
       <View style={styles.cont}>
        
       <View style={styles.men}>
       <View>
       <Image source={require('../Screen/Image/veri.jpeg')} style={styles.img}></Image>
       </View>
       <View>
       <Text style={styles.txt3}>Verify Account</Text>
       
       </View>
       </View>
       <View>
        <Text style={styles.txt4}>Verify your Identity to protect your account.</Text>
        
        </View>

       </View>
       <View style={styles.cont}>
        
       <View style={styles.men}>
       <View>
       <Image source={require('../Screen/Image/home.jpeg')} style={styles.img}></Image>
       </View>
       <View>
       <Text style={styles.txt3}>Start trading</Text>
       
       </View>
       </View>
       <View>
        <Text style={styles.txt4}>Get start trading.</Text>
        
        </View>

       </View>

       <View style={styles.crete1}>
        <Text style={styles.cretetxt1}>By creating an account you agree to our</Text>
       <View style={styles.txtflex}>
       <Text style={styles.txtterm}>Termes and Condition </Text>
       <Text style={styles.cretetxt1}>and</Text>
       <Text style={styles.txtterm}>Data Protection </Text>
       </View>
       <Text style={styles.txtterm}>Guidelines.</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <View style={styles.btn}>
        <Text style={styles.txtbtn}>Create Personal Account </Text>
        </View>
        </TouchableOpacity>
       
        <View style={styles.btn1}>
        <Text style={styles.txtbtn1}>Already registered?</Text>
       <TouchableOpacity>
       <Text style={styles.txtbtn2}> Log in</Text>
       </TouchableOpacity>
        </View>
       








        
        </View>
   
        
       
        </View>
     
      </SafeAreaView>
    );
  };
  
  export default Register;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height * 1,
      width: width * 1,
      backgroundColor:'black',
     // justifyContent:'center'
     
    },
   
    txt2:{
      color:'white',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
    

    
    },
    close:{
     //   backgroundColor:'red',
        height:height*0.03,
        width:width*0.09,
        alignSelf:'flex-end'
      
    },
    container:{
        //backgroundColor:'red',
       
        height:height*1,
        width:width/1.1,
        alignSelf:'center',
        marginTop:60
    },
    crete:{
        height:height*0.05,
       // backgroundColor:'red'
    },
    crete1:{
        height:height*0.07,
      //  backgroundColor:'red'
    },
    cretetxt:{
        fontSize:29,
        color:'#FFFFFF',
        fontWeight:'bold',

    },
    cretetxt1:{
        fontSize:15,
        color:'#8E8E8E',
        fontWeight:'bold',

    },
    txt3:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:12
    },
    img:{
        height:height*0.025,
        width:width*0.05,
        borderRadius:100,
        marginTop:4
    },
    men:{
        flexDirection:'row',
        height:height*0.032
    },
    txt4:{
        marginLeft:30,
        color:'#8E8E8E'
    },
    cont:{
     //   backgroundColor:'yellow',
        height:height*0.09
    },
    txtflex:{
        flexDirection:'row'
    },
    txtterm:{
        color:'#EAB73B'
    },
    txtbtn:{
        textAlign:'center',
        fontSize:20,
        justifyContent:'center',
    },
    btn:{
        backgroundColor:'#EAB73B',
        height:height*0.06,
        width:width/1.1,
        borderRadius:10,
        marginTop:80,
        justifyContent:'center'
    },
    txtbtn1:{
        textAlign:'center',
        fontSize:20,
        justifyContent:'center',
        color:'white'
    },
    txtbtn2:{
        textAlign:'center',
        fontSize:20,
        justifyContent:'center',
        color:'#EAB73B',
        textDecorationLine:'underline',
        fontWeight:'bold'
    },
    btn1:{
        //backgroundColor:'#EAB73B',
       // height:height*0.06,
        //width:width/1.1,
        //borderRadius:10,
        marginTop:65,
        justifyContent:'center',
        flexDirection:'row'
    }
   
  });
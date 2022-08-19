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
  
  
  const Ebull = ({navigation}) => {
   
    
  
    return (
      <SafeAreaView>

        <View style={styles.maincontainer}>
        <View>
        <Text></Text>
        </View>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginEmail')}>
       <Text style={styles.txt}>E-BULLS</Text>
       </TouchableOpacity>
        </View>

        
       
        </View>
     
      </SafeAreaView>
    );
  };
  
  export default Ebull;
  
  const styles = StyleSheet.create({
    maincontainer: {
      height: height * 1,
      width: width * 1,
      backgroundColor:'black',
      justifyContent:'center'
    },
   
    txt:{
      color:'#EAB73B',
      textAlign:'center',
      fontSize:35,
      fontWeight:"900",
    

    
    }
   
  });
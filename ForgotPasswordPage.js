// Rest of the import statements
import { useFonts } from 'expo-font';
import {StyleSheet,View, Text,TextInput,Image} from 'react-native'
import React from 'react';


const TextInputCostum =({ placeholder,keyboardType}) => {
  return(
    <TextInput 
    placeholder ={placeholder}
    keyboardType ={keyboardType}
    style ={{
      width :320,
      height :60,
      borderColor : 'red',
      borderRadius :5,
      borderWidth :1,
      marginBottom :5,
      paddingLeft :20,
      backgroundColor : 'white',
      fontSize : 15,
      fontFamily : 'MetroMedium'
    }}></TextInput>
  )
}

const ButtonCostum =({text,color}) => {
  return (
    <View style ={{
      backgroundColor :color,
      width :'100%',
      height :50,
      borderRadius :25,
      justifyContent : 'center',
      marginTop :20
    }}>
      <Text style={{
        fontSize : 20,
        color : 'white',
        // fontWeight : 'bold',
        textAlign :'center',
        fontFamily : 'MetroMedium'
      }}>{text}</Text>
    </View>
  )
}


const App = ({navigation}) => {
  // export default function App() {
    const [dapatFont]= useFonts({
      'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
      'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf')
    });
    if (!dapatFont) {
      return <Text>Font tidak ditemukan......</Text>
    }

  return (
    <View style ={styles.container}>
      
      <View style ={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text  style ={{
          fontSize : 13,
          fontFamily : 'MetroMedium'
        }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
        <View  style= {styles.form}>
          {/* <TextInputCostum placeholder="Name" typekeyboard="email-address"/> */}
          <TextInputCostum placeholder="Email" typekeyboard="email-address"/>
          {/* <TextInputCostum placeholder="Password" typekeyboard="default"/> */}
          <View  style ={{
            justifyContent : 'flex-end',
            flexDirection : 'row',
            marginBottom : 10
          }}>
            <Text style ={{
              fontSize :11,
              textAlign :'center',
              // marginLeft :150,
              fontFamily : 'MetroMedium',
              color: 'red',
            }}>Not a valid email address. Should be your@email.com</Text>
          </View>
          <ButtonCostum text = "SEND" color = "#C40C0C"/>
        </View>
      </View>
      {/* <Text style ={{
        fontSize : 15,
        textAlign : 'center',
        fontFamily : 'MetroMedium'
      }}>Or login with social account</Text>
      <View style ={styles.logoRow}>
        <View style ={styles.logoContainer}>
          <Image source = {require('./assets/logo-google.png')} style ={styles.logo}/>
        </View>
        <View style ={styles.logoContainer}>
          <Image source ={require('./assets/logo-facebook.webp')} style ={styles.logo}/>
        </View>
      </View> */}
    </View>
  )
}


export default App

const styles =StyleSheet.create({
  container :{
    flex :1,
    backgroundColor : '#EEEEEE',
    padding : 20
  },
  content :{
    flex :1,
    justifyContent : 'center',
    // alignItems : 'center'
  },
  title : {
    fontSize : 35,
    justifyContent: 'center',
    // fontWeight : 'bold',
    marginBottom : 40,
    fontFamily : 'MetroBold'
  },
  form : {
    width : '100%',
    alignItems :'center',
    // fontFamily : 'MetroMedium'
  },
  logoRow : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    paddingVertical : 20
  },
  logoContainer : {
    borderRadius : 15,
    padding : 15,
    backgroundColor : 'white',
    marginHorizontal :10
  },
  logo : {
    width : 30,
    height : 30
  },
});
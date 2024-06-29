import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextInputCostum =({placeholder, color, typeKeyboard}) => {
  return(
    <TextInput  
    placeholder={placeholder}
    keyboardType={typeKeybooard}
    style ={{
      width :320,
      height : 60,
      borderColor : color,
      borderWidth : 1,
      borderRadius : 10,
      marginBottom :10,
      paddingLeft : 10,
      backgroundColor : 'white'
    }}></TextInput>
  )
}

const App = () => {
  return (
    <View style ={{
      flex :1,
      backgroundColor : "#EEEEEE"
    }}>
    
    <View style ={{
      flex : 1,
      justifyContent : 'center',
      // alignItems : 'center',
    }}>
     <View style ={{
      // flex :1,
      // marginTop : 50,
      marginLeft : 20,
      justifyContent : 'flex-start',
      alignItems : 'flex-start'
    }}>
      <Text style ={{
        fontSize : 25,
        fontWeight : 'bold'
      }}>Sing Up</Text>
      </View>
      
    <View style ={{
      // flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <TextInputCostum placeholder = "Name" color = "white" />
      <TextInputCostum placeholder = "Email" color = "white" />
      <TextInputCostum placeholder = "Password" color = "white" />
    </View>

    </View>
    </View>
  )
}

export default App
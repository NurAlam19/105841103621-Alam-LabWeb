import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


// const ButtonCostum = ({text,color}) => {
//   return (
//     <View style ={{
//       backgroundColor : color,
//       width : 250,
//       height : 100,
//       borderRadius : 10,
//       justifyContent : 'center',
//       marginBottom :10
//     }}>
//       <Text style ={{
//         textAlign : 'center',
//         color : 'white',
//         fontSize : 30,
//         fontWeight : 'bold',
//       }}>
//         {text}
//       </Text>
//     </View>
//   )
// }

const TextInputCostum =({placeholder, color, typeKeybooard}) => {
  return(
    <TextInput  
    placeholder={placeholder}
    keyboardType={typeKeybooard}
    style ={{
      width :250,
      height : 50,
      borderColor : color,
      borderWidth : 1,
      borderRadius : 10,
      marginBottom :10,
      paddingLeft : 10
    }}></TextInput>
  )
}

const App = () => {
  return (
    <View style ={{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <TextInputCostum placeholder = "Username" color = "red" />
      <TextInputCostum placeholder = "Password" color = "red" />
      <TextInputCostum placeholder = "Gmail" color = "red" />
      {/* <ButtonCostum text = "LOGIN" color = "red" />
      <ButtonCostum text = "LOGIN" color = "orange" />
      <ButtonCostum text = "REGIS" color = "purple" /> */}
    </View>
  )
}

export default App
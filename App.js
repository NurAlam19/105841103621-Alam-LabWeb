import { StyleSheet, Text, View} from 'react-native';
import React from 'react'

const App = () => {
  return (
    <View style ={{
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{
        width:250,
        height:100,
        backgroundColor:'red',
        borderRadius : 20,
        justifyContent : 'center'
      }}>
        <Text style ={{
          fontSize :20,
          color : 'white',
          textAlign : 'center',
          fontWeight : 'bold'
        }}>Login</Text>
      </View>
    </View>
  )
}

export default App
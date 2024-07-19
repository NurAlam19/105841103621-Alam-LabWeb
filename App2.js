import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage'
import SingupPage from './SingupPage'
import ForgotPasswordPage from './ForgotPasswordPage'

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Home Screen</Text> */}
      {/* <Button title = "Ke Halaman Login" onPress={() => navigation.navigate('Login')}/> */}
      <Button title = "Ke Halaman Sing Up" onPress={() => navigation.navigate('Sing Up')}/>
      {/* <Button title = "Ke Halaman Forgot Password" onPress={() => navigation.navigate('Forgot Password')}/> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Sing Up" component={SingupPage} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}}/>
        <Stack.Screen name="Forgot Password" component={ForgotPasswordPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
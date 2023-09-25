import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import MakeAChooseScreen from './src/screens/MakeAChooseScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menú' }} />
        <Stack.Screen name="MakeAChooseScreen" component={MakeAChooseScreen} options={{ title: 'Hacer una elección' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

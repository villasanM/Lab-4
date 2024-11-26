import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';  // Ensure correct path
import RegisterScreen from './src/screens/RegisterScreen';
import RecoverPasswordScreen from './src/screens/RecoverPasswordScreen';
import DashboardLayout from './src/Dashboard/_layout';  // Ensure correct path

// Initialize Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Hide header only on LoginScreen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide the header for LoginScreen
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />

        {/* Dashboard screen with Tab Navigator */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardLayout}
          options={{ headerShown: false }} // Hide header for Dashboard
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

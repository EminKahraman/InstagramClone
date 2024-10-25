import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerBackTitle: ' ',
          headerTitle: 'Yeni hesap oluştur',
        }}
      />
      <Stack.Screen
        name="PasswordReset"
        component={PasswordResetScreen}
        options={{
          headerBackTitle: ' ',
          headerTitle: 'Şifreni mi unuttun?',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

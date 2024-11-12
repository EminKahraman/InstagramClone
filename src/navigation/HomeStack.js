import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../screens/HomePageScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          headerBackTitle: ' ',
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

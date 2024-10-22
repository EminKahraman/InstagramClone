import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../screens/HomePageScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileScreen}
        options={{headerBackTitle: ' ', headerShown: false}}
      />
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

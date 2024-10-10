import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileDetail from '../screens/ProfileDetailScreen';
import HomePageScreen from '../screens/HomePageScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

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
        component={ProfileDetail}
        options={{headerBackTitle: ' '}}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{headerShown: true, headerBackTitle: ' '}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

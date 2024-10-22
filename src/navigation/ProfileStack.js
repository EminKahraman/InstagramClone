import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileDetail from '../screens/ProfileDetailScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {shadowOpacity: 0}}}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{isMe: true}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{headerBackTitle: ' '}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerBackTitle: ' ',
          headerTitle: 'Ayarlar ve hareketler ',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileDetail from '../screens/ProfileDetailScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PostDetail from '../screens/PostDetail';
import FollowDetail from '../screens/ProfileScreens/FollowDetail';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {shadowOpacity: 0}, headerShown: false}}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{isMe: true}}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{headerShown: true}}
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
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{animationEnabled: false}}
      />
      <Stack.Screen name="FollowDetail" component={FollowDetail} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

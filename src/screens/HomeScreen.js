import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import HomePageScreen from './HomePageScreen';
import DiscoverScreen from './DiscoverScreen';
import ShareScreen from './ShareScreen';
import ReelsScreen from './ReelsScreen';
import ProfileScreen from './ProfilScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  // Redux'tan kullanıcı bilgilerini al
  const {username, profileImageUrl} = useSelector(state => state.auth);

  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={25} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" size={25} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="Share"
        component={ShareScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-outline" size={25} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="videocam-outline" size={25} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{username, profileImageUrl}}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" size={25} color="gray" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeScreen;

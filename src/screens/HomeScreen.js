import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePageScreen from './HomePageScreen';
import DiscoverScreen from './DiscoverScreen';
import ShareScreen from './ShareScreen';
import ReelsScreen from './ReelsScreen';
import ProfileScreen from './ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  // Redux'tan kullanıcı bilgilerini al
  const {profileImageUrl} = useSelector(state => state.auth);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const {username} = JSON.parse(userData);
          setUsername(username);
        }
      } catch (error) {
        console.error('Error getting user data:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <Tabs.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
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
            <Ionicons name="add-circle-outline" size={25} color="gray" />
          ),
        }}
      />
      <Tabs.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="film-outline" size={25} color="gray" />
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

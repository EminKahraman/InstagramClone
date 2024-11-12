import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import DiscoverScreen from '../screens/DiscoverScreen';
import ShareScreen from '../screens/ShareScreen';
import ReelsScreen from '../screens/ReelsScreen';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const Tabs = createBottomTabNavigator();

const TabStack = () => {
  const [isReelsActive, setIsReelsActive] = useState(false);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: isReelsActive ? 'white' : 'black',
        tabBarStyle: {
          backgroundColor: isReelsActive ? 'black' : 'white',
        },
      }}>
      <Tabs.Screen
        name="HomePageTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => setIsReelsActive(false),
          tabLongPress: () => setIsReelsActive(false),
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => setIsReelsActive(false),
          tabLongPress: () => setIsReelsActive(false),
        }}
      />
      <Tabs.Screen
        name="Share"
        component={ShareScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => setIsReelsActive(false),
          tabLongPress: () => setIsReelsActive(false),
        }}
      />
      <Tabs.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="film-outline" size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => setIsReelsActive(true),
          tabLongPress: () => setIsReelsActive(true),
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => setIsReelsActive(false),
          tabLongPress: () => setIsReelsActive(false),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabStack;

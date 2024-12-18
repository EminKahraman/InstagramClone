import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageScreen from '../screens/HomePageScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FollowRequestsScreen from '../screens/FollowRequestsScreen';
import FollowDetail from '../screens/ProfileScreens/FollowDetail';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { shadowOpacity: 0 } }}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View
              style={{
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} />
              </TouchableOpacity>
              <Text style={{ marginLeft: 30, fontWeight: 'bold', fontSize: 18 }}>
                Bildirimler
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ color: '#094be5', fontSize: 18 }}>Filtrele</Text>
            </TouchableOpacity>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
      <Stack.Screen
        name="FollowRequests"
        component={FollowRequestsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View
              style={{
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} />
              </TouchableOpacity>
              <Text style={{ marginLeft: 30, fontWeight: 'bold', fontSize: 18 }}>
                Takip İstekleri
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ color: '#094be5', fontSize: 18 }}>Yönet</Text>
            </TouchableOpacity>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
      <Stack.Screen name="FollowDetail" component={FollowDetail} /> 
    </Stack.Navigator>
  );
};

export default HomeStack;

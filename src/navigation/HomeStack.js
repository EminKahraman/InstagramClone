import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../screens/HomePageScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} />
              </TouchableOpacity>
              <Text style={{marginLeft: 30, fontWeight: 'bold', fontSize: 18}}>
                Bildirimler
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 15}}>
              <Text style={{color: '#094be5', fontSize: 18}}>Filtrele</Text>
            </TouchableOpacity>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

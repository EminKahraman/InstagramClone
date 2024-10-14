import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import TabStack from './TabStack';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileDetail from '../screens/ProfileDetailScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MainStack = () => {
  const {user} = useSelector(state => state.auth);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <Stack.Screen name="Tab" component={TabStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}

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
        name="ProfileDetail"
        component={ProfileDetail}
        options={{
          headerShown: true,
          headerBackTitle: ' ',
        }}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{headerShown: true, headerBackTitle: ' '}}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          headerBackTitle: ' ',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

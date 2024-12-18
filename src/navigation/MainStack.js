import React, {useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './AuthStack';
import TabStack from './TabStack';
import MessagesScreen from '../screens/MessagesScreen';
import {setSelectedImage} from '../redux/authSlice';
import MessageDetail from '../screens/MessageDetail';
import ProfileEdit from '../screens/ProfileEdit';
import MessageRequestScreen from '../screens/MessageRequestScreen';
import HiddenRequestScreen from '../screens/HiddenRequestScreen';
import StoriesScreen from '../screens/StoriesScreen';
import BioEditScreen from '../screens/BioEditScreen';
import NewMessageScreen from '../screens/NewMessageScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('selectedImages').then(value => {
      dispatch(setSelectedImage(JSON.parse(value)));
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {shadowOpacity: 0}, headerShown: false}}>
      {user ? (
        <Stack.Screen name="Tab" component={TabStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginLeft: 10}}>
                <Ionicons name="arrow-back-outline" size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 30}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  {user?.username}
                </Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewMessage")} style={{marginRight: 10}}>
              <Ionicons name="create-outline" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="MessageDetail" component={MessageDetail} />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={({navigation}) => ({
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
              <Text style={{marginLeft: 30, fontWeight: 'bold', fontSize: 18}}>
                Profili Düzenle
              </Text>
            </View>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
      <Stack.Screen
        name="MessageRequest"
        component={MessageRequestScreen}
        options={({navigation}) => ({
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
              <Text style={{marginLeft: 25, fontWeight: 'bold', fontSize: 18}}>
                Mesaj İstekleri
              </Text>
            </View>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
      <Stack.Screen
        name="HiddenRequest"
        component={HiddenRequestScreen}
        options={({navigation}) => ({
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
              <Text style={{marginLeft: 25, fontWeight: 'bold', fontSize: 17}}>
                Gizlenen İstekler
              </Text>
            </View>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
      <Stack.Screen name="Stories" component={StoriesScreen} />
      <Stack.Screen name="BioEdit" component={BioEditScreen} />
      <Stack.Screen
        name="NewMessage"
        component={NewMessageScreen}
        options={({navigation}) => ({
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
              <Text style={{marginLeft: 30, fontWeight: 'bold', fontSize: 18}}>
                Yeni Mesaj
              </Text>
            </View>
          ),
          headerTitle: ' ',
          headerShown: true,
          headerBackTitle: ' ',
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
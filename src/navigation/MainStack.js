import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import TabStack from './TabStack';
import MessagesScreen from '../screens/MessagesScreen';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setSelectedImage} from '../redux/authSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const MainStack = () => {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('selectedImages').then(value => {
      console.log(value);
      dispatch(setSelectedImage(JSON.parse(value)));
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
          headerTitle: `${user?.username}`,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 10}}>
              <Ionicons name="arrow-back-outline" size={24} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}>
              <Ionicons name="create-outline" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

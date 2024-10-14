import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {setUser} from '../redux/authSlice';

const ProfileHeader = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    Alert.alert('Çıkış Yap', 'Çıkış yapmak istediğinizden emin misiniz?', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Çıkış Yap',
        onPress: async () => {
          await auth().signOut();
          dispatch(setUser(null));
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons
            name="log-out-outline"
            size={24}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.username}>{user?.username}</Text>

        <Ionicons
          name="add-circle-outline"
          size={24}
          color="black"
          style={{marginLeft: 'auto', marginRight: 20}}
        />
        <Ionicons
          name="menu-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  username: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default ProfileHeader;

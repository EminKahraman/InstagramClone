import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {logout} from '../redux/authSlice';
import {useDispatch, useSelector} from 'react-redux';

const ProfileHeader = ({navigation}) => {
  const dispatch = useDispatch();

  const {username} = useSelector(state => state.auth);

  const handleLogout = () => {
    Alert.alert('Çıkış Yap', 'Çıkış yapmak istediğinizden emin misiniz?', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Çıkış Yap',
        onPress: () => {
          dispatch(logout());

          navigation.navigate('Login');
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
        <Text style={styles.username}>{username}</Text>

        <Ionicons
          name="add-circle-outline"
          size={24}
          color="black"
          style={{marginLeft: 'auto', marginRight: 10}}
        />
        <Ionicons name="menu-outline" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default ProfileHeader;

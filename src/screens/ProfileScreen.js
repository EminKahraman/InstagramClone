// src/screens/ProfileScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProfileHeader from '../header/ProfileHeader';
import {useSelector} from 'react-redux';

const ProfileScreen = ({navigation}) => {
  const {profileImageUrl} = useSelector(state => state.auth);

  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <View style={styles.profileContainer}>
        <Image source={{uri: profileImageUrl}} style={styles.profileImage} />
      </View>
      <View style={styles.text}>
        <Text>Profil Sayfası</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profileContainer: {},
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ProfileScreen;

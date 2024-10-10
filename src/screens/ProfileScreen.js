import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProfileHeader from '../header/ProfileHeader';
import {useSelector} from 'react-redux';

const ProfileScreen = ({navigation}) => {
  const {user, profileImageUrl} = useSelector(state => state.auth);
  console.log(user);
  console.log(profileImageUrl);
  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <View style={styles.profileContainer}>
        <Image source={{uri: profileImageUrl}} style={styles.profileImage} />

        <Text style={styles.firstName}>{user?.firstName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginTop: 20,
    marginLeft: 20,
  },
  firstName: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default ProfileScreen;

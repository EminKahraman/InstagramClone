import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProfileDetail = () => {
  const {user} = useSelector(state => state.auth);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Kullanıcı Adı: {user.username}</Text>
      <Text style={styles.text}>İsim ve Soyisim: {user.firstName}</Text>
      <Text style={styles.text}>Şehir: {user.city}</Text>
      <Text style={styles.text}>Cinsiyet: {user.gender}</Text>
    </SafeAreaView>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

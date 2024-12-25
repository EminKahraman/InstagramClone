import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import { faker } from '@faker-js/faker';


const ProfileDetail = () => {
  const {user} = useSelector(state => state.auth);

  const fakeData = Array(5).fill(0).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.sentence(),
}));

const renderItem = ({ item }) => {
  return (
  <View>
    <Text>{item.name}</Text>
    <Text>{item.username}</Text>
    <View style={{margin:10}}></View>
  </View>
)
}
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Kullanıcı Adı: {user.username}</Text>
      <Text style={styles.text}>İsim ve Soyisim: {user.firstName}</Text>
      <Text style={styles.text}>Şehir: {user.city}</Text>
      <Text style={styles.text}>Cinsiyet: {user.gender}</Text>
      <FlatList data={fakeData} keyExtractor={(item)=>item.id} renderItem={renderItem}/>
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

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import dummyData from '../../dummyData';

const SubscriptionTab = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 15,
        }}>
        <Image source={{uri: item?.profileImage}} style={styles.profileImage} />
        <View style={{marginLeft: 20}}>
          <Text style={{fontWeight: '500', marginBottom: 1}}>
            {item.username}
          </Text>
          <Text style={{color: '#696969'}}>{item.fullName}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontWeight: 500}}>Abone Ol</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Önerilen abonelikler</Text>
      <FlatList renderItem={renderItem} data={dummyData.users} />
    </View>
  );
};

export default SubscriptionTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginLeft: 'auto',
    backgroundColor: '#1c86ee',
  },
});

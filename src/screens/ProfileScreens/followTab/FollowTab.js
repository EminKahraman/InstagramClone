import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dummyData from '../../dummyData';

const FollowTab = () => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 15,
        }}>
        <Image source={{ uri: item?.profileImage }} style={styles.profileImage} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: '500' }}>{item.username}</Text>
          <Text style={{ color: '#696969', marginVertical: 1 }}>
            {item.fullName}
          </Text>
          <Text style={{ color: '#696969', fontSize: 12 }}>
            Senin için öneriliyor
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 500 }}>Takip Et</Text>
        </TouchableOpacity>
        <Ionicons name="close-outline" size={15} style={{ marginLeft: 10 }} />
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.icon}>
          <Ionicons
            name="person-add-outline"
            size={55}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>
          Takip Ettiğin Kişiler
        </Text>
        <Text style={{ color: '#696969', marginBottom: 100 }}>
          Takip ettiğin kişiler burada göreceksin.
        </Text>
      </View>

      <Text style={styles.listHeader}>Senin için önerilenler</Text>
      <FlatList
        renderItem={renderItem}
        data={dummyData.users}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default FollowTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 100,
    padding: 15,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginLeft: 'auto',
    backgroundColor: '#1c86ee',
  },
  listHeader: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 15,
  },
});

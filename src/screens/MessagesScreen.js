import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import dummyData from './dummyData';

const MessagesScreen = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const [messages, setMessages] = useState([]);

  const fetchData = async () => {
    try {
      // Yerel veriyi set ediyoruz
      setMessages(dummyData.users);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Bileşen yüklendiğinde veri çek
  }, []);

  const renderMessages = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate('MessageDetail', {item})}>
          <Image
            source={{uri: item.profileImage}}
            style={styles.profileImage}
          />
          <View style={{marginLeft: 15, flex: 1}}>
            <Text style={{fontSize: 13}}>{item.fullName}</Text>
            <Text style={{color: '#828282', fontSize: 13, marginTop: 1}}>
              {item.messages.time} gönderildi
            </Text>
          </View>
        </TouchableOpacity>
        <Ionicons
          name="camera-outline"
          size={24}
          color="#828282"
          style={{marginLeft: 'auto'}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Ionicons
          name="search-outline"
          size={18}
          style={{
            marginRight: 15,
            marginLeft: 5,
          }}
          color={'#4f4f4f'}
        />
        <TextInput placeholder="Ara" placeholderTextColor="#696969" />
      </View>

      <View
        style={{
          marginBottom: 15,
        }}>
        <Image source={{uri: user?.avatar}} style={styles.avatar} />
        <Text
          style={{
            marginTop: 5,
            marginLeft: 32,
            color: '#696969',
            fontSize: 12,
          }}>
          Notun
        </Text>
      </View>

      <View
        style={{marginHorizontal: 15, flexDirection: 'row', marginBottom: 10}}>
        <Text style={{fontWeight: '600', fontSize: 15}}>Mesajlar</Text>
        <TouchableOpacity
          style={{
            marginLeft: 'auto',
          }}
          onPress={() => navigation.navigate('MessageRequest')}>
          <Text
            style={{
              color: '#094be5',
              fontSize: 16,
            }}>
            İstekler
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList data={messages} renderItem={renderMessages} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchInput: {
    marginTop: 15,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default MessagesScreen;

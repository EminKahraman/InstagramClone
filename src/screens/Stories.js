import {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import dummyData from './dummyData';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stories = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const [stories, setStories] = useState([]);

  const fetchData = async () => {
    try {
      setStories([...dummyData.users]);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderStories = ({item}) => {
    const shortenedUsername =
      item.username.length > 11
        ? `${item.username.substring(0, 11)}...`
        : item.username;

    return (
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('Stories', {item})}>
        <LinearGradient
          colors={['#833AB4', '#FD1D1D', '#F56040']} // Mor-turuncu geçiş
          style={styles.gradient}>
          <Image
            source={{uri: item.profileImage}}
            style={styles.profileImage}
          />
        </LinearGradient>
        <Text style={{fontSize: 12, marginTop: 5}}>{shortenedUsername}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: '#E0E0E0',
      }}>
      <FlatList
        ListHeaderComponent={myStories(user)}
        data={stories}
        renderItem={renderStories}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const myStories = user => {
  return (
    <View style={{marginTop: 5, alignItems: 'center'}}>
      <Image source={{uri: user.avatar}} style={styles.myStories} />
      <View style={styles.addStoryIcon}>
        <Ionicons name="add" size={18} color={'white'} />
      </View>
      <Text style={{fontSize: 12, marginTop: 5}}>Hikayen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  myStories: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    marginHorizontal: 10,
  },

  addStoryIcon: {
    position: 'absolute',
    bottom: 22,
    right: 12,
    backgroundColor: '#4c7cec',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2,
    borderColor:'white'
  },

  iconProfileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // storyContainer: {
  //   flexDirection: 'row',
  // },
  // avatarContainer: {
  //   margin: 10,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  // innerView: {
  //   backgroundColor: 'white', // İçerik için düz bir arka plan
  //   borderRadius: 30, // İç view'in de aynı köşeleri yuvarlak olsun ki gradient dışarı taşmasın
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // avatar: {
  //   height: 60,
  //   width: 60,
  //   padding: 2,
  //   borderRadius: 30,
  // },
  // avatarName: {
  //   paddingTop: 5,
  //   color: 'black',
  // },
});
export default Stories;

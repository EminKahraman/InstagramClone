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

const Stories = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const [stories, setStories] = useState([]);

  const fetchData = async () => {
    try {
      setStories([
        {
          id: 0,
          username: 'Hikayen',
          profileImage: user.avatar,
          stories: {storieImage: 'https://picsum.photos/500/500'},
        },
        ...dummyData.users,
      ]);
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
          <View>
            <Image
              source={{uri: item.profileImage}}
              style={styles.profileImage}
            />
          </View>
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
        data={stories}
        renderItem={renderStories}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80.5,
    height: 80.5,
    borderRadius: 50,
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

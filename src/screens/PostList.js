import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dummyData from './dummyData'; // Yerel veriyi import et
import Ionicons from 'react-native-vector-icons/Ionicons';
import Stories from './Stories';

const PostList = ({navigation, openBottomSheet}) => { // openBottomSheet propunu ekledik
  const [posts, setPosts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  // Axios kullanmak yerine yerel veriyi doğrudan alıyoruz
  const fetchData = async () => {
    try {
      // Yerel veriyi set ediyoruz
      setPosts(dummyData.posts);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Bileşen yüklendiğinde veri çek
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      {/* Üst kısım: Kullanıcı adı ve profil resmi */}
      <View style={styles.header}>
        <Image source={{uri: item.profileImage}} style={styles.profileImage} />
        <Text
          style={styles.username}
          onPress={() =>
            navigation.navigate('ProfileDetail', {isMe: false, item})
          }>
          {item.username}
        </Text>
        <View style={styles.icon}>
          <TouchableOpacity onPress={openBottomSheet}>
            <Ionicons
              name="ellipsis-vertical-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Post görseli */}
      <Image source={{uri: item.postImage}} style={styles.postImage} />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Ionicons
            name="heart-outline"
            size={24}
            color={isLiked ? 'red' : 'black'}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.comments}>{item.comments}</Text>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Açıklama */}
      <Text style={styles.description}>
        <Text style={styles.username}>{item.username}</Text> {item.description}
      </Text>

      {/* Yorumlar */}
      {/*{item.comments.map((comment, index) => (
        <Text key={index} style={styles.comment}>
        <Text style={styles.username}>{comment.user}</Text> {comment.comment}
        </Text>
        ))}*/}
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false} // Scroll göstergesini kap
      ListHeaderComponent={<Stories />}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 'auto',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  postContainer: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  comments: {
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 2,
  },
  description: {
    marginHorizontal: 10,
  },
  comment: {
    marginHorizontal: 10,
    marginTop: 5,
  },
});

export default PostList;

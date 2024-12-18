import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dummyData from './dummyData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommentBottomSheet from '../components/BottomSheets/Comment';
import ShareBottomSheet from '../components/BottomSheets/Share';

const PostList = ({ navigation, openBottomSheet }) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      // Add bookmarked and liked property to each post
      const updatedPosts = dummyData.users.map(post => ({
        ...post,
        bookmarked: false,
        liked: false,
      }));
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const commentBottomSheetReference = React.useRef(null);
  const handleCommentPress = () => {
    commentBottomSheetReference.current?.present();
  };

  const shareBottomSheetReference = React.useRef(null);
  const handleSharePress = () => {
    shareBottomSheetReference.current?.present();
  };

  const toggleBookmark = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
    ));
  };

  const toggleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, liked: !post.liked } : post
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{ uri: item?.profileImage }} style={styles.profileImage} />
        <Text
          style={styles.username}
          onPress={() => navigation.navigate('ProfileDetail', { item })}>
          {item.username}
        </Text>
        <TouchableOpacity
          style={{ marginLeft: 'auto' }}
          onPress={openBottomSheet}>
          <Ionicons name="ellipsis-vertical" size={20} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: item.posts.postImage }} style={styles.postImage} />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <Ionicons
            name={item.liked ? 'heart' : 'heart-outline'}
            size={25}
            style={item.liked ? { color: 'red' } : null}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}
          onPress={handleCommentPress}>
          <Ionicons name="chatbubble-outline" size={24} />
          <Text style={styles.comments}>{item.posts.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSharePress}>
          <Ionicons name="paper-plane-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 'auto' }}
          onPress={() => toggleBookmark(item.id)}>
          <Ionicons
            name={item.bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={{ fontWeight: '500', marginLeft: 10 }}>Beğenmeleri gör</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.description}>{item.posts.description}</Text>
      </View>
      <Text style={styles.postTime}>{item.posts.time}</Text>

      <CommentBottomSheet ref={commentBottomSheetReference} />
      <ShareBottomSheet ref={shareBottomSheetReference} />
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
  },
  postContainer: {
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontSize: 13,
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    height: 370,
    resizeMode: 'cover',
  },
  comments: {
    fontWeight: '600',
    marginRight: 10,
    marginLeft: 2,
  },
  description: {
    marginLeft: 5,
    marginVertical: 5,
    color: '#363636',
  },
  postTime: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#696969',
  },
  comment: {
    marginHorizontal: 10,
    marginTop: 5,
  },
});

export default PostList;

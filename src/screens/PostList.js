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
import {useSelector} from 'react-redux';
import CommentBottomSheet from '../components/BottomSheets/Comment';
import ShareBottomSheet from '../components/BottomSheets/Share';
const PostList = ({navigation, openBottomSheet}) => {
  // openBottomSheet propunu ekledik
  const {user, profileImageUrl} = useSelector(state => state.auth);
  const [posts, setPosts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const commentBottomSheetReference = React.useRef(null);
  const handleCommentPress = () => {
    commentBottomSheetReference.current?.present();
  };

  const shareBottomSheetReference = React.useRef(null);
  const handleSharePress = () => {
    shareBottomSheetReference.current?.present();
  };

  const renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{uri: item?.profileImage}} style={styles.profileImage} />
        <Text
          style={styles.username}
          onPress={() => navigation.navigate('ProfileDetail', {item})}>
          {item.username}
        </Text>
        <TouchableOpacity
          style={{marginLeft: 'auto'}}
          onPress={openBottomSheet}>
          <Ionicons name="ellipsis-vertical-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* Post görseli */}
      <Image source={{uri: item.postImage}} style={styles.postImage} />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={25}
            style={isLiked ? {color: 'red'} : null}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}
          onPress={handleCommentPress}>
          <Ionicons name="chatbubble-outline" size={24} />
          <Text style={styles.comments}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSharePress}>
          <Ionicons name="paper-plane-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 'auto'}}
          onPress={() => setIsBookmarked(!isBookmarked)}>
          <Ionicons
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={{fontWeight: '600', marginLeft: 10, marginBottom: 5}}>
          Beğenmeleri gör
        </Text>
      </TouchableOpacity>

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
      <CommentBottomSheet ref={commentBottomSheetReference} />
      <ShareBottomSheet ref={shareBottomSheetReference} />
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
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
    fontWeight: '600',
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

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import MyPostBottomSheet from '../components/BottomSheets//MyPost';
import PostsHeader from '../header/PostsHeader';
import CommentBottomSheet from '../components/BottomSheets/Comment';
import ShareBottomSheet from '../components/BottomSheets/Share';

const PostDetail = ({navigation, route}) => {
  const {item} = route.params;
  const [posts, setPosts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const {user} = useSelector(state => state.auth);

  const defaultBottomSheetReference = React.useRef(null);
  const handleMyPostBottomSheet = () => {
    defaultBottomSheetReference.current?.present();
  };

  const commentBottomSheetReference = React.useRef(null);
  const handleCommentPress = () => {
    commentBottomSheetReference.current?.present();
  };

  const shareBottomSheetReference = React.useRef(null);
  const handleSharePress = () => {
    shareBottomSheetReference.current?.present();
  };

  return (
    <SafeAreaView style={styles.postContainer}>
      <PostsHeader navigation={navigation} />

      <View style={styles.header}>
        <Image source={{uri: user.avatar}} style={styles.profileImage} />
        <Text style={styles.username}>{user.username}</Text>
        <TouchableOpacity
          onPress={handleMyPostBottomSheet}
          style={{marginLeft: 'auto'}}>
          <Ionicons name="ellipsis-vertical-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View>
        <Image source={{uri: item?.url}} style={styles.postImage} />
      </View>

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
          <Text style={styles.comments}>51</Text>
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

      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            Beğenmeleri gör
          </Text>
        </TouchableOpacity>
        <Text>
          <Text style={styles.username}>{user.username}</Text> {item?.text}
        </Text>
      </View>

      <MyPostBottomSheet ref={defaultBottomSheetReference} />
      <CommentBottomSheet ref={commentBottomSheetReference} />
      <ShareBottomSheet ref={shareBottomSheetReference} />
    </SafeAreaView>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  saveIcon: {
    marginLeft: 'auto',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 7,
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
});

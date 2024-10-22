import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomePageHeader from '../header/HomePageHeader';
import PostList from './PostList';
import PostBottomSheet from '../components/BottomSheets/Post';

const HomePageScreen = ({navigation}) => {
  const defaultBottomSheetReference = React.useRef(null);
  const handlePostBottomSheet = () => {
    defaultBottomSheetReference.current?.present();
  };
  return (
    <View style={styles.container}>
      <HomePageHeader navigation={navigation} />
      <PostList navigation={navigation} openBottomSheet={handlePostBottomSheet} />

      <PostBottomSheet ref={defaultBottomSheetReference}  />
    </View>
  );
};

export default HomePageScreen;

const styles = StyleSheet.create({
  container: {flex: 1,
    backgroundColor:"white"
  },
});

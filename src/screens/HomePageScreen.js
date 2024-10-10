import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomePageHeader from '../header/HomePageHeader';
import PostList from './PostList';

const HomePageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomePageHeader navigation={navigation} />
      <PostList navigation={navigation} />
    </View>
  );
};

export default HomePageScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});

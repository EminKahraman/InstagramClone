import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import HomePageHeader from '../header/HomePageHeader';
import PostList from './PostList';
const HomePageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomePageHeader navigation={navigation} />
      <PostList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomePageScreen;

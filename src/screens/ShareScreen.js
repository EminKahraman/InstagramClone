import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ShareHeader from '../header/ShareHeader';
import HomeStorage from '../firebaseStorage/screens/HomeStorage';

const ShareScreen = () => {
  return (
    <View style={styles.container}>
      <ShareHeader />
      <HomeStorage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ShareScreen;

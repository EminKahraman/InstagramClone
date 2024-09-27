import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ShareHeader from '../header/ShareHeader';

const ShareScreen = () => {
  return (
    <View style={styles.container}>
      <ShareHeader />
      <View style={styles.text}>
        <Text>Share Sayfası</Text>
      </View>
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

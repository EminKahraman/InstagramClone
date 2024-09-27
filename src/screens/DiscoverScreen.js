import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DiscoverHeader from '../header/DiscoverHeader';

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <View style={styles.text}>
        <Text>Discover Sayfası</Text>
      </View>
    </View>
  );
};

export default DiscoverScreen;

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

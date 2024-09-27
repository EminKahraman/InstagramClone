import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReelsHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Reels</Text>
        <Ionicons name="camera-outline" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default ReelsHeader;

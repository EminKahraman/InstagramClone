import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReelsHeader = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>

        <Ionicons name="camera-outline" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default ReelsHeader;

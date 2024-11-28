import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReelsHeader = () => {
  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        right: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 15,
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
        Reels
      </Text>
      <Ionicons name="camera-outline" size={24} color="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ReelsHeader;

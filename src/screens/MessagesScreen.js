import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MessagesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MessagesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessagesScreen;

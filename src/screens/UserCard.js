import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserCard = props => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {},
});

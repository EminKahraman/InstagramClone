import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const ProfileHeader = ({
  navigation,
  username,
  isMe,
  onLeftPress,
  onRightOnePress,
  onRightTwoPress,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={onLeftPress}>
          <Ionicons
            name={isMe ? 'log-out-outline' : 'arrow-back-outline'}
            size={24}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>

        <Text style={styles.username}>{username}</Text>
        <TouchableOpacity
          onPress={isMe ? onRightOnePress : null}
          style={{marginLeft: 'auto', marginRight: 20}}>
          <Ionicons
            name={isMe ? 'add-circle-outline' : 'paper-plane-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={isMe ? onRightTwoPress : null}>
          <Ionicons
            name={isMe ? 'menu-outline' : 'ellipsis-vertical-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  username: {
    fontWeight: '700',
    fontSize: 20,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
    height: 450,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileHeader;

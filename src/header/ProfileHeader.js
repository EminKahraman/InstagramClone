import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const ProfileHeader = ({
  navigation,
  username,
  isMe,
  onLeftOnePress,
  onLeftTwoPress,
  onRightOnePress,
  onRightTwoPress,
}) => {
  const {accountPrivacy} = useSelector(state => state.auth);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {isMe ? (
          <Pressable onPress={onLeftOnePress}>
            <Ionicons
              name={accountPrivacy ? 'lock-closed-outline' : null}
              size={24}
              style={{marginRight: 5}}
            />
          </Pressable>
        ) : (
          <Pressable onPress={onLeftOnePress}>
            <Ionicons
              name={'arrow-back-outline'}
              size={24}
              style={{marginRight: 30}}
            />
          </Pressable>
        )}

        <Pressable onPress={onLeftTwoPress}>
          <Text style={styles.username}>{username}</Text>
        </Pressable>
        <TouchableOpacity
          onPress={onRightOnePress}
          style={{marginLeft: 'auto', marginRight: 25}}>
          <Ionicons
            name={isMe ? 'add-circle-outline' : 'paper-plane-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRightTwoPress}>
          <Ionicons
            name={isMe ? 'menu-outline' : 'ellipsis-vertical-outline'}
            size={24}
            color="black"
            style={{marginRight: 5}}
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

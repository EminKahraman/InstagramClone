import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteMessage} from '../../redux/messagesSlice';

const MessageItem = ({message}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const isSelf = message.userId === user.id; // Kullanıcı ID'sini kontrol edin

  const handleLongPress = () => {
    Alert.alert(
      'Mesajı Sil',
      'Bu mesajı silmek istediğinizden emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Sil',
          onPress: () => dispatch(deleteMessage({ userId: user.id, messageId: message.id })),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <View
        style={[
          styles.messageContainer,
          {
            alignSelf: isSelf ? 'flex-end' : 'flex-start',
            backgroundColor: isSelf ? '#1b8bb4' : 'gray',
          },
        ]}>
        <Text style={styles.messageText}>{message.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 5,
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 20,
    flexShrink: 1,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 14,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  senderName: {
    fontWeight: 'bold',
    color: 'white',
  },
  timestamp: {
    fontSize: 12,
    color: 'white',
  },
  messageImage: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
});

export default MessageItem;

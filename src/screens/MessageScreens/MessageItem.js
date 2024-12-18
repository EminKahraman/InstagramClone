import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';


const MessageItem = ({message, participants}) => {
  const author = participants.find(p => p.uuid === message.authorUuid);
  const isSelf = message.authorUuid === 'you';

  console.log("author",author)

  return (
    <View
      style={[
        styles.messageContainer,
        {
          alignSelf: isSelf ? 'flex-end' : 'flex-start',
          backgroundColor: isSelf ? '#1b8bb4' : 'gray',
        },
      ]}>
      {author && (
        <TouchableOpacity
          style={styles.header}>
          <Image source={{uri: author.avatarUrl || ''}} style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.senderName}>{author.name}</Text>
            <Text style={styles.timestamp}>
              {dayjs(message.sentAt).format('HH:mm')}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 5,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    flexShrink: 1,
    flexGrow: 0,
    maxWidth: '80%',
    minWidth: '45%',
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

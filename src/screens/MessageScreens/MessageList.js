import React, {useEffect, useRef} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import dayjs from 'dayjs';
import {useSelector} from 'react-redux';
import MessageItem from './MessageItem';

const MessageList = () => {
  const {messages, participants} = useSelector(state => state.message);

  const yourRef = useRef(null);

  let lastMessageDate = null;

  useEffect(() => {
    setTimeout(() => {
      yourRef.current?.scrollToEnd();
    }, 100);
  }, [messages]);

  const renderMessage = ({item}) => {
    const messageDate = dayjs(item.sentAt).format('DD-MM-YYYY');
    const showDateSeparator = lastMessageDate !== messageDate;

    lastMessageDate = messageDate;

    return (
      <View>
        {showDateSeparator && (
          <Text style={styles.dateSeparator}>{messageDate}</Text>
        )}
        <MessageItem message={item} participants={participants} />
      </View>
    );
  };

  return (
    <FlatList
      ref={yourRef}
      data={messages}
      keyExtractor={item => item.id.toString()} // Benzersiz bir key değeri döndürdüğünden emin olun
      renderItem={renderMessage}
    />
  );
};

export default MessageList;

const styles = StyleSheet.create({
  dateSeparator: {
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
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
      <View >
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
      initialNumToRender={5}
      data={messages}
      keyExtractor={item => item.uuid}
      renderItem={renderMessage}
      style={{flex:1}}
    />
  );
};

export default MessageList;

const styles = StyleSheet.create({
  dateSeparator: {
    flex: 1,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

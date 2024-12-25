import React, {useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  setMessages,
  setEditedMessage,
  updateMessages,
  setLoading,
} from '../redux/messagesSlice';
import MessageList from './MessageScreens/MessageList';
import InputBar from './MessageScreens/InputBar';
import MessageDetailHeader from '../header/MessageDetailHeader';

const MessageDetail = ({navigation, route}) => {
  const {item} = route.params || {item: null};
  const dispatch = useDispatch();
  const {messages, participants, editedMessage, loading} = useSelector(
    state => state.message,
  );

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get('https://dummyjson.com/comments?limit=10')
      .then(response => {
        dispatch(setMessages(response.data.comments));
        dispatch(setLoading(false));
      })
      .catch(error => {
        console.error(error);
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  const sendMessage = () => {
    if (editedMessage.trim() === '') return;

    axios
      .post('https://dummyjson.com/comments/add', {
        body: editedMessage, // API'nin beklediği doğru alan adı
        postId: item.id, // item.id'yi doğru şekilde gönderdiğinizden emin olun
        userId: 5, // Kullanıcı ID'sini doğru şekilde gönderdiğinizden emin olun
      })
      .then(response => {
        const newMessage = {
          ...response.data,
          id: new Date().getTime().toString(), // Benzersiz bir id oluşturun
        };
        dispatch(updateMessages(newMessage));
        dispatch(setEditedMessage(''));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <MessageDetailHeader navigation={navigation} item={item} />
      <MessageList />
      <InputBar
        editedMessage={editedMessage}
        setEditedMessage={text => dispatch(setEditedMessage(text))}
        onSendMessage={sendMessage}
      />
    </KeyboardAvoidingView>
  );
};

export default MessageDetail;
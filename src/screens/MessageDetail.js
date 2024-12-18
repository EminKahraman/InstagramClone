import React, { useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMessages,
  setParticipants,
  setEditedMessage,
  updateMessages,
  setLoading
} from '../redux/messagesSlice';
import MessageList from './MessageScreens/MessageList';
import InputBar from './MessageScreens/InputBar';
import MessageDetailHeader from '../header/MessageDetailHeader';

const MessageDetail = ({ navigation, route }) => {
  const { item } = route.params || { item: null };
  const dispatch = useDispatch();
  const { messages, participants, editedMessage, loading } = useSelector(state => state.message);


  useEffect(() => {
    const fetchMessagesAndParticipants = async () => {
      setLoading(true)
      try {
        const messagesResponse = await axios.get(
          'https://dummy-chat-server.tribechat.pro/api/messages/latest',
        );
        dispatch(setMessages(messagesResponse.data));

        const participantsResponse = await axios.get(
          'http://dummy-chat-server.tribechat.pro/api/participants/all',
        );
        dispatch(setParticipants(participantsResponse.data));
      } catch (error) {
        if (error.response) {
          // Sunucudan dönen yanıt hatası
          console.error('Response error:', error.response.data);
        } else if (error.request) {
          // Sunucuya istek gitti fakat cevap alınamadı
          console.error('Request error:', error.request);
        } else {
          // İstek yapılmadan önce oluşan hata
          console.error('Error:', error.message);
        }
      } finally {
        setLoading(false); // Yükleme durumunu kaldırma
      }
    };

    fetchMessagesAndParticipants();
  }, []);




  const sendMessage = async () => {
    if (editedMessage.trim() === '') return;

    try {
      const response = await axios.post(
        'http://dummy-chat-server.tribechat.pro/api/messages/new',
        {
          text: editedMessage,
        },
      );

      dispatch(updateMessages(response.data))

      dispatch(setEditedMessage(''));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <MessageDetailHeader navigation={navigation} item={item} />
      <MessageList />
      <InputBar
        editedMessage={editedMessage}
        setEditedMessage={text => dispatch(setEditedMessage(text))}
        onSendMessage={sendMessage}
      />
    </SafeAreaView>
  );
};

export default MessageDetail;

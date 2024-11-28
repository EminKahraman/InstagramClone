import {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import MessageDetailHeader from '../header/MessageDetailHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MessageDetail = ({navigation, route}) => {
  const {item} = route.params || {item: null};
  const [editedMessage, setEditedMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const yourRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      yourRef.current?.scrollToEnd();
    }, 100);
  }, [messages]);

  useEffect(() => {
    const fetchMessages = async () => {
      const storedMessages = await AsyncStorage.getItem('messages');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    };
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (editedMessage) {
      const newMessage = {
        id: messages.length + 1,
        message: editedMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      await AsyncStorage.setItem('messages', JSON.stringify(newMessages));
      setEditedMessage('');

      // Send message to the server
      try {
        const response = await axios.post(
          'http://dummy-chat-server.tribechat.pro/api/messages/new',
          {
            message: editedMessage,
          },
        );
        console.log('Message sent successfully:', response.data);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{flex: 1}}>
        <MessageDetailHeader navigation={navigation} item={item} />
        <ScrollView
          style={{flex: 1}}
          ref={yourRef}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'flex-end',
              marginHorizontal: 15,
            }}>
            <Image
              source={{uri: item?.profileImage}}
              style={styles.profileImage}
            />
            <View style={styles.message}>
              <Text>{item?.messages.message}</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              alignItems: 'flex-end',
              marginHorizontal: 15,
            }}>
            <View>
              {messages.map((message, index) => (
                <View key={index}>
                  <View style={styles.myMessage}>
                    <Text style={{color: 'white'}}>{message.message}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.inputContainer}>
          {editedMessage ? (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
              }}>
              <Ionicons
                name={'search'}
                size={22}
                color={'#094be5'}
                style={{padding: 6}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#094be5',
                borderRadius: 20,
              }}>
              <Ionicons
                name={'camera'}
                size={24}
                color={'white'}
                style={{padding: 6}}
              />
            </TouchableOpacity>
          )}

          <TextInput
            placeholder="Mesaj..."
            placeholderTextColor="#4f4f4f"
            style={{marginLeft: 10, flex: 1}}
            value={editedMessage}
            onChangeText={setEditedMessage}
            flexWrap="wrap"
            multiline
          />
          {editedMessage ? (
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                backgroundColor: '#094be5',
                borderRadius: 20,
              }}
              onPress={sendMessage}>
              <Ionicons
                name="paper-plane"
                size={22}
                color={'white'}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 5,
                }}
              />
            </TouchableOpacity>
          ) : (
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <TouchableOpacity>
                <Ionicons name="mic-outline" size={26} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="image-outline"
                  size={26}
                  style={{marginHorizontal: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="happy-outline" size={26} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageDetail;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#dddddd',
    marginHorizontal: 15,

    marginBottom: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  message: {
    backgroundColor: '#dddddd',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  myMessage: {
    backgroundColor: '#094be5',
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginBottom: 3,
  },
});

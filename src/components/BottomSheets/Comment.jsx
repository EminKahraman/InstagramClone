import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const CommentBottomSheet = forwardRef((props, ref) => {
  const {user} = useSelector(state => state.auth);
  const [text, setText] = useState('');

  return (
    <BottomSheet ref={ref} {...props}>
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            Yorumlar
          </Text>
          <Ionicons
            name={'ellipsis-vertical'}
            size={17}
            style={{position: 'absolute', right: 15}}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Henüz Yorum Yok
          </Text>
          <Text style={{marginTop: 10, color: '#363636'}}>
            Konuşmayı başlat.
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            marginBottom: 35,
            marginHorizontal: 15,
            borderTopColor: '#f2f2f2',
            borderTopWidth: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image source={{uri: user.avatar}} style={styles.profileImage} />

            <TextInput
              placeholder={`${user.username} olarak yorum yap...`}
              placeholderTextColor={'#4f4f4f'}
              style={{marginLeft: 20, flex: 1}}
              value={text}
              onChangeText={text => setText(text)}
            />
            <TouchableOpacity style={{marginLeft: 'auto'}}>
              {text ? (
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: '#094be5',
                  }}>
                  <Ionicons name={'arrow-up'} size={25} style={styles.upIcon} />
                </View>
              ) : (
                <Ionicons name={'happy-outline'} size={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
});

export default CommentBottomSheet;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  upIcon: {
    color: 'white',
    paddingHorizontal: 10,
  },
});

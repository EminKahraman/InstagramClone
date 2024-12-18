import React,{useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputBar = ({onSendMessage, editedMessage, setEditedMessage}) => {
  return (
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
              onPress={onSendMessage}>
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
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#dddddd',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#cfcfcf',
    borderRadius: 1000,
    padding: 14,
    marginRight: 10,
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cfcfcf',
    padding: 14,
    borderRadius: 1000,
  },
});

export default InputBar;

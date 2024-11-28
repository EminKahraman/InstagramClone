import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageRequestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HiddenRequest')}>
        <View style={styles.eyeOfIcon}>
          <Ionicons name="eye-off-outline" size={20} />
        </View>
        <Text style={{marginLeft: 20, color: '#363636'}}>
          Gizlenen İstekler
        </Text>
        <Text style={{marginLeft: 'auto', color: '#363636'}}>0</Text>
        <Ionicons name="chevron-forward-outline" size={20} color={'#363636'} />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.messageIcon}>
          <Ionicons name="chatbubble-ellipses-outline" size={45} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
          Hiç mesaj isteği yok
        </Text>
        <Text style={{fontSize: 13, color: '#363636'}}>
          Hiç mesaj isteğin yok.
        </Text>
      </View>
    </View>
  );
};

export default MessageRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  eyeOfIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cfcfcf',
  },
  messageIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

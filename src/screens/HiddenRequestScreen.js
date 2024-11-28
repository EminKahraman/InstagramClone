import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HiddenRequestScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageIcon}>
        <Ionicons name="chatbubble-ellipses-outline" size={45} />
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
        Gizlenen istek yok
      </Text>

      <Text style={styles.text}>Rahatsız edici / kırıcı olabilecek veya</Text>
      <Text style={styles.text}>istenmeyen mesaj istekleri burada</Text>
      <Text style={styles.text}>görünecek.</Text>
      <TouchableOpacity>
        <Text style={{color: '#094be5', fontSize: 13, marginTop: 5}}>
          Gizlenen sözcük tercihlerini yönet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HiddenRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    fontSize: 13,
    color: '#363636',
    marginBottom: 5,
  },
});

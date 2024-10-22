import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScreenTwo = ({route}) => {
  const {isMe} = route.params || {isMe: false};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {isMe ? (
          <>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>
              Bir anını dünyayla paylaş
            </Text>

            <TouchableOpacity>
              <Text
                style={{color: '#094be5', fontWeight: '600', marginTop: 10}}>
                İlk Reels videonu oluştur
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Ionicons name="close-circle-outline" size={90} />
            <Text style={styles.text}>Henüz Hiç Gönderi Yok</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {fontWeight: 'bold', fontSize: 22},
});

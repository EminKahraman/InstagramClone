import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScreenThree = ({route}) => {
  const {isMe} = route.params || {isMe: false};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {isMe ? (
          <>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>
              Olduğun Fotoğraf
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginBottom: 10}}>
              ve Videolar
            </Text>
            <Text style={{color: '#696969'}}>
              İnsanlar seni fotoğraf ve videolarda
            </Text>
            <Text style={{color: '#696969'}}>
              etiketlediğinde, burada görünecek.
            </Text>
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

export default ScreenThree;

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

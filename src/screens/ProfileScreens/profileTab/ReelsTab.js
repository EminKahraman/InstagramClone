import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReelsTab = ({ route }) => {
  const { isMe } = route.params || { isMe: false };

  return (
    <View style={styles.container}>
        {isMe ? (
          <View style={{ marginTop: 50,alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
              Bir anını dünyayla paylaş
            </Text>

            <TouchableOpacity>
              <Text
                style={{ color: '#094be5', fontWeight: '600', marginTop: 10 }}>
                İlk Reels videonu oluştur
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="close-circle-outline" size={90} />
            <Text style={styles.text}>Henüz Hiç Gönderi Yok</Text>
          </View>
        )}
    </View>
  );
};

export default ReelsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  text: { fontWeight: 'bold', fontSize: 22 },
});

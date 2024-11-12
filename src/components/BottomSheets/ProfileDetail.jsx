import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomSheet} from '../BottomSheet';

const ProfileDetailBottomSheet = forwardRef((props, ref) => {
  return (
    <BottomSheet ref={ref} {...props}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={[styles.text, {color: 'red'}]}>Kısıtla</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.text, {color: 'red'}]}>Engelle</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.text, {color: 'red'}]}>Şikayet Et</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Bu hesap hakkında</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Paylaşılan hareketleri gör</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Hikayeni gizle</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Profilin URL'sini kopyala</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Profili gönder</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>QR kodu</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Bildirimler</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default ProfileDetailBottomSheet;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});

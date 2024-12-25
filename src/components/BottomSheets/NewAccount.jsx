import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomSheet} from '../BottomSheet';

const NewAccountBottomSheet = forwardRef((props, ref) => {
  return (
    <BottomSheet ref={ref} {...props} style={{marginHorizontal: 5}}>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 15,
          marginBottom: 25,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            marginBottom: 25,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Hesap ekle
        </Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#094be5', borderWidth: 0}]}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Mevcut hesaba giriş yap
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 16, fontWeight: '600', textAlign: 'center'}}>
            Yeni hesap oluştur
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default NewAccountBottomSheet;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    marginBottom: 15,
  },
});

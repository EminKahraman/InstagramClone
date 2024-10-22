import {StyleSheet, Text, View} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostBottomSheet = forwardRef((props, ref) => {
  return (
    <BottomSheet ref={ref} {...props}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: 1,
            paddingVertical: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.icon}>
              <Ionicons name={'bookmark-outline'} size={25} />
            </View>
            <Text style={{marginTop: 5}}>Kaydet</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.icon}>
              <Ionicons name={'sync-outline'} size={25} />
            </View>
            <Text style={{marginTop: 5}}>Remiksle</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.icon}>
              <Ionicons name={'qr-code-outline'} size={25} />
            </View>
            <Text style={{marginTop: 5}}>QR kodu</Text>
          </View>
        </View>

        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'star-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Favorilere ekle</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'person-remove-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Takibi bırak</Text>
          </View>

          <View
            style={{
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'language-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Çeviriler</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'reader-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Kapalı Açıklamalı Altyazılar</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'information-circle-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Bu gönderiyi neden görüyorsun?</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'eye-off-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Gizle</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'person-circle-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Bu hesap hakkında</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'alert-circle-outline'}
              size={25}
              style={{marginRight: 15, color: 'red'}}
            />
            <Text style={{fontSize: 16, color: 'red'}}>Şikayet Et</Text>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
});

export default PostBottomSheet;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  icon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
});

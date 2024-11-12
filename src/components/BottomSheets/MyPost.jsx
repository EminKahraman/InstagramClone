import {StyleSheet, Text, View} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyPostBottomSheet = forwardRef((props, ref) => {
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
              name={'logo-facebook'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Facebook'ta Paylaş</Text>
            <Ionicons
              name={'chevron-forward-outline'}
              size={25}
              style={{marginLeft: 'auto'}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'archive-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Arşivle</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'heart-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Beğenme Sayısını Göster</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'paper-plane-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Paylaşım sayısını göster</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'ban-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Yorum yapmayı kapat</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'film-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>
              Bu gönderiden Reels videosu oluştur
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'pencil-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Düzenle</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'pin-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Profiline tuttur</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'trash-outline'}
              size={25}
              style={{marginRight: 15, color: 'red'}}
            />
            <Text style={{fontSize: 16, color: 'red'}}>Sil</Text>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
});

export default MyPostBottomSheet;

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

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import { setAccountPrivacy } from '../../redux/authSlice';

const AccountPrivacy = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const {accountPrivacy} = useSelector(state => state.auth);
  return (
    <BottomSheet ref={ref} {...props}>
      {accountPrivacy ? (
        <View style={{marginBottom: 40}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 15,
              marginBottom: 15,
            }}>
            Herkese açık hesaba geç?
          </Text>

          <View style={{borderWidth: 1, borderColor: '#f2f2f2'}} />

          <View style={{marginHorizontal: 15}}>
            <View
              style={{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
              <Ionicons name={'film-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                Herkes senin gönderilerini, Reels videolarını ve hikayelerini
                görebilir ve sana ait orijinal ses {'\n'}çeriğini ve metni
                kullanabilir.
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <Ionicons name={'at-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                Bu kimlerin sana mesaj gönderebileceğini, seni
                etiketleyebileceğini veya senden {'\n'}\@bahsedebileceğini
                değiştirmeyecek.
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <Ionicons name={'repeat-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                İnsanlar gönderilerinin ve Reels videolarının {'\n'}tamamı veya
                bir kısmını remiksler, sekanslar, {'\n'}şablonlar ve çıkartmalar
                gibi özelliklerle yeniden kullanabilir ve bunalrı Reels
                videolarının veya gönderilerinin bir parçası olarak indirebilir.
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name={'cog-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                Ayarlarında yeniden kullanımı her gönderi veya {'\n'}Reels
                videosu için kapatabilir veya varsayılanı değiştirebilirsin.
              </Text>
            </View>
          </View>

          <View
            style={{borderWidth: 1, borderColor: '#f2f2f2', marginVertical: 15}}
          />

          <TouchableOpacity
          onPress={() => {
            dispatch(setAccountPrivacy(false));
            ref.current?.dismiss();
          }}
            style={{
              backgroundColor: '#1c86ee',
              marginHorizontal: 15,
              padding: 10,
              alignItems: 'center',
              borderRadius: 7,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Herkese açık hesaba geç
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{marginBottom: 40}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 15,
              marginBottom: 15,
            }}>
            Gizli Hesaba geç?
          </Text>

          <View style={{borderWidth: 1, borderColor: '#f2f2f2'}} />

          <View style={{paddingHorizontal: 15}}>
            <View
              style={{flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
              <Ionicons name={'film-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                Sadece takipçilerin fotoğraflarını ve videolarını görebilecek.
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <Ionicons name={'at-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                Bu, sana kimelrin mesaj gönderebileceğini, seni
                etiketleyebileceğini veya senden{'\n'}\@bahsedebileceğini
                değiştirmeyecek, ancak seni takip etmeyen kişileri
                etiketleyemeyeceksin.
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name={'repeat-outline'} size={25} />
              <Text style={{marginLeft: 20}}>
                Hiç kimse içeriği yeniden kullanamaz. İçeriği{'\n'}daha önce
                remiksler, sekanslar, şablonlar veya çıkartma gibi özelliklerle
                kullanan tüm Reels{'\n'}videoları, gönderiler ve hikayeler
                silinecek. Eğer 24 saat içinde tekrar herkese açık bir hesaba
                {'\n'}geçersen bunlar geri yüklenecek.
              </Text>
            </View>
          </View>

          <View
            style={{borderWidth: 1, borderColor: '#f2f2f2', marginVertical: 15}}
          />

          <TouchableOpacity
            onPress={() => {
              dispatch(setAccountPrivacy(true));
              ref.current?.dismiss();
            }}
            style={{
              backgroundColor: '#1c86ee',
              marginHorizontal: 15,
              padding: 10,
              alignItems: 'center',
              borderRadius: 7,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Gizli hesaba geç
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </BottomSheet>
  );
});

export default AccountPrivacy;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
});

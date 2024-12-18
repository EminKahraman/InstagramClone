import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { setUser } from '../redux/authSlice';

const SettingsScreen = ({ navigation }) => {
  const { accountPrivacy } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    Alert.alert('Çıkış Yap', 'Çıkış yapmak istediğinizden emin misiniz?', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Çıkış Yap',
        onPress: async () => {
          await auth().signOut();
          dispatch(setUser(null));
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <View style={styles.searchInput}>
              <Ionicons
                name="search"
                size={20}
                style={styles.searchIcon}
                color={'gray'}
              />
              <TextInput placeholder="Ara" placeholderTextColor="#666666" />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Text style={{ color: '#4f4f4f', fontWeight: '600' }}>Hesabın</Text>
              <Text style={{ marginLeft: 'auto', fontSize: 16 }}>Meta</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileDetail')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Ionicons
                name="person-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <View>
                <Text style={{ fontSize: 16, marginBottom: 2 }}>
                  Hesaplar Merkezi
                </Text>
                <Text style={{ color: '#4f4f4f', fontSize: 13 }}>
                  Şifre, güvenlik, kişisel detaylar, reklam tercihleri
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 12, color: '#5f5f5f' }}>
                Meta teknolojileri arasıbndaki bağlantılı deneyimlerini ve hesap
                ayarlarını yönet.{" "}
                <Text style={{ fontSize: 12, color: '#1c0f45', fontWeight: "500" }}>
                  Daha fazla bilgi al
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Instagram'ı nasıl kullanıyorsun?
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="bookmark-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Kaydedildi</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="archive-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Arşiv</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="timer-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Hareketlerin</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="notifications-outline"
                size={25}
                style={{ marginRight: 15 }}
              />
              <Text style={{ fontSize: 16 }}>Bildirimler</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="time-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Zaman yönetimi</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              İçeriklerini kimler görebilir?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('AccountPrivacy')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="lock-closed-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Hesap gizliliği</Text>
              <Text style={{ marginLeft: 'auto', color: 'gray', marginRight: 5 }}>
                {accountPrivacy ? 'Gizli' : 'Herkese Açık'}
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons name="star" size={25} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 16 }}>Yakın Arkadaşlar</Text>
              <Text style={{ marginLeft: 'auto', color: 'gray', marginRight: 5 }}>
                0
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="grid-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Çapraz paylaşım</Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="ban-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Engellenenler</Text>
              <Text style={{ marginLeft: 'auto', color: 'gray', marginRight: 5 }}>
                0
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="eye-off-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>
                Hikayeyi ve canlı videoları gizle
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Başkalarının seninle etkileşimleri
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Mesajlar ve hikaye yanıtlar</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="attach-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Etiket ve bahsetmeler</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="chatbubble-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Yorumlar</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="repeat-outline"
                size={25}
                style={{ marginRight: 15 }}
              />
              <Text style={{ fontSize: 16 }}>Paylaşım</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="code-slash-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Kısıtlılar</Text>
              <Text style={{ marginLeft: 'auto', marginRight: 5, color: 'gray' }}>
                0
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="alert-circle-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Etkileşimi sınırla</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="text-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Gizlenen Sözcükler</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="person-add-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>
                Arkadaşları takip et ve davet et
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Neler görüyorsun?
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="star-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Favoriler</Text>
              <Text style={{ marginLeft: 'auto', color: 'gray', marginRight: 5 }}>
                0
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="notifications-off-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Sessize alınanlar</Text>
              <Text style={{ marginLeft: 'auto', color: 'gray', marginRight: 5 }}>
                0
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="partly-sunny-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Önerilen içerikler</Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="heart-dislike-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Beğenme ve paylaşım sayıları</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Neler görüyorsun?
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="download-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Arşivleme ve indirme</Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="accessibility-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Erişilebilirlik ve çeviriler</Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="language-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Dil</Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="cellular-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>
                Veri kullanımı ve medya kalitesi
              </Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons name="tv-outline" size={25} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 16 }}>
                Uygulama internet sitesi izinleri
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Aileler için
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="home-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Aile Merkezi</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Profesyoneller için
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="stats-chart-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Hesap türü ve araçlar</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="checkbox-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Meta Verified</Text>
              <Text style={{ marginLeft: 'auto', marginRight: 5, color: 'gray' }}>
                Abone değilsin
              </Text>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Siparişlerin ve bağış kampanyaların
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="file-tray-full-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Siparişler ve ödemeler</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Daha fazla bilgi ve destek
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="help-buoy-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Yardım</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="shield-checkmark-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Gizlilik Merkezi</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="person-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Hesap Durumu</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="information-circle-outline"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Hakkında</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Meta'nın diğer ürünleri
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="logo-whatsapp"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>WhatsApp</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons
                name="logo-instagram"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Threads</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Ionicons
                name="logo-facebook"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontSize: 16 }}>Facebook</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={'gray'}
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
          }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ color: '#4f4f4f', fontWeight: '500', marginTop: 10 }}>
              Giriş yap
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{ fontSize: 16, color: '#1c86ee' }}>Hesap ekle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 15,
              }}
              onPress={handleLogout}>
              <Text style={{ fontSize: 16, color: 'red' }}>Çıkış yap</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 5,
  },

  searchInput: {
    marginTop: 15,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#eee9e9',
  },
});

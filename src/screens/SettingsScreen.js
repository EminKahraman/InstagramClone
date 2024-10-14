import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View style={{backgroundColor: 'white', marginBottom: 6}}>
          <View style={styles.searchInput}>
            <Ionicons
              name="search-outline"
              size={20}
              style={styles.searchIcon}
              color="#696969"
            />
            <TextInput placeholder="Ara" placeholderTextColor="#696969" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              marginHorizontal: 10,
            }}>
            <Text style={{color: '#363636'}}>Hesabın</Text>
            <Text style={{marginLeft: 'auto', fontSize: 15}}>Meta</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileDetail')}
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              alignItems: 'center',
            }}>
            <Ionicons
              name="person-circle-outline"
              size={25}
              style={{marginRight: 10}}
            />
            <View>
              <Text style={{fontSize: 16}}>Hesaplar Merkezi</Text>
              <Text style={{color: '#696969', fontSize: 13}}>
                Şifre, güvenlik, kişisel detaylar, reklam tercihleri
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={25}
              style={{marginLeft: 'auto'}}
            />
          </TouchableOpacity>

          <View style={{marginHorizontal: 10, marginVertical: 20}}>
            <Text style={{fontSize: 12, color: '#696969'}}>
              Meta teknolojileri arasıbndaki bağlantılı deneyimlerini ve hesap
              ayarlarını yönet.
              <Text style={{fontSize: 12, color: '#1c0f45'}}>
                Daha fazla bilgi al
              </Text>
            </Text>
          </View>
        </View>

        <View style={{backgroundColor: 'white', marginBottom: 6}}>
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#363636', marginTop: 15}}>
              Instagram'ı nasıl kullanıyorsun?
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Ionicons
                name="bookmark-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Kaydedildi</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="archive-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Arşiv</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Ionicons
                name="timer-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Hareketlerin</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="notifications-outline"
                size={25}
                style={{marginRight: 15}}
              />
              <View>
                <Text style={{fontSize: 16}}>Bildirimler</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Ionicons
                name="time-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Zaman yönetimi</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{backgroundColor: 'white', marginBottom: 6}}>
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#363636', marginTop: 15}}>
              İçeriklerini kimler görebilir?
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Ionicons
                name="lock-closed-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Hesap gizliliği</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="star-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Yakın Arkadaşlar</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Ionicons
                name="ban-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Engellenenler</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Ionicons
                name="eye-off-outline"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>
                  Hikayeyi ve canlı videoları gizle
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{backgroundColor: 'white', marginBottom: 6}}>
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#363636', marginTop: 15}}>
              Meta'nın diğer ürünleri
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Ionicons
                name="logo-whatsapp"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>WhatsApp</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="logo-instagram"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Threads</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Ionicons
                name="logo-facebook"
                size={25}
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: 16}}>Facebook</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    marginTop: 15,
    marginHorizontal: 10,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#dddddd',
  },
});

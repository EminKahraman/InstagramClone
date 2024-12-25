import React, {forwardRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const AccountsCenterBottomSheet = forwardRef((props, ref) => {
  const {user} = useSelector(state => state.auth);

  const handleClose = () => {
    ref.current?.close();
  };

  return (
    <BottomSheet
      ref={ref}
      {...props}
      style={{marginHorizontal: 5}}
      snapPoints={[`93.8%`]}
      handleComponent={null}
      enablePanDownToClose={false}
      backgroundStyle={{backgroundColor: 'rgb(230, 230, 230)'}}>
      <View style={{marginHorizontal: 15, marginBottom: 190}}>
        <View style={{alignItems: 'center', marginTop: 25, marginBottom: 10}}>
          <Ionicons
            name="close-outline"
            size={30}
            style={{position: 'absolute', left: 0, top: 0}}
            onPress={handleClose}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="logo-react" size={25} />
            <Text style={{fontSize: 18, fontWeight: '500'}}>Meta</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 10,
              }}>
              Hesaplar Merkezi
            </Text>
            <Text
              style={{
                marginTop: 15,
                color: 'rgb(48, 48, 48)',
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Facebook, Instagram ve Meta Horizon gibi Meta teknolojileri
              arasındaki bağlantılı deneyimlerini ve hesap ayarlarını yönet.
              <Text style={{color: 'rgb(36, 83, 211)'}}>
                Daha fazla bilgi al
              </Text>
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.profilesButton}>
              <Image source={{uri: user.avatar}} style={styles.avatar} />
              <View style={{marginLeft: 15}}>
                <Text
                  style={{fontSize: 16, fontWeight: '500', marginBottom: 2}}>
                  Profiller
                </Text>
                <Text style={{color: 'rgb(112, 112, 112)', fontWeight: '500'}}>
                  {user.username}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="gray"
                style={{marginLeft: 'auto'}}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.headerText}>Bağlantılı deneyimler</Text>
            <View style={styles.body}>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="person-outline" size={25} />
                <Text style={styles.text}>Profiller arasında paylaşım</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="log-in-outline" size={25} />
                <Text style={styles.text}>Hesaplarla giriş yapma</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.headerText}>Hesap ayarları</Text>
            <View style={styles.body}>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="shield-outline" size={25} />
                <Text style={styles.text}>Şifre ve güvenlik</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="newspaper-outline" size={25} />
                <Text style={styles.text}>Kişisel detaylar</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="receipt-outline" size={25} />
                <Text style={styles.text}>Bilgilerin ve izinlerin</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="volume-high-outline" size={25} />
                <Text style={styles.text}>Reklam tercihleri</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="wallet-outline" size={25} />
                <Text style={styles.text}>Meta Pay</Text>
                <Ionicons
                  name="logo-instagram"
                  size={20}
                  style={{marginLeft: 'auto', marginRight: 10}}
                />
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="checkmark-circle-outline" size={25} />
                <Text style={styles.text}>Meta Verified</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            <TouchableOpacity style={{flexDirection: 'row', padding: 13}}>
              <Ionicons name="person-circle-outline" size={25} />
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.text}>
                  Hesaplar{'\n'}
                  <Text style={styles.extraText}>
                    Bu Hesaplar Merkezi'nde sahip{'\n'}olduğun hesapları gözden
                    geçir.
                  </Text>
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="gray"
                  style={{marginLeft: 'auto'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 15}}>
              <Text
                style={{
                  color: 'rgb(36, 83, 211)',
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Daha fazla hesap ekle
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </BottomSheet>
  );
});

export default AccountsCenterBottomSheet;

const styles = StyleSheet.create({
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  profilesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
  },
  body: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: '600',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
  },
  extraText: {
    color: 'rgb(112, 112, 112)',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 15,
  },
});

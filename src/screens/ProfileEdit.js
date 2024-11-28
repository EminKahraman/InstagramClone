import {Formik} from 'formik';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import ProfileImageBottomSheet from '../components/BottomSheets/ProfileImage';

const ProfileEdit = ({navigation}) => {
  const {user} = useSelector(state => state.auth);

  const profileImageBottomSheetReference = React.useRef(null);
  const handleProfileImagePress = () => {
    profileImageBottomSheetReference.current?.present();
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={handleProfileImagePress}>
            <Image source={{uri: user.avatar}} style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfileImagePress}>
            <View style={styles.avatar}>
              <Ionicons name="skull-outline" size={24} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={handleProfileImagePress}>
            <Text style={{color: '#094be5', fontWeight: '500'}}>
              Resmi veya avatarı düzenle
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginHorizontal: 20}}>
        <Text style={styles.text}>Ad</Text>
        <TouchableOpacity style={styles.border}>
          <Text style={{fontSize: 15}}>{user.firstName}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Kullanıcı adı</Text>
        <TouchableOpacity style={styles.border}>
          <Text style={{fontSize: 15}}>{user.username}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Hitaplar</Text>
        <TouchableOpacity style={styles.border}>
          <Text style={{fontSize: 15}}>hitap</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Biyografi</Text>
        <TouchableOpacity
          style={styles.border}
          onPress={() => navigation.navigate('BioEdit')}>
          <Text style={{fontSize: 15}}>{user.bio}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 15}}>
          <Text style={{fontSize: 15}}>Bağlantı ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 15}}>
          <Text style={{fontSize: 15}}>Bantlar ekle</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Cinsiyet</Text>
        <TouchableOpacity
          style={[styles.border, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 15}}>Erkek</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            style={{marginLeft: 'auto'}}
            color={'#696969'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.border, {flexDirection: 'row', alignItems: 'center'}]}>
          <Text style={{fontSize: 15}}>Müzik</Text>
          <Text
            style={{
              marginLeft: 'auto',
              color: '#696969',
              fontSize: 13,
              marginRight: 10,
            }}>
            Profiline müzikler ekle
          </Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={'#696969'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
        }}
      />
      <TouchableOpacity>
        <Text
          style={{
            color: '#094be5',
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          Profesyonel hesaba geçiş yap
        </Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
        }}
      />
      <TouchableOpacity>
        <Text
          style={{
            color: '#094be5',
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          Kişisel bilgi ayarları
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
        }}
      />
      <ProfileImageBottomSheet ref={profileImageBottomSheetReference} />
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    borderRadius: 40,
    marginLeft: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    marginBottom: 10,
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 7,
    color: '#696969',
  },
});

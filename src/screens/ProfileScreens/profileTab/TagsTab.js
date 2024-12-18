import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CompleteProfile from '../../CompleteProfile';
import {useSelector} from 'react-redux';

const TagsTab = ({route, navigation}) => {
  const {isMe} = route.params || {isMe: false};
  const {firstName, bio, avatar, profileImageUrl} = useSelector(
    state => state.auth.user,
  );

  return (
    <View style={styles.container}>
      {isMe ? (
        <>
          <View style={{marginTop: 50}}>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
              Olduğun Fotoğraf{'\n'}ve Videolar
            </Text>
            <Text
              style={{textAlign: 'center', color: '#696969', marginTop: 10}}>
              İnsanlar seni fotoğraf ve videolarda{'\n'}etiketlediğinde, burada
              görünecek.
            </Text>
          </View>

          {[firstName, avatar, bio, profileImageUrl].every(Boolean) ? null : (
            <>
              <View
                style={{marginTop: 50, marginHorizontal: 15, marginBottom: 15}}>
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Profilini doldur
                </Text>
                <Text style={{fontSize: 11, fontWeight: '600'}}>
                  {[
                    firstName ? 1 : 0,
                    avatar ? 1 : 0,
                    bio ? 1 : 0,
                    profileImageUrl ? 1 : 0,
                  ].reduce((acc, val) => acc + val, 0)}{' '}
                  / 4
                  <Text style={{color: '#4f4f4f', fontWeight: '600'}}>
                    {' '}
                    Tamamlandı
                  </Text>
                </Text>
              </View>
              <CompleteProfile navigation={navigation} />
            </>
          )}
        </>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Ionicons name="close-circle-outline" size={90} />
          <Text style={styles.text}>Henüz Hiç Gönderi Yok</Text>
        </View>
      )}
    </View>
  );
};

export default TagsTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},

  text: {fontWeight: 'bold', fontSize: 22},
});

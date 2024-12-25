import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomSheet} from '../BottomSheet';
import NewAccountBottomSheet from './NewAccount';
import {useSelector} from 'react-redux';
import AccountsCenterBottomSheet from './AccountsCenter';

const AccountsBottomSheet = forwardRef((props, ref) => {
  const {user} = useSelector(state => state.auth);

  const newAccountBottomSheetReference = React.useRef(null);
  const handleNewAccountPress = () => {
    newAccountBottomSheetReference.current?.present();
  };

  const accountsCenterBottomSheetReference = React.useRef(null);
  const handleAccountsCenterPress = () => {
    accountsCenterBottomSheetReference.current?.present();
  };

  return (
    <BottomSheet
      ref={ref}
      {...props}
      style={{marginHorizontal: 5}}
      backgroundStyle={{backgroundColor: 'rgb(220, 217, 217)'}}>
      <View style={{marginHorizontal: 15, marginBottom: 30}}>
        <View style={styles.body}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image source={{uri: user.avatar}} style={styles.profilePhoto} />
            <Text style={styles.username}>{user.username}</Text>
            <View style={styles.activeAccountIcon}>
              <Text style={{color: 'white', fontSize: 16}}>✓</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleNewAccountPress}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.profilePhoto}>
              <Text style={{fontSize: 30}}>+</Text>
            </View>
            <Text style={styles.text}>Instagram hesabı ekle</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleAccountsCenterPress}
          style={styles.button}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '500'}}>
            Hesaplar Merkezi'ne git
          </Text>
        </TouchableOpacity>
      </View>
      <NewAccountBottomSheet ref={newAccountBottomSheetReference} />
      <AccountsCenterBottomSheet ref={accountsCenterBottomSheetReference} />
    </BottomSheet>
  );
});

export default AccountsBottomSheet;

const styles = StyleSheet.create({
  body: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'rgb(232, 233, 236)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  text: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  activeAccountIcon: {
    marginLeft: 'auto',
    width: 20,
    height: 20,
    backgroundColor: 'rgb(40, 72, 188)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
    borderRadius: 50,
  },
});

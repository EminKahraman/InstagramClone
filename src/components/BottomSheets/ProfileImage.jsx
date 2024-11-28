import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  ref as stRef,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import {
  ref as dbRef,
  push,
  onChildAdded,
  set,
  get,
  update,
} from 'firebase/database';
import {db, storage as storageConfig} from '../../../firebaseConfig';
import storage from '@react-native-firebase/storage';

import {getAuth} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../redux/authSlice';

const ProfileImageBottomSheet = forwardRef((props, ref) => {
  const {user, profileImageUrl} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [image, setImage] = useState('');

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel) {
      setImage(result.assets[0].uri);
      // upload the image
      await uploadImage(result.assets[0].uri, 'image');
    }
  };

  const uploadImage = async (uri, fileType) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = stRef(
      storageConfig,
      'ProfileImages/' + new Date().getTime(),
    );
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        // handle error
        console.log("error",error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          console.log('File available at', downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage('');
        });
      },
    );
  };

  const saveRecord = async (fileType, url, createdAt) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    try {
      const userRef = dbRef(db, `users/${currentUser.uid}`);
      // Add the new avatar to the user's data
      await update(userRef, {avatar: url});

      const userSnapshot = await database()
        .ref(`users/${currentUser?.uid}`)
        .once('value');

      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        dispatch(setUser(userData));
      }
      ref?.current?.close();
      console.log('document saved correctly');
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProfileImage = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userRef = dbRef(db, `users/${currentUser.uid}`);
    await deleteAllFilesInFolder('ProfileImages');
    await update(userRef, {avatar: ''});
    const userSnapshot = await database()
      .ref(`users/${currentUser?.uid}`)
      .once('value');

    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();
      dispatch(setUser(userData));
    }
    ref?.current?.close();
  };

  const deleteAllFilesInFolder = async folderPath => {
    try {
      // Klasördeki tüm dosyaların listesini al
      const listResult = await storage().ref(folderPath).listAll();

      // Her dosya için silme işlemi yap
      const deletePromises = listResult.items.map(item => item.delete());

      // Tüm silme işlemlerini tamamla
      await Promise.all(deletePromises);

      console.log('All files in the folder have been deleted!');
    } catch (error) {
      console.error('Error deleting files: ', error);
    }
  };

  return (
    <BottomSheet ref={ref} {...props}>
      <View style={styles.container}>
        {user?.avatar ? (
          <Image source={{uri: user?.avatar}} style={styles.profileImage} />
        ) : (
          <Ionicons
            name="person-circle-outline"
            size={60}
            style={{alignSelf: 'center'}}
          />
        )}

        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}
            onPress={pickImage}>
            <Ionicons name="image-outline" size={30} color="black" />
            <Text style={{marginLeft: 5, fontWeight: '500'}}>
              Yeni profil resmi
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Ionicons name="logo-facebook" size={30} color="black" />
            <Text style={{marginLeft: 5, fontWeight: '500'}}>
              Facebook'tan Aktar
            </Text>
          </TouchableOpacity>

          {user?.avatar && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}
              onPress={deleteProfileImage}>
              <Ionicons name="trash-outline" size={30} color="red" />
              <Text style={{color: 'red', marginLeft: 5, fontWeight: '500'}}>
                Mevcut resmi kaldır
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </BottomSheet>
  );
});

export default ProfileImageBottomSheet;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
});

import React, { useState } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ShareHeader from '../header/ShareHeader';
import HomeStorage from '../firebaseStorage/screens/HomeStorage';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref as dbRef,update } from "firebase/database";
import { db, storage } from "../../firebaseConfig";
import database from '@react-native-firebase/database';
import { getAuth } from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';



const ShareScreen = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function uploadImage(uri, fileType) {
    setLoading(true);
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Stuff/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString() , text);
          setImage("");
          setVideo("");
          setLoading(false);
          setText("");
          Alert.alert("Başarılı", "Gönderi paylaşıldı");
        });
      }
    );
  }

  async function saveRecord(fileType, url, createdAt, text) {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    try {
      const userRef = dbRef(db, `users/${currentUser.uid}`);
      // Add the new post to the user's data without losing previous values
      const userSnapshot = await database().ref(`users/${currentUser?.uid}`).once('value');
      let posts = userSnapshot.val().posts || [];
      posts.push({ url, createdAt, likes: 0, text });
      await update(userRef, { posts });

      // Retrieve updated user information
      const updatedUserSnapshot = await database().ref(`users/${currentUser?.uid}`).once('value');
      if (updatedUserSnapshot.exists()) {
        const updatedUserData = updatedUserSnapshot.val();
        dispatch(setUser(updatedUserData));
      }
      console.log("document saved correctly");
    } catch (e) {
      console.log(e);
    }
  }

  const onSharePress = () => {
    uploadImage(image, "image");
  }

  return (
    <View style={styles.container}>
      <ShareHeader onSharePress={onSharePress} loading={loading} />
      <HomeStorage 
      onSharePress={onSharePress} 
      setImage={setImage} 
      setText={setText} 
      setVideo={setVideo} 
      image={image} 
      video={video}
      text={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ShareScreen;

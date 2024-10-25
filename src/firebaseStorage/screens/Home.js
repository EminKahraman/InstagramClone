import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from "react-native-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push, onChildAdded, set, get } from "firebase/database";
import { db, storage } from "../../../firebaseConfig";
import Video from "react-native-video";
import { UploadingAndroid } from "../components/UploadingAndroid";
import { Uploading } from "../components/Uploading";

export default function Home() {
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const filesRef = dbRef(db, 'files');
      const snapshot = await get(filesRef);
      if (snapshot.exists()) {
        const filesData = Object.values(snapshot.val());
        setFiles(filesData);
      }
    };

    fetchFiles();

    const filesRef = dbRef(db, 'files');
    const unsubscribe = onChildAdded(filesRef, (snapshot) => {
      const newFile = snapshot.val();
      setFiles((prevFiles) => {
        if (!prevFiles.some(file => file.url === newFile.url)) {
          return [...prevFiles, newFile];
        }
        return prevFiles;
      });
    });

    return () => unsubscribe();
  }, []);

  async function pickImage() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel) {
      setImage(result.assets[0].uri);
      // upload the image
      await uploadImage(result.assets[0].uri, "image");
    }
  }

  async function pickVideo() {
    const result = await launchImageLibrary({
      mediaType: 'video',
      quality: 1,
    });

    if (!result.didCancel) {
      setVideo(result.assets[0].uri);
      await uploadImage(result.assets[0].uri, "video");
    }
  }

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Stuff/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
          setVideo("");
        });
      }
    );
  }

  async function saveRecord(fileType, url, createdAt) {
    try {
      const newFileRef = push(dbRef(db, 'files'));
      await set(newFileRef, {
        fileType,
        url,
        createdAt,
      });
      console.log("document saved correctly", newFileRef.key);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={files}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          if (item.fileType === "image") {
            return (
              <Image
                source={{ uri: item.url }}
                style={{ width: "34%", height: 100 }}
              />
            );
          } else {
            return (
              <Video
                source={{
                  uri: item.url,
                }}
                // videoStyle={{ borderWidth: 1, borderColor: "red" }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                // isLooping
                style={{ width: "34%", height: 100 }}
                useNativeControls
              />
            );
          }
        }}
        numColumns={3}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
      />
      {image &&
        (Platform.OS === "ios" ? (
          <Uploading image={image} video={video} progress={progress} />
        ) : (
          // Some features of blur are not available on Android
          <UploadingAndroid image={image} video={video} progress={progress} />
        ))}
      <TouchableOpacity
        onPress={pickImage}
        style={{
          position: "absolute",
          bottom: 90,
          right: 30,
          width: 44,
          height: 44,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Ionicons name="image-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pickVideo}
        style={{
          position: "absolute",
          bottom: 150,
          right: 30,
          width: 44,
          height: 44,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Ionicons name="videocam-outline" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
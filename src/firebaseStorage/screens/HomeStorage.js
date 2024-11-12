import {
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from "react-native-image-picker";
import { TextInput } from "react-native-gesture-handler";

export default function HomeStorage({onSharePress, setImage, setText, setVideo , image, video ,text}) {
  async function pickImage() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel) {
      setImage(result.assets[0].uri);
      // dispatch(setSelectedImage([...selectedImages, result.assets[0].uri])); 
      // AsyncStorage.setItem('selectedImages', JSON.stringify([...selectedImages, result.assets[0].uri]));
    }
  }

  async function pickVideo() {
    const result = await launchImageLibrary({
      mediaType: 'video',
      quality: 1,
    });

    if (!result.didCancel) {
      setVideo(result.assets[0].uri);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginHorizontal:10,backgroundColor:"#dddddd" ,padding:10 ,borderRadius:10 ,
}}>
        {image ? <Image source={{ uri: image }} style={ styles.image } /> : <Ionicons name="image-outline" size={300} color="black" style={{alignSelf:"center",justifyContent:"center"}}/>}
          <TextInput value={text} onChangeText={setText} placeholder="Explanation..." placeholderTextColor="#696969"style={styles.searchInput} />
      </View>
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

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  searchInput: {
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#dddddd',
  },
});
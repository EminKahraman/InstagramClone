import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const StoriesScreen = ({navigation, route}) => {
  const {item} = route.params || {item: null};
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Image source={{uri: item?.stories?.storieImage}} style={styles.image} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          marginBottom: 10,
          position: 'absolute',
          top: 70,
          right: 0,
          left: 0,
        }}>
        <Image source={{uri: item?.profileImage}} style={styles.profileImage} />
        <Text style={styles.username}>{item?.username}</Text>
        <Text style={{marginLeft: 20, color: 'white'}}>
          {item?.stories?.time}
        </Text>
        <Ionicons
          name="close"
          size={24}
          onPress={() => navigation.goBack()}
          style={{marginLeft: 'auto'}}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 5,
          }}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
          <TextInput
            placeholder="Mesaj"
            placeholderTextColor="white"
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={25}
              color="white"
              style={isLiked ? {color: 'red'} : null}
            />
          </TouchableOpacity>
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="white"
            style={{marginLeft: 10}}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default StoriesScreen;

const styles = StyleSheet.create({
  profileImage: {width: 30, height: 30, borderRadius: 15},
  username: {fontWeight: 'bold', marginLeft: 10, color: 'white'},
  input: {
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

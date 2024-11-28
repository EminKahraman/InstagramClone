import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageDetailHeader = ({navigation, item}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={{uri: item?.profileImage}} style={styles.profileImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginLeft: 18,
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            {item?.fullName}
          </Text>
          <Ionicons name="chevron-forward-outline" size={12} color={'gray'} />
        </View>
        <View>
          <Text style={{fontSize: 12, color: '#4f4f4f'}}>{item?.username}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="call-outline" size={24} style={{marginRight: 20}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="videocam-outline" size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MessageDetailHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 25,
  },
});

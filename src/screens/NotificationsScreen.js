import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, marginVertical: 10 }}
        onPress={() => navigation.navigate('FollowRequests')}>
        <View style={{ borderWidth: 0.5, padding: 10, borderColor: "#dcdcdc", borderRadius: 100 }}>
          <Ionicons name={'person-add-outline'} size={20} />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "500" }}>Takip İstekleri</Text>
          <Text style={{ color: "#696969" }}>İstekleri onayla veya yok say</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

export default NotificationsScreen;

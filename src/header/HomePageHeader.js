import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomePageHeader = ({navigation}) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>Instagram</Text>
      <View style={styles.iconContainer}>
        {/* Bildirimler */}
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        {/* Mesajlar */}
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    marginRight: 15,
  },
});

export default HomePageHeader;

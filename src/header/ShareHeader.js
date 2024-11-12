import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity,Image, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShareHeader = ({ navigation, onSharePress, loading }) => {

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Ionicons name="close-outline" size={35} color="black"  />
        <Text style={styles.headerTitle}>Yeni Gönderi</Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={onSharePress} >
          {loading ? <ActivityIndicator size="small" color="#094be5" style={{marginRight: 10}} /> : <Text style={styles.headerShare} >Paylaş</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 5
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 30,
    flex: 1,
  },
  headerShare: {
    color: "#094be5",
    fontSize: 18,
    fontWeight: "600"
  },
});

export default ShareHeader;

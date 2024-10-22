import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShareHeader = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Ionicons name="close-outline" size={24} color="black" />
        <Text style={styles.headerText}>Yeni Gönderi</Text>
        <Button style={styles.headerButton} title="İleri" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 30,
    flex: 1,
  },
  headerButton: {
    marginLeft: 'auto',
  },
});

export default ShareHeader;

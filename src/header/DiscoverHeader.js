import React from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DiscoverHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.searchInput}>
          <Ionicons name="search-outline" size={22} style={styles.searchIcon} />
          <TextInput placeholder="Ara" placeholderTextColor="#696969" />
        </View>

        <Ionicons
          name="ellipsis-horizontal-outline"
          size={24}
          color="black"
          style={styles.menuIcon}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },

  searchIcon: {
    marginRight: 10,
    marginLeft: 5,
  },

  searchInput: {
    padding: 8,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#dddddd',
    marginRight: 15,
  },

  menuIcon: {
    marginLeft: 'auto',
    marginRight: 5,
  },
});

export default DiscoverHeader;

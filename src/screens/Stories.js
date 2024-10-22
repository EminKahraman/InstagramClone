import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {users} from '../data/users';
import LinearGradient from 'react-native-linear-gradient';

const Stories = () => {
  return (
    <SafeAreaView>
      <View style={styles.storyContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {users.map((user, index) => {
            return (
              <React.Fragment key={index}>
                <View style={styles.avatarContainer}>
                  <LinearGradient
                    colors={['#ff8c00', '#dc143c']}
                    style={styles.avatar}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}>
                    <View style={styles.innerView}>
                      <Image source={{uri: user.image}} style={styles.avatar} />
                    </View>
                  </LinearGradient>
                  <Text style={styles.avatarName}>
                    {user.name.length > 10
                      ? user.name.slice(0, 10) + '...'
                      : user.name}
                  </Text>
                </View>
              </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 0.2,
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  innerView: {
    backgroundColor: 'white', // İçerik için düz bir arka plan
    borderRadius: 30, // İç view'in de aynı köşeleri yuvarlak olsun ki gradient dışarı taşmasın
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    height: 60,
    width: 60,
    padding: 2,
    borderRadius: 30,
  },
  avatarName: {
    paddingTop: 5,
    color: 'black',
  },
});
export default Stories;

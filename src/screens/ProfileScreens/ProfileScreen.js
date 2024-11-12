import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileHeader from '../../header/ProfileHeader';
import ScreenOne from './tabScreens/ScreenOne';
import ScreenTwo from './tabScreens/ScreenTwo';
import ScreenThree from './tabScreens/ScreenThree';
import CreateBottomSheet from '../../components/BottomSheets/Create';
import ProfileImageBottomSheet from '../../components/BottomSheets/ProfileImage';
import ProfileDetailBottomSheet from '../../components/BottomSheets/ProfileDetail';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = ({navigation, route}) => {
  const {user} = useSelector(state => state.auth);
  const {isMe} = route.params || {isMe: false};
  const {item} = route.params || {item: null};
  const [isFollowed, setIsFollowed] = useState(true);

  const goBack = () => navigation.goBack();
  const goSettings = () => navigation.navigate('Settings');

  const createBottomSheetReference = React.useRef(null);
  const handleCreatePress = () => {
    createBottomSheetReference.current?.present();
  };

  const profileImageBottomSheetReference = React.useRef(null);
  const handleProfileImagePress = () => {
    profileImageBottomSheetReference.current?.present();
  };

  const profileDetailBottomSheetReference = React.useRef(null);
  const handleProfileDetailPress = () => {
    profileDetailBottomSheetReference.current?.present();
  };

  return (
    <View style={styles.container}>
      <ProfileHeader
        navigation={navigation}
        username={isMe ? user?.username : item?.username}
        isMe={isMe}
        onLeftPress={isMe ? null : goBack}
        onRightTwoPress={isMe ? goSettings : handleProfileDetailPress}
        onRightOnePress={handleCreatePress}
      />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            {isMe && (
              <Pressable onPress={handleProfileImagePress}>
                {user?.avatar ? (
                  <Image
                    source={{uri: user?.avatar}}
                    style={styles.profileImage}
                  />
                ) : (
                  <Ionicons
                    name="person-circle-outline"
                    size={80}
                    style={{alignSelf: 'center'}}
                  />
                )}
              </Pressable>
            )}

            {!isMe && (
              <Image
                source={{uri: item?.profileImage}}
                style={styles.profileImage}
              />
            )}
          </View>
          <View style={styles.numbers}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.post}>
                {isMe ? user?.posts?.length : item?.profile?.post}
              </Text>
              <Text style={styles.postTitle}>gönderi</Text>
            </View>
            <View style={{alignItems: 'center', marginHorizontal: 40}}>
              <Text style={styles.followers}>
                {isMe ? 1 : item?.profile?.followers}
              </Text>
              <Text style={styles.followersTitle}>takipçi</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.following}>
                {isMe ? 1 : item?.profile?.following}
              </Text>
              <Text style={styles.followingTtile}>takip</Text>
            </View>
          </View>
        </View>

        <Text style={styles.firstName}>
          {isMe ? user?.firstName : item?.fullName}
        </Text>

        <Text style={styles.bio}>{isMe ? user?.bio : item.profile?.bio}</Text>

        {isMe && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 15,
            }}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={{fontWeight: '500'}}>Profili Düzenle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={{fontWeight: '500'}}>Profili paylaş</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.discoverButton}>
              <Ionicons name="person-add-outline" size={16} color="black" />
            </TouchableOpacity>
          </View>
        )}

        {!isMe && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={
                isFollowed ? styles.editButtonTwo : styles.editButtonTwoClicked
              }
              onPress={() => setIsFollowed(!isFollowed)}>
              <Text style={isFollowed ? {color: 'white'} : {color: 'black'}}>
                {isFollowed ? 'Takip Et' : 'Takip'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={{fontWeight: '500'}}>Mesaj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.discoverButton}>
              <Ionicons name="person-add-outline" size={16} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <View style={{flex: 1, marginTop: 20}}>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color}) => {
                let iconName;

                if (route.name === 'Posts') {
                  iconName = 'apps-sharp';
                } else if (route.name === 'Reels') {
                  iconName = 'film-outline';
                } else if (route.name === 'Tag') {
                  iconName = 'people-circle-outline';
                }

                return <Ionicons name={iconName} size={24} color={color} />;
              },
              tabBarShowIcon: true,
              tabBarLabel: () => null, // Metni kaldırmak için
              tabBarIndicatorStyle: {
                backgroundColor: 'black', // Alt çizginin rengi
              },
            })}>
            <Tab.Screen
              name="Posts"
              component={ScreenOne}
              initialParams={{isMe: isMe}}
            />
            <Tab.Screen
              name="Reels"
              component={ScreenTwo}
              initialParams={{isMe: isMe}}
            />

            <Tab.Screen
              name="Tag"
              component={ScreenThree}
              initialParams={{isMe: isMe}}
            />
          </Tab.Navigator>
        </View>
      </View>

      <CreateBottomSheet ref={createBottomSheetReference} />
      <ProfileImageBottomSheet ref={profileImageBottomSheetReference} />
      <ProfileDetailBottomSheet ref={profileDetailBottomSheetReference} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  apps: {flex: 1, alignItems: 'center'},
  film: {flex: 1, alignItems: 'center'},
  people: {flex: 1, alignItems: 'center', paddingBottom: 10},
  numbers: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  editButtonTwo: {
    flex: 1,
    backgroundColor: '#094be5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  editButtonTwoClicked: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 7,
  },
  discoverButton: {
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 7,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginLeft: 20,
  },

  firstName: {
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
  },
  bio: {
    marginLeft: 10,
  },

  post: {fontSize: 19, fontWeight: 'bold'},
  postTitle: {fontSize: 15, marginTop: 2},

  followers: {fontSize: 19, fontWeight: 'bold'},
  followersTitle: {fontSize: 15, marginTop: 2},

  following: {fontSize: 19, fontWeight: 'bold'},
  followingTtile: {fontSize: 15, marginTop: 2},
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;

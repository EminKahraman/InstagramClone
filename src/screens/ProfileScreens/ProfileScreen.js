import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
  FlatList,
  Modal,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import dummyData from '../dummyData';
import ProfileHeader from '../../header/ProfileHeader';

import PostsTab from './profileTab/PostsTab';
import ReelsTab from './profileTab/ReelsTab';
import TagsTab from './profileTab/TagsTab';

import CreateBottomSheet from '../../components/BottomSheets/Create';
import ProfileImageBottomSheet from '../../components/BottomSheets/ProfileImage';
import ProfileDetailBottomSheet from '../../components/BottomSheets/ProfileDetail';
import AccountsBottomSheet from '../../components/BottomSheets/Accounts';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = ({navigation, route}) => {
  const {user} = useSelector(state => state.auth);
  const {isMe} = route.params || {isMe: false};
  const {item} = route.params || {item: null};
  const [isFollowed, setIsFollowed] = useState(true);
  const [isDiscover, setIsDiscover] = useState(false);

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

  const accountsBottomSheetReference = React.useRef(null);
  const handleAccountsPress = () => {
    accountsBottomSheetReference.current?.present();
  };

  const renderDiscoverCard = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: '#dcdcdc',
          width: 150,
          height: 200,
          marginLeft: 5,
        }}>
        <Ionicons
          name="close-outline"
          size={24}
          style={{position: 'absolute', right: 0, top: 0}}
        />
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: item?.profileImage}}
            style={styles.cardProfileImage}
          />
          <Text style={{fontWeight: '500', marginTop: 10}}>
            {item?.fullName}
          </Text>
          <Text style={{fontSize: 11, marginTop: 5, color: '#696969'}}>
            Senin için öneriliyor
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#1c86ee',
            position: 'absolute',
            bottom: 10,
            alignItems: 'center',
            right: 0,
            left: 0,
            marginHorizontal: 10,
            padding: 5,
            borderRadius: 7,
          }}>
          <Text style={{color: 'white', alignItems: 'center'}}>Takip Et</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ProfileHeader
        navigation={navigation}
        username={isMe ? user?.username : item?.username}
        isMe={isMe}
        onLeftOnePress={isMe ? null : goBack}
        onLeftTwoPress={isMe ? handleAccountsPress : null}
        onRightOnePress={isMe ? handleCreatePress : null}
        onRightTwoPress={isMe ? goSettings : handleProfileDetailPress}
      />
      <View style={{flex: 1}}>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <View style={{marginLeft: 20}}>
            {isMe && (
              <Pressable onPress={handleProfileImagePress}>
                {user?.avatar ? (
                  <Image
                    source={{uri: user?.avatar}}
                    style={styles.profileImage}
                  />
                ) : (
                  <View style={styles.iconProfileImage}>
                    <Ionicons name="person-circle-outline" size={90} />
                  </View>
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
                {isMe ? user?.posts?.length || 0 : item?.profile?.post || 0}
              </Text>
              <Text style={styles.postTitle}>gönderi</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FollowDetail', {
                  tabToOpen: 'Follower',
                  isMe,
                  item,
                })
              }
              style={{alignItems: 'center', marginHorizontal: 40}}>
              <Text style={styles.followers}>
                {isMe ? 1 : item?.profile?.followers}
              </Text>
              <Text style={styles.followersTitle}>takipçi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FollowDetail', {
                  tabToOpen: 'Follow',
                  isMe,
                  item,
                })
              }
              style={{alignItems: 'center'}}>
              <Text style={styles.following}>
                {isMe ? 1 : item?.profile?.following}
              </Text>
              <Text style={styles.followingTtile}>takip</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.firstName}>
          {isMe ? user?.firstName : item?.fullName}
        </Text>

        <Text style={styles.bio}>{isMe ? user?.bio : item.profile?.bio}</Text>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginBottom: 15,
            marginTop: 10,
          }}>
          {isMe ? (
            <>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('ProfileEdit')}>
                <Text style={{fontWeight: '500'}}>Profili Düzenle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareButton}>
                <Text style={{fontWeight: '500'}}>Profili paylaş</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.discoverButton}
                onPress={() => setIsDiscover(!isDiscover)}>
                <Ionicons
                  name={isDiscover ? 'person-add' : 'person-add-outline'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={
                  isFollowed
                    ? styles.editButtonTwo
                    : styles.editButtonTwoClicked
                }
                onPress={() => setIsFollowed(!isFollowed)}>
                <Text
                  style={
                    isFollowed
                      ? {color: 'white', fontWeight: '500'}
                      : {color: 'black', fontWeight: '500'}
                  }>
                  {isFollowed ? 'Takip Et' : 'Takip'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareButton}>
                <Text style={{fontWeight: '500'}}>Mesaj</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.discoverButton}
                onPress={() => setIsDiscover(!isDiscover)}>
                <Ionicons
                  name={isDiscover ? 'person-add' : 'person-add-outline'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </>
          )}
        </View>

        {isDiscover ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                marginHorizontal: 15,
              }}>
              <Text style={{fontWeight: '500', fontSize: 14}}>
                Yeni İnsanlar Keşfet
              </Text>
              <TouchableOpacity style={{marginLeft: 'auto'}}>
                <Text style={{color: '#094be5', fontWeight: '500'}}>
                  Tümünü Gör
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={dummyData.users}
              renderItem={renderDiscoverCard}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ) : null}

        <View style={{flex: 1}}>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color}) => {
                let iconName;

                if (route.name === 'Posts') {
                  iconName = 'apps-sharp';
                } else if (route.name === 'Reels') {
                  iconName = 'film-outline';
                } else if (route.name === 'Tags') {
                  iconName = 'people-circle-outline';
                }
                return <Ionicons name={iconName} size={24} color={color} />;
              },
              tabBarLabel: () => null,
              tabBarIndicatorStyle: {
                backgroundColor: 'black',
                height: 1,
              },
            })}>
            <Tab.Screen
              name="Posts"
              component={PostsTab}
              initialParams={{isMe: isMe}}
            />
            <Tab.Screen
              name="Reels"
              component={ReelsTab}
              initialParams={{isMe: isMe}}
            />

            <Tab.Screen
              name="Tags"
              component={TagsTab}
              initialParams={{isMe: isMe}}
            />
          </Tab.Navigator>
        </View>
      </View>

      <CreateBottomSheet ref={createBottomSheetReference} />
      <ProfileImageBottomSheet ref={profileImageBottomSheetReference} />
      <ProfileDetailBottomSheet ref={profileDetailBottomSheetReference} />
      <AccountsBottomSheet ref={accountsBottomSheetReference} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  apps: {flex: 1, alignItems: 'center'},
  film: {flex: 1, alignItems: 'center'},
  people: {flex: 1, alignItems: 'center', paddingBottom: 10},
  numbers: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#eee9e9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#eee9e9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 7,
  },
  discoverButton: {
    backgroundColor: '#eee9e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 7,
  },
  editButtonTwo: {
    flex: 1,
    backgroundColor: '#1c86ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  editButtonTwoClicked: {
    flex: 1,
    backgroundColor: '#eee9e9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  iconProfileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
    alignItems: 'center',
  },

  firstName: {
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
  },
  bio: {
    marginTop: 2,
    marginLeft: 10,
  },

  post: {fontSize: 20, fontWeight: 'bold'},
  postTitle: {fontSize: 15},

  followers: {fontSize: 20, fontWeight: 'bold'},
  followersTitle: {fontSize: 15},

  following: {fontSize: 20, fontWeight: 'bold'},
  followingTtile: {fontSize: 15},

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

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../redux/authSlice';

import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import ProfileHeader from '../../header/ProfileHeader';
import ScreenOne from './tabScreens/ScreenOne';
import ScreenTwo from './tabScreens/ScreenTwo';
import ScreenThree from './tabScreens/ScreenThree';
import CreateBottomSheet from '../../components/BottomSheets/Create';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = ({navigation, route}) => {
  const {user, profileImageUrl} = useSelector(state => state.auth);
  const {isMe} = route.params || {isMe: false};
  const {item} = route.params || {item: null};
  const [isFollowed, setIsFollowed] = useState(true);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    Alert.alert('Çıkış Yap', 'Çıkış yapmak istediğinizden emin misiniz?', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Çıkış Yap',
        onPress: async () => {
          await auth().signOut();
          dispatch(setUser(null));
        },
      },
    ]);
  };

  const goBack = () => navigation.goBack();
  const goSettings = () => navigation.navigate('Settings');

  const defaultBottomSheetReference = React.useRef(null);
  const handleOpenPress = () => {
    defaultBottomSheetReference.current?.present();
  };

  return (
    <View style={styles.container}>
      <ProfileHeader
        navigation={navigation}
        username={isMe ? user?.username : item?.username}
        isMe={isMe}
        onLeftPress={isMe ? handleLogout : goBack}
        onRightTwoPress={goSettings}
        onRightOnePress={handleOpenPress}
      />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={{uri: profileImageUrl}}
              style={styles.profileImage}
            />
            <Text style={styles.firstName}>
              {isMe ? user?.firstName : item?.fullName}
            </Text>
          </View>
          <View style={styles.numbers}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.post}>0</Text>
              <Text style={styles.postTitle}>gönderi</Text>
            </View>
            <View style={{alignItems: 'center', marginHorizontal: 35}}>
              <Text style={styles.followers}>47</Text>
              <Text style={styles.followersTitle}>takipçi</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.following}>258</Text>
              <Text style={styles.followingTtile}>takip</Text>
            </View>
          </View>
        </View>

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

                if (route.name === 'Apps') {
                  iconName = 'apps-sharp';
                } else if (route.name === 'Film') {
                  iconName = 'film-outline';
                } else if (route.name === 'People') {
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
              name="Apps"
              component={ScreenOne}
              initialParams={{isMe: isMe}}
            />
            <Tab.Screen
              name="Film"
              component={ScreenTwo}
              initialParams={{isMe: isMe}}
            />

            <Tab.Screen
              name="People"
              component={ScreenThree}
              initialParams={{isMe: isMe}}
            />
          </Tab.Navigator>
        </View>
      </View>

      <CreateBottomSheet ref={defaultBottomSheetReference} />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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
    borderRadius: 60,
    marginTop: 20,
    marginLeft: 20,
  },

  firstName: {
    fontWeight: '500',
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
  },
  post: {fontSize: 20, fontWeight: 'bold'},
  postTitle: {fontSize: 15, marginTop: 2},

  followers: {fontSize: 20, fontWeight: 'bold'},
  followersTitle: {fontSize: 15, marginTop: 2},

  following: {fontSize: 20, fontWeight: 'bold'},
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

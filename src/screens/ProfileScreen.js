import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../header/ProfileHeader';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
  const {user, profileImageUrl} = useSelector(state => state.auth);

  const [selectedIcon, setSelectedIcon] = useState('apps');
  const [showShareButton, setShowShareButton] = useState(true);
  const [showFilmButton, setshowFilmButton] = useState(false);
  const [showPeopleButton, setshowPeopleButton] = useState(false);

  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={{uri: profileImageUrl}}
              style={styles.profileImage}
            />
            <Text style={styles.firstName}>{user?.firstName}</Text>
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

        {/* <View style={{flexDirection: 'row', marginVertical: 30}}>
          {['apps', 'film', 'people'].map((icon, index) => (
            <TouchableOpacity
              key={index}
              style={
                selectedIcon === icon
                  ? [styles[icon], {borderColor: 'black', borderBottomWidth: 1}]
                  : styles[icon]
              }
              onPress={() => {
                setSelectedIcon(icon);
                setShowShareButton(icon === 'apps');
                setshowFilmButton(icon === 'film');
                setshowPeopleButton(icon === 'people');
              }}>
              <Ionicons name={`${icon}-outline`} size={25} />
            </TouchableOpacity>
          ))}
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 40,
          }}>
          <TouchableOpacity
            style={
              selectedIcon === 'apps'
                ? [styles.apps, {borderColor: 'black', borderBottomWidth: 1}]
                : styles.apps
            }
            onPress={() => {
              setSelectedIcon('apps');
              setShowShareButton(true);
              setshowFilmButton(false);
              setshowPeopleButton(false);
            }}>
            <Ionicons name="apps-sharp" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedIcon === 'film'
                ? [styles.film, {borderColor: 'black', borderBottomWidth: 1}]
                : styles.film
            }
            onPress={() => {
              setSelectedIcon('film');
              setShowShareButton(false);
              setshowFilmButton(true);
              setshowPeopleButton(false);
            }}>
            <Ionicons name="film-outline" size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedIcon === 'people'
                ? [styles.people, {borderColor: 'black', borderBottomWidth: 1}]
                : styles.people
            }
            onPress={() => {
              setSelectedIcon('people');
              setShowShareButton(false);
              setshowFilmButton(false);
              setshowPeopleButton(true);
            }}>
            <Ionicons name="people-circle-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.appsBody}>
          {showShareButton && (
            <>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Bir arkadaşınla
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                birlikte anı yakala
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Share')}>
                <Text
                  style={{color: '#094be5', fontWeight: '600', marginTop: 10}}>
                  İlk gönderini oluştur
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.filmBody}>
          {showFilmButton && (
            <>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Bir anını dünyayla paylaş
              </Text>

              <TouchableOpacity>
                <Text
                  style={{color: '#094be5', fontWeight: '600', marginTop: 10}}>
                  İlk Reels videonu oluştur
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.peopleBody}>
          {showPeopleButton && (
            <>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Olduğun Fotoğraf
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 22, marginBottom: 10}}>
                ve Videolar
              </Text>
              <Text style={{color: '#696969'}}>
                İnsanlar seni fotoğraf ve videolarda
              </Text>
              <Text style={{color: '#696969'}}>
                etiketlediğinde, burada görünecek.
              </Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  appsBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  filmBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  peopleBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 7,
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 7,
  },
  discoverButton: {
    backgroundColor: '#dcdcdc',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 7,
  },
  profileImage: {
    width: 100,
    height: 100,
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
});

export default ProfileScreen;

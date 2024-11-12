import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {forwardRef, useState, useEffect} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import dummyData from '../../screens/dummyData';

const numColumns = 3;

const ShareBottomSheet = forwardRef((props, ref) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      setPosts(dummyData.posts);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 30,
      }}>
      <Image source={{uri: item.profileImage}} style={styles.profileImage} />
      <Text style={{fontSize: 12, marginTop: 5}}>{item.fullName}</Text>
    </View>
  );

  return (
    <BottomSheet ref={ref} {...props}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 15,
            marginBottom: 20,
          }}>
          <View style={styles.searchInput}>
            <Ionicons
              name="search-outline"
              size={18}
              style={{
                marginRight: 15,
                marginLeft: 5,
              }}
              color={'#4f4f4f'}
            />
            <TextInput placeholder="Ara" placeholderTextColor="#696969" />
          </View>
          <Ionicons name="people-outline" size={22} />
        </View>

        <View>
          <FlatList
            data={posts}
            renderItem={renderItem}
            numColumns={numColumns}
          />
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            borderTopWidth: 1,
            borderTopColor: '#f2f2f2',
          }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.altIcon, {marginLeft: 15}]}>
                <Ionicons name="duplicate-outline" size={30} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Not ekle</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.altIcon, {backgroundColor: 'black'}]}>
                <Text style={{fontSize: 25, color: 'white'}}>@</Text>
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Threads</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.altIcon}>
                <Ionicons name="add-outline" size={30} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Hikayeye</Text>
              <Text style={{fontSize: 12}}>ekleme yap</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.altIcon}>
                <Ionicons name="share-social-outline" size={30} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Paylaş</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.altIcon}>
                <Ionicons name="link-outline" size={30} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Bağlantıyı</Text>
              <Text style={{fontSize: 12}}>Kopyala</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.altIcon}>
                <Ionicons name="cloud-download-outline" size={30} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>İndir</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.altIcon, {backgroundColor: '#104e8b'}]}>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={30}
                  color={'white'}
                />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>SMS</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.altIcon, {backgroundColor: '#00cd00'}]}>
                <Ionicons name="logo-whatsapp" size={30} color={'white'} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Whatsapp</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.altIcon, {backgroundColor: '#1877F2'}]}>
                <Ionicons name="logo-facebook" size={30} color={'white'} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>Facebook</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={[
                  styles.altIcon,
                  {marginRight: 15, backgroundColor: 'black'},
                ]}>
                <Ionicons name="logo-twitter" size={30} color={'white'} />
              </View>
              <Text style={{fontSize: 12, marginTop: 5}}>X</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </BottomSheet>
  );
});

export default ShareBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  searchInput: {
    padding: 8,
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    marginRight: 15,
  },
  altIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    backgroundColor: '#e8e8e8',
    borderRadius: 27.5,
    marginHorizontal: 11,
  },
});

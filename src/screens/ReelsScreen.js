import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import ReelsHeader from '../header/ReelsHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video'; // Video kütüphanesi dahil edildi
import dummyData from './dummyData'; // Yerel veriyi import et
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const {height, width} = Dimensions.get('screen');

const ReelsScreen = () => {
  const bottomHeight = useBottomTabBarHeight();
  const [isFollowed, setIsFollowed] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPaused, setIsVideoPaused] = useState(false); // Video duraklatma durumunu takip etmek için yeni bir state

  const [reels, setReels] = useState([]);
  // Axios kullanmak yerine yerel veriyi doğrudan alıyoruz
  const fetchData = async () => {
    try {
      // Yerel veriyi set ediyoruz
      setReels(dummyData.reels);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Bileşen yüklendiğinde veri çek
  }, []);

  const onScrollEndDrag = event => {
    const slideSize = videoHeight;
    const index = event?.nativeEvent?.contentOffset?.y / slideSize;
    const roundIndex = Math.round(index);

    if (roundIndex > -1) {
      setCurrentIndex(roundIndex);
    }
  };
  const videoHeight = height - bottomHeight;

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.container,
          {
            height: videoHeight,
          },
        ]}>
        <Pressable onPress={() => setIsVideoPaused(!isVideoPaused)}>
          <Video
            source={{
              uri: item.video,
            }}
            style={{
              height: videoHeight,
            }}
            controls={false}
            resizeMode="contain"
            loop
            volume={0}
            paused={
              isVideoPaused
                ? index !== currentIndex || isVideoPaused
                : index !== currentIndex
            } // Video duraklatma durumunu kontrol et
            onEnd={() => {
              // Video bitince tekrar oynasın
              setIsVideoPaused(false);
            }}
          />
          {isVideoPaused && (
            <View style={styles.pauseButtonContainer}>
              <Ionicons name="play-circle-outline" size={50} color="white" />
            </View>
          )}
        </Pressable>

        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
          }}>
          <View
            style={{
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.profileImage}}
                  style={styles.profileImage}
                />
                <Text style={{color: 'white', marginHorizontal: 10}}>
                  {item?.username}
                </Text>
                <TouchableOpacity
                  style={styles.followButton}
                  onPress={() => setIsFollowed(!isFollowed)}>
                  <Text
                    style={{
                      color: 'white',
                      paddingVertical: 2,
                    }}>
                    {isFollowed ? 'Takip Et' : 'Takip'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginVertical: 10}}>
                <Text style={{color: 'white'}}>{item?.description}</Text>
              </View>

              <View
                style={{
                  backgroundColor: '#1c1c1c',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 3,
                  }}>
                  <Ionicons
                    name="musical-notes-outline"
                    size={13}
                    color="white"
                    style={{marginRight: 5}}
                  />
                  <Text style={{color: 'white', fontSize: 11}}>
                    {item?.username} - Orijinal ses
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginLeft: 'auto', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                <Ionicons
                  name="heart-outline"
                  size={25}
                  style={isLiked ? {color: 'red'} : styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: 'white', marginTop: 6, fontSize: 12}}>
                  Beğen...
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="chatbubble-outline"
                  size={25}
                  style={styles.icon}
                />
                <Text style={{color: 'white', marginTop: 3}}>222</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="paper-plane-outline"
                  size={25}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-vertical-outline"
                  size={20}
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="musical-notes-outline"
                  size={16}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 40,
          flexDirection: 'row',
          alignItems: 'center',
          right: 0,
          left: 0,
          justifyContent: 'space-between',
          zIndex: 1,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Ionicons name="camera-outline" size={24} color="white" />
      </View>

      <FlatList
        data={reels}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        bounces={false}
        snapToInterval={videoHeight}
        showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        pagingEnabled
        onMomentumScrollEnd={onScrollEndDrag}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  profileImage: {width: 40, height: 40, borderRadius: 20},
  icon: {marginTop: 15, color: 'white'},
  followButton: {
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: 'white',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  video: {},

  pauseButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}], // Düğmeyi ortalamak için transform
  },
});

export default ReelsScreen;

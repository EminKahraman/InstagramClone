import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import CompleteProfile from '../../CompleteProfile';

const numColumns = 3;
const imageSize = Dimensions.get('window').width / numColumns; // Her bir resim için boyut

const PostsTab = ({navigation, route}) => {
  const {firstName, bio, avatar, profileImageUrl} = useSelector(
    state => state.auth.user,
  );
  const {isMe} = route.params || {isMe: false};
  const [randomImages, setRandomImages] = useState([]);
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    const generateRandomImages = () => {
      const images = [...Array(3)].map((_, index) => {
        const randomIndex = Math.floor(Math.random() * 100);
        return `https://picsum.photos/100?random=${randomIndex}`;
      });
      setRandomImages(images);
    };
    generateRandomImages();
  }, []);

  const renderMyPost = ({item}) => (
    <View style={styles.imageRow}>
      <Pressable
        onPress={isMe ? () => navigation.navigate('PostDetail', {item}) : null}>
        <Image source={{uri: item?.url ?? item}} style={styles.image} />
      </Pressable>
    </View>
  );

  const renderContent = () => {
    if (isMe) {
      if (user?.posts?.length > 0) {
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
              data={[...(user?.posts || [])].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
              )}
              renderItem={renderMyPost}
              numColumns={numColumns}
            />

            {[firstName, avatar, bio, profileImageUrl].every(Boolean) ? null : (
              <>
                <View
                  style={{
                    marginTop: 50,
                    marginHorizontal: 15,
                    marginBottom: 15,
                  }}>
                  <Text style={{fontWeight: '600', fontSize: 16}}>
                    Profilini doldur
                  </Text>
                  <Text style={{fontSize: 11, fontWeight: '600'}}>
                    {[
                      firstName ? 1 : 0,
                      avatar ? 1 : 0,
                      bio ? 1 : 0,
                      profileImageUrl ? 1 : 0,
                    ].reduce((acc, val) => acc + val, 0)}{' '}
                    / 4
                    <Text style={{color: '#4f4f4f', fontWeight: '600'}}>
                      Tamamlandı
                    </Text>
                  </Text>
                </View>
                <CompleteProfile navigation={navigation} />
              </>
            )}
          </ScrollView>
        );
      } else {
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{alignItems: 'center', marginTop: 50}}>
              <Text style={styles.text}>Bir arkadaşınla</Text>
              <Text style={styles.text}>birlikte anı yakala</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Share')}>
                <Text style={styles.link}>İlk gönderini oluştur</Text>
              </TouchableOpacity>
            </View>

            {[firstName, avatar, bio, profileImageUrl].every(Boolean) ? null : (
              <>
                <View
                  style={{
                    marginTop: 50,
                    marginHorizontal: 15,
                    marginBottom: 15,
                  }}>
                  <Text style={{fontWeight: '600', fontSize: 16}}>
                    Profilini doldur
                  </Text>
                  <Text style={{fontSize: 11, fontWeight: '600'}}>
                    {[
                      firstName ? 1 : 0,
                      avatar ? 1 : 0,
                      bio ? 1 : 0,
                      profileImageUrl ? 1 : 0,
                    ].reduce((acc, val) => acc + val, 0)}{' '}
                    / 4
                    <Text style={{color: '#4f4f4f', fontWeight: '600'}}>
                      {' '}
                      Tamamlandı
                    </Text>
                  </Text>
                </View>
                <CompleteProfile navigation={navigation} />
              </>
            )}
          </ScrollView>
        );
      }
    } else {
      return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <FlatList
            data={randomImages}
            renderItem={renderMyPost}
            numColumns={numColumns}
          />
        </View>
      );
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {fontWeight: 'bold', fontSize: 22},
  link: {color: '#094be5', fontWeight: '600', marginTop: 10},
  image: {
    width: imageSize,
    height: imageSize,
  },
  imageRow: {
    margin: 1,
  },
});

export default PostsTab;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';

const numColumns = 3;
const imageSize = Dimensions.get('window').width / numColumns; // Her bir resim için boyut

const ScreenOne = ({navigation, route}) => {
  const {isMe} = route.params || {isMe: false};
  const [randomImages, setRandomImages] = useState([]);
  const {user, selectedImages} = useSelector(state => state.auth);

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

  const renderItem = ({item}) => (
    <View style={styles.imageRow}>
      <TouchableOpacity
        onPress={isMe ? () => navigation.navigate('PostDetail', {item}) : null}>
        <Image source={{uri: item?.url ?? item}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );

  const renderContent = () => {
    if (isMe) {
      if (user?.posts?.length > 0) {
        return (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
              data={[...(user?.posts || [])].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
              )}
              renderItem={renderItem}
              numColumns={numColumns}
            />
          </View>
        );
      } else {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>Bir arkadaşınla</Text>
            <Text style={styles.text}>birlikte anı yakala</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Share')}>
              <Text style={styles.link}>İlk gönderini oluştur</Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else {
      return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <FlatList
            data={randomImages}
            renderItem={renderItem}
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

export default ScreenOne;

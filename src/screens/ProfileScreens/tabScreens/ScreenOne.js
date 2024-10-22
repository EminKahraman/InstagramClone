import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useState} from 'react';

const ScreenOne = ({navigation, route}) => {
  const {isMe} = route.params || {isMe: false};
  const [randomImages, setRandomImages] = useState([]);

  React.useEffect(() => {
    const generateRandomImages = () => {
      const images = [...Array(7)].map((_, index) => {
        const randomIndex = Math.floor(Math.random() * 100);
        return `https://picsum.photos/100?random=${randomIndex}`;
      });
      setRandomImages(images);
    };
    generateRandomImages();
  }, []);

  return (
    <View style={styles.container}>
      <View style={isMe ? styles.content : {flex: 1, backgroundColor: 'white'}}>
        {isMe ? (
          <>
            <Text style={styles.text}>Bir arkadaşınla</Text>
            <Text style={styles.text}>birlikte anı yakala</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Share')}>
              <Text style={styles.link}>İlk gönderini oluştur</Text>
            </TouchableOpacity>
          </>
        ) : (
          <ScrollView>
            {randomImages.map((image, index) => (
              <View key={index} style={styles.imageRow}>
                {randomImages.slice(index, index + 3).map((image, subIndex) => (
                  <Image
                    key={subIndex}
                    source={{uri: image}}
                    style={styles.profileImage}
                  />
                ))}
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontWeight: 'bold', fontSize: 22},
  link: {color: '#094be5', fontWeight: '600', marginTop: 10},
  profileImage: {
    height: 100,
    margin: 2,
    flex: 1,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ScreenOne;

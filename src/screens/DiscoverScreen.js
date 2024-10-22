import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import DiscoverHeader from '../header/DiscoverHeader';

const {width, height} = Dimensions.get('screen');

const DiscoverScreen = () => {
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
      <DiscoverHeader />
      <ScrollView>
        {randomImages.map((image, index) => (
          <View key={index} style={styles.imageRow}>
            {randomImages.slice(index, index + 3).map((image, subIndex) => (
              <Image
                key={subIndex}
                source={{uri: image}}
                style={styles.image}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    height: width / 3,
    height: width / 3,
    margin: 1,
    flex: 1,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

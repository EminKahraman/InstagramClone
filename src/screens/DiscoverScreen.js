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

const numColumns = 3;
const imageSize = Dimensions.get('window').width / numColumns; // Her bir resim için boyut

const DiscoverScreen = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [groupedData, setGroupedData] = useState([]);

  React.useEffect(() => {
    const generateRandomImages = () => {
      const images = [...Array(22)].map((_, index) => {
        const randomIndex = Math.floor(Math.random() * 100);
        return `https://picsum.photos/100?random=${randomIndex}`;
      });
      setRandomImages(images);
    };
    generateRandomImages();
  }, []);

  React.useEffect(() => {
    const groupImages = () => {
      const groupedData = [];
      for (let i = 0; i < randomImages.length; i += numColumns) {
        groupedData.push(randomImages.slice(i, i + numColumns));
      }
      setGroupedData(groupedData);
    };
    groupImages();
  }, [randomImages]);

  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <ScrollView>
        {groupedData.map((group, index) => (
          <View key={index} style={styles.imageRow}>
            {group.map((image, subIndex) => (
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
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

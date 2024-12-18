import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import HomePageHeader from '../header/HomePageHeader';
import Stories from './Stories';
import PostList from './PostList';
import PostBottomSheet from '../components/BottomSheets/Post';

const HomePageScreen = ({navigation}) => {
  const defaultBottomSheetReference = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handlePostBottomSheet = () => {
    defaultBottomSheetReference.current?.present();
  };

  // Status bar yüksekliği ve header yüksekliğini hesaplıyoruz
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;
  const HEADER_HEIGHT = 40 + STATUS_BAR_HEIGHT; // Header ve Status Bar toplam yüksekliği

  // Header animasyon ayarları - daha hızlı kayma için inputRange ve tension değerleri güncellendi
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 50], // 100'den 50'ye düşürüldü
    outputRange: [HEADER_HEIGHT, 0],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50], // 100'den 50'ye düşürüldü
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar'ın altına gelecek şekilde Animated Header */}
      <Animated.View style={{height: headerHeight, opacity: headerOpacity}}>
        <HomePageHeader navigation={navigation} />
      </Animated.View>

      <FlatList
        showsVerticalScrollIndicator={false} 
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => null} // Liste boş, içerik header ve post bileşeninde
        ListHeaderComponent={() => (
          <>
            <Stories navigation={navigation} />
            <PostList
              navigation={navigation}
              openBottomSheet={handlePostBottomSheet}
            />
          </>
        )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={8} // 16'dan 8'e düşürüldü - daha sık güncelleme
      />

      <PostBottomSheet ref={defaultBottomSheetReference} />
    </SafeAreaView>
  );
};

export default HomePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
});

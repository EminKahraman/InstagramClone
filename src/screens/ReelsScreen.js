import {View, StyleSheet, Text} from 'react-native';
import ReelsHeader from '../header/ReelsHeader';

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <ReelsHeader />
      <View style={styles.text}>
        <Text>Reels Sayfası</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ReelsScreen;

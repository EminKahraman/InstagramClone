import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostsHeader = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 10,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginLeft: 10}}>
        <Ionicons name="arrow-back-outline" size={25} />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 30}}>
        Gönderiler
      </Text>
    </SafeAreaView>
  );
};

export default PostsHeader;

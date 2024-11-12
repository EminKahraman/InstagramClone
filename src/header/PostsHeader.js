import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostsHeader = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginLeft: 10}}>
        <Ionicons name="arrow-back-outline" size={27} />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 30}}>
        Posts
      </Text>
    </View>
  );
};

export default PostsHeader;

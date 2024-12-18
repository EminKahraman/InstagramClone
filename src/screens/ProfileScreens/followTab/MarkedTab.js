import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const MarkedTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        İşaretlenmiş istek yok
      </Text>
      <Text style={{ textAlign: 'center', color: '#696969', lineHeight: 20 }}>
        Spam veya alakasız olma olasılığı {'\n'} yüksek olan hesaplar seni takip
        etmeyi {'\n'} denerse bu istekleri burada silebilir veya
      </Text>
      <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 1 }}>
        <Text style={{ color: '#696969' }}>onaylayabilirsin. </Text>
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#1c0f45', fontWeight: '500' }}>
            Daha fazla bilgi al.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MarkedTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

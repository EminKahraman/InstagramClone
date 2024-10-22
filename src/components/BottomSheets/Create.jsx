import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {forwardRef, useEffect} from 'react';
import {BottomSheet} from '../BottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CreateBottomSheet = forwardRef((props, ref) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      ref.current?.dismiss();
    });

    return unsubscribe;
  }, [navigation, ref]);

  return (
    <BottomSheet ref={ref} {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>Oluştur</Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 60,
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'film-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Reels Videosu</Text>
          </Pressable>

          <View
            style={{
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              marginLeft: 40,
            }}></View>

          <Pressable
            onPress={() => navigation.navigate('Share')}
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons name={'apps-sharp'} size={25} style={{marginRight: 15}} />
            <Text style={{fontSize: 16}}>Gönderi</Text>
          </Pressable>

          <View
            style={{
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              marginLeft: 40,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'add-circle-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Hikaye</Text>
          </View>

          <View
            style={{
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              marginLeft: 40,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'heart-circle-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Öne çıkan hikaye</Text>
          </View>

          <View
            style={{
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              marginLeft: 40,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Ionicons
              name={'radio-outline'}
              size={25}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 16}}>Canlı</Text>
          </View>

          <View
            style={{
              borderBottomColor: '#f2f2f2',
              borderBottomWidth: 1,
              marginLeft: 40,
            }}></View>
        </View>
      </View>
    </BottomSheet>
  );
});

export default CreateBottomSheet;

const styles = StyleSheet.create({
  container: {},
  header: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 10,
  },
});

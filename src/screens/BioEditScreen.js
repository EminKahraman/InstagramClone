import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {ref as dbRef, update} from 'firebase/database';
import database from '@react-native-firebase/database';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {setBio, setUser} from '../redux/authSlice';
import {getAuth} from '@react-native-firebase/auth';
import {db} from '../../firebaseConfig';

const BioSchema = Yup.object().shape({
  bio: Yup.string().max(150, 'Biyografi en fazla 150 karakter olmalıdır'),
});

const BioEditScreen = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const handleSaveBio = async values => {
    setLoading(true);
    try {
      const userRef = dbRef(db, `users/${currentUser.uid}`);
      await update(userRef, {bio: values.bio});
      const userSnapshot = await database()
        .ref(`users/${currentUser?.uid}`)
        .once('value');
      if (userSnapshot.exists()) {
        Alert.alert('Başarılı', 'Biyografi kaydedildi!');
        const userData = userSnapshot.val();
        dispatch(setUser(userData));
        navigation.goBack();
      }
    } catch (error) {
      console.log('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          bio: '',
        }}
        validationSchema={BioSchema}
        onSubmit={handleSaveBio}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <View style={styles.header}>
              <Ionicons
                name="close-outline"
                size={30}
                onPress={() => navigation.goBack()}
              />
              <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 30}}>
                Biyografi
              </Text>
              <TouchableOpacity
                style={{marginLeft: 'auto'}}
                onPress={handleSubmit}
                disabled={loading}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Ionicons name="checkmark" size={30} color={'#094be5'} />
                )}
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 15, marginTop: 30}}>
              <Text style={styles.text}>Biyografi</Text>
              <TextInput
                style={styles.border}
                value={values.bio}
                onChangeText={handleChange('bio')}
                placeholder={`${user.bio}`}
              />
              {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default BioEditScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    marginBottom: 10,
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 7,
    color: '#696969',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
});

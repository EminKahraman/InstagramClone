import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setUsername,
  setProfileImageUrl,
  setUser,
  setEmail,
  setFirstName,
} from '../redux/authSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz e-posta').required('E-posta gerekli'),
  password: Yup.string().required('Şifre gerekli'),
});

const LoginScreen = ({navigation}) => {
  const {user} = useSelector(state => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [initializing, setInitializing] = useState(true);

  // Kullanıcı durumunu dinleyen fonksiyon
  async function onAuthStateChanged(user) {
    const uid = user?.uid;
    console.log('user', user);

    const userSnapshot = await database().ref(`users/${uid}`).once('value');

    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();
      dispatch(setUser(userData));
      const profileImageUrl = `https://picsum.photos/200?random=${Math.floor(
        Math.random() * 1000,
      )}`;
      dispatch(setProfileImageUrl(profileImageUrl));
      console.log('userData', userData);
    } else {
      console.log('Kullanıcı verileri bulunamadı');
    }

    setUser(user);
    if (initializing) setInitializing(false);
    if (user) navigation.navigate('Tab');
  }
  console.log(initializing);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  const handleLogin = async (values, {resetForm}) => {
    setLoading(true);
    try {
      const response = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );

      const uid = response.user.uid;

      const userSnapshot = await database().ref(`users/${uid}`).once('value');

      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        console.log('data', userData);
        dispatch(setUser(userData));
      } else {
        console.log('Kullanıcı verileri bulunamadı');
      }

      const profileImageUrl = `https://picsum.photos/200?random=${Math.floor(
        Math.random() * 1000,
      )}`;
      dispatch(setProfileImageUrl(profileImageUrl));
      navigation.navigate('Tab');
    } catch (error) {
      console.log('error', error);
      let errorMessage = 'Bir hata oluştu.';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Kullanıcı bulunamadı.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Yanlış şifre.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Geçersiz e-posta adresi.';
          break;
        case 'auth/invalid-credential':
          errorMessage =
            'Geçersiz kimlik bilgileri. Lütfen e-posta adresinizi ve şifrenizi kontrol edin.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Hata', errorMessage);
    } finally {
      setLoading(false);
      resetForm();
    }
  };
  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.body}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968776.png',
                  }}
                  style={styles.instagramİcon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="E-posta adresinizi giriniz..."
                  placeholderTextColor="#6b6b6b"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Şifrenizi giriniz..."
                    placeholderTextColor="#7f7f7f"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    autoCapitalize="none"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleSubmit}
                  disabled={loading}>
                  {loading ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Giriş yap
                    </Text>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.passwordResetButton}
                  onPress={() => navigation.navigate('PasswordReset')}>
                  <Text>Şifreni mi unuttun?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={{color: '#094be5', fontWeight: 'bold'}}>
                    Yeni hesap oluştur
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#094be5',
    borderColor: 'white',
  },
  passwordResetButton: {
    padding: 10,
    alignItems: 'center',
  },
  registerButton: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: '#094be5',
  },
  instagramİcon: {
    alignSelf: 'center',
    marginBottom: 100,
    width: 75,
    height: 75,
  },
  body: {
    marginTop: 130,
    gap: 10,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  passwordContainer: {
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    marginLeft: 330,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  errorText: {
    color: 'red',
    marginHorizontal: 20,
    fontSize: 12,
  },
});

export default LoginScreen;

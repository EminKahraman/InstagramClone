import database from '@react-native-firebase/database';
import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  Alert,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {
  setFirstName,
  setCity,
  setGender,
  setUsername,
} from '../redux/authSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Kullanıcı adı en az 3 karakter olmalıdır')
    .required('Kullanıcı adı gereklidir'),
  password: Yup.string()
    .min(4, 'Şifre en az 4 karakter olmalıdır')
    .required('Şifre gereklidir'),
  firstName: Yup.string().required('İsim ve soyisim gereklidir'),
  city: Yup.string().required('Memleket gereklidir'),
  gender: Yup.string().required('Cinsiyet gereklidir'),
  email: Yup.string().email('Geçersiz e-posta').required('E-posta gerekli'),
});

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (values, { setSubmitting }) => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(userCredential => {
        const user = userCredential.user;
        return database()
          .ref('users/' + user.uid)
          .set({
            username: values.username,
            firstName: values.firstName,
            city: values.city,
            gender: values.gender,
          });
      })
      .then(() => {
        Alert.alert('Başarılı', 'Kullanıcı kaydedildi!');
        dispatch(setUsername(values.username));
        dispatch(setFirstName(values.firstName));
        dispatch(setCity(values.city));
        dispatch(setGender(values.gender));
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Hata', 'Bu e-posta adresi zaten kullanılıyor.');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Hata', 'Geçersiz e-posta adresi.');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Hata', 'Şifre çok zayıf.');
        } else {
          Alert.alert('Hata', error.message);
        }
      })
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          email: 'emin@gmail.com',
          password: '111111',
          username: 'emin',
          firstName: 'Emin Kahraman',
          city: 'İstanbul',
          gender: 'Erkek',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ gap: 10, marginTop: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="Kullanıcı adınızı giriniz..."
              placeholderTextColor="#7f7f7f"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="E-mail giriniz..."
              placeholderTextColor="#7f7f7f"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
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
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="İsim ve soyisminizi giriniz..."
              placeholderTextColor="#7f7f7f"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              autoCapitalize="words"
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Memleketinizi giriniz..."
              placeholderTextColor="#7f7f7f"
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              autoCapitalize="words"
            />
            {touched.city && errors.city && (
              <Text style={styles.errorText}>{errors.city}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Cinsiyetiniz giriniz..."
              placeholderTextColor="#7f7f7f"
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              autoCapitalize="words"
            />
            {touched.gender && errors.gender && (
              <Text style={styles.errorText}>{errors.gender}</Text>
            )}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  Yeni hesap oluştur
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
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
  loginButton: {
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#094be5',
    borderColor: 'white',
  },
  passwordContainer: {
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    marginLeft: 330,
  },
});

export default RegisterScreen;

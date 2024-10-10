import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const PasswordResetSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz e-posta').required('E-posta gereklidir'),
  currentPassword: Yup.string().required('Mevcut şifre gereklidir'),
  newPassword: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalıdır')
    .required('Yeni şifre gereklidir'),
});

const PasswordResetScreen = () => {
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigation = useNavigation();

  const handlePasswordReset = async (values, {resetForm}) => {
    setLoading(true);
    try {
      const user = auth().currentUser;
      const credential = auth.EmailAuthProvider.credential(
        values.email,
        values.currentPassword,
      );

      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(values.newPassword);

      Alert.alert('Başarılı', 'Şifreniz başarıyla güncellendi.', [
        {text: 'Tamam', onPress: () => navigation.navigate('Login')},
      ]);
      resetForm();
    } catch (error) {
      let errorMessage = 'Bir hata oluştu.';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Bu e-posta adresiyle kayıtlı kullanıcı bulunamadı.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Geçersiz kimlik bilgileri.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Geçersiz e-posta adresi.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Hata', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', currentPassword: '', newPassword: ''}}
        validationSchema={PasswordResetSchema}
        onSubmit={handlePasswordReset}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{marginTop: 10}}>
            <TextInput
              style={styles.input}
              placeholder="E-posta adresinizi giriniz..."
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#7f7f7f"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Mevcut şifrenizi giriniz..."
                autoCapitalize="none"
                placeholderTextColor="#7f7f7f"
                secureTextEntry={!showCurrentPassword}
                onChangeText={handleChange('currentPassword')}
                onBlur={handleBlur('currentPassword')}
                value={values.currentPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}>
                <Ionicons
                  name={showCurrentPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            {touched.currentPassword && errors.currentPassword && (
              <Text style={styles.errorText}>{errors.currentPassword}</Text>
            )}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Yeni şifrenizi giriniz..."
                autoCapitalize="none"
                placeholderTextColor="#7f7f7f"
                secureTextEntry={!showNewPassword}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowNewPassword(!showNewPassword)}>
                <Ionicons
                  name={showNewPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            {touched.newPassword && errors.newPassword && (
              <Text style={styles.errorText}>{errors.newPassword}</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={loading}>
              <Text style={styles.buttonText}>
                {loading ? 'İşleniyor...' : 'Şifreyi değiştir'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  passwordInput: {
    flex: 1,
    padding: 15,
  },
  eyeIcon: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginHorizontal: 20,
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#094be5',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

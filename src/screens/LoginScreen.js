import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/authSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = () => {
    database()
      .ref('users')
      .orderByChild('username')
      .equalTo(username)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          const userData = Object.values(snapshot.val())[0];
          if (userData.password === password) {
            // Gerçek uygulamada şifre karşılaştırması farklı yapılmalı
            navigation.navigate('Home');
          } else {
            Alert.alert('Hata', 'Yanlış şifre.');
          }
        } else {
          Alert.alert('Hata', 'Kullanıcı bulunamadı.');
        }
      })
      .catch(error => {
        Alert.alert('Hata', error.message);
      });

    const profileImageUrl = `https://picsum.photos/200?random=${Math.floor(
      Math.random() * 1000,
    )}`;
    dispatch(login({username, profileImageUrl}));

    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text style={styles.title}>Instagram Clone</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry={!showPassword} // Şifre görünürlüğü için kontrol
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

        <Button title="Giriş Yap" onPress={handleLogin} />
      </View>
      <View style={{marginBottom: 20}}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.registerButtonText}>Yeni Hesap Oluştur</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  passwordContainer: {
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    marginLeft: 320,
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
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default LoginScreen;

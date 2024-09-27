import database from '@react-native-firebase/database';
import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Kullanıcı adının benzersiz olduğunu kontrol et
    database()
      .ref('users')
      .orderByChild('username')
      .equalTo(username)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          Alert.alert('Hata', 'Bu kullanıcı adı zaten kullanılıyor.');
        } else {
          // Yeni kullanıcıyı kaydet
          database()
            .ref('users')
            .push()
            .set({
              username: username,
              password: password, // Gerçek uygulamada şifreyi hash'lemelisiniz!
            })
            .then(() => {
              Alert.alert('Başarılı', 'Kullanıcı kaydedildi!');
              navigation.navigate('Login');
            })
            .catch(error => {
              Alert.alert('Hata', error.message);
            });
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hesap Oluştur</Text>
      <Text style={styles.subtitle}>
        Kullanıcı adınızı istediğin zaman değiştirebilirsiniz.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı adınızı giriniz..."
        placeholderTextColor="#7f7f7f"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifrenizi giriniz..."
        placeholderTextColor="#7f7f7f"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: '#cccccc',
  },
});

export default RegisterScreen;

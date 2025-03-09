import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

// Navigációs stack típusdefiníciója
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

// Navigation prop típusának meghatározása
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
  const [nev, setNev] = useState('');
  const [jelszo, setJelszo] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        Nev: nev,
        Jelszo: jelszo,
      });
      const { token } = response.data;
      if (token) {
        await AsyncStorage.setItem('userToken', token);
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Hiba', 'Hibás név vagy jelszó');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Név"
        value={nev}
        onChangeText={setNev}
      />
      <TextInput
        style={styles.input}
        placeholder="Jelszó"
        value={jelszo}
        onChangeText={setJelszo}
        secureTextEntry
      />
      <Button title="Bejelentkezés" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'Apptea@gmail.com' && password === 'apptea123') {
      navigation.navigate('Menu');
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <ImageBackground source={require('../assets/WallpaperLogin.jpg')} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Ingresa tu correo electrónico"
        />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
        <Button
          title="Iniciar Sesión"
          onPress={handleLogin}
          buttonStyle={styles.loginButton}
        />
        <Button
          title="Olvidaste tu contraseña?"
          onPress={() => {}}
          buttonStyle={styles.forgotPasswordButton}
          titleStyle={styles.forgotPasswordButtonText}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  loginButton: {
    backgroundColor: 'green', // Cambia el color de fondo del botón de inicio de sesión a verde
    borderRadius: 5,
    marginTop: 10,
  },
  forgotPasswordButton: {
    backgroundColor: 'red', // Color de fondo rojo para el botón "Olvidaste tu contraseña?"
    borderRadius: 5,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: 'white', // Cambia el color del texto del botón "Olvidaste tu contraseña?" a blanco
  },
});

export default LoginScreen;

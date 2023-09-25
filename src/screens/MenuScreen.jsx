import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

function MenuScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Make A Choose"
          onPress={() => navigation.navigate('MakeAChooseScreen')}
          buttonStyle={styles.makeAChooseButton}
          titleStyle={styles.buttonText}
          containerStyle={styles.buttonContainerStyle}
          raised // Agrega un efecto de elevación al botón
          large // Hace que el botón sea más grande
        />
        {/* Puedes agregar más botones aquí en el futuro */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  makeAChooseButton: {
    backgroundColor: 'lightblue', // Cambia el color de fondo del botón a celeste
    borderRadius: 20, // Agrega bordes redondeados al botón
    padding: 20, // Aumenta el espacio interno del botón
    marginBottom: 20, // Agrega margen inferior al botón
  },
  buttonText: {
    fontSize: 18, // Establece el tamaño de fuente del botón
    fontWeight: 'bold', // Establece el peso de fuente del botón
    color: 'black', // Cambia el color del texto del botón a negro
  },
  buttonContainerStyle: {
    width: '100%', // Ajusta el ancho del botón al 80% del contenedor
  },
});

export default MenuScreen;

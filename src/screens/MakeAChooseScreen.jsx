import React, { useState } from 'react';
import { Text, View, Button, Alert, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';


const questions = [
  {
    question: 'Cuando estás en una clase donde debes hacer grupo con compañeros que no conoces ¿Qué es lo primero que debes hacer?',
    options: ['Ignorarlos y esperar las instrucciones', 'Presentarme con ellos', 'Pedirle al profesor que me cambie de grupo'],
    answer: 2,
  },
  {
    question: '¿Cuál es la moneda de Japón?',
    options: ['Yuan', 'Yen', 'Dólar', 'Euro'],
    answer: 1,
  },
  // Agrega más preguntas si lo deseas
];

function MakeAChoose() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const checkAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      Alert.alert('Correcto', '¡Esta es la respuesta correcta!');
    } else {
      Alert.alert('Incorrecto', 'Inténtalo de nuevo.');
    }
  };

  return (
    <ImageBackground source={require('../assets/fondo_PAzul.jpg')} style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.question}>
          {questions[currentQuestion].question}
        </Text>
      </View>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity 
          style={styles.optionBox} 
          key={index} 
          onPress={() => checkAnswer(index)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Anterior"
          disabled={currentQuestion === 0}
          onPress={() => setCurrentQuestion(currentQuestion - 1)}
        />
        <Button
          title="Siguiente"
          disabled={currentQuestion === questions.length - 1}
          onPress={() => setCurrentQuestion(currentQuestion + 1)}
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
  questionBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    fontWeight :'bold',
    color:'black',
    justifyContent:'center',
  },
  optionBox: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight :'bold',
    color:'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
});

export default MakeAChoose;

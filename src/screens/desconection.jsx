import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// importante instalar npm install react-native-picker-select


const Desconexion = () => {
  const [ideas, setIdeas] = useState([]);
  const [nuevaIdea, setNuevaIdea] = useState({
    titulo: '',
    asunto: null,
    texto: '',
  });

  const guardarIdea = () => {
    setIdeas([...ideas, nuevaIdea]);
    setNuevaIdea({ titulo: '', asunto: null, texto: '' });
  };

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Tus Ideas:</Text>
      <ScrollView style={{ marginBottom: 20 }}>
        {ideas.map((idea, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>{idea.titulo}</Text>
            <Text>{idea.asunto}</Text>
            <Text>{idea.texto}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        placeholder="Título"
        value={nuevaIdea.titulo}
        onChangeText={(text) => setNuevaIdea({ ...nuevaIdea, titulo: text })}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <RNPickerSelect
        onValueChange={(value) => setNuevaIdea({ ...nuevaIdea, asunto: value })}
        items={[
          { label: 'Personal', value: 'personal' },
          { label: 'Universidad', value: 'universidad' },
          { label: 'Familia', value: 'familia'},
          { label: 'Amigos', value: 'amigos'},
          { label: 'Trabajo', value: 'trabajo'},
          { label: 'Otros', value: 'otros'},
          // ...otros asuntos
        ]}
        placeholder={{ label: 'Selecciona un asunto...', value: null }}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Texto"
        value={nuevaIdea.texto}
        onChangeText={(text) => setNuevaIdea({ ...nuevaIdea, texto: text })}
        multiline
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title="Guardar Idea" onPress={guardarIdea} />
    </View>
  );
};

export default Desconexion;

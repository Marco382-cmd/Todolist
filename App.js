import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

 
  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote(''); 
    }
  };

 
  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Notes</Text>
      
      { }
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Type a note here"
      />
      
      {}
      <Button title="Add Note" onPress={addNote} />
      
      {}
      <View style={styles.notesContainer}>
        {notes.map((note, index) => (
          <View key={index} style={styles.noteItem}>
            <Text>{note}</Text>
            <TouchableOpacity onPress={() => removeNote(index)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  notesContainer: {
    marginTop: 20,
    width: '100%',
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

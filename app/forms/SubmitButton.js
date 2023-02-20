import React, { useContext } from 'react';
import { Button, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function SubmitButton({handleSubmit}) {
  <TouchableOpacity  onPress={handleSubmit} style={styles.buttonWrapper}>
    <Text>Add Task</Text>
  </TouchableOpacity>
  return (
    <Button title="Add Task" onPress={handleSubmit} />
  );
}

const styles = StyleSheet.create({
  buttonWrapper:{marginVertical:10, borderRadius:10, backgroundColor:'purple', padding:20,
height:200},
});

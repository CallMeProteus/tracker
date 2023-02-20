import React, { useState,useContext } from 'react';
import { View, Text, TextInput, Switch, StyleSheet,Platform, Button, Dimensions, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import TaskContext from '../context/TaskContext';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import DatePickerComponent from './DatePickerComponent';
import SubmitButton from './SubmitButton';


const {width, height} =Dimensions.get('window')
export default function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const [assignedTo, setAssignedTo] = useState('');
  const navigation=useNavigation()

  const { dispatch } = useContext(TaskContext);

  const handleSubmit = () => {
    if (!taskName){return alert('please add a task title')}
    dispatch({
      type: 'ADD_TASK',
      task: {
        title: taskName,
        isComplete: isComplete,
        dueDate: dueDate,
        assignedTo: assignedTo,
        id:uuid.v4()
      }
    });
    // reset the form fields
    setTaskName('');
    setIsComplete(false);
    setDueDate(new Date());
    setAssignedTo('');
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a task</Text>

      <TextInput
      placeholder='Task Title'
      style={styles.input}
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <View style={{flexDirection:'row', alignItems:'center',width:'100%', marginVertical:10}}>
      <Text style={styles.label}>  Is Complete</Text>
      <Switch

      // style={{width:'50%'}}
        value={isComplete}
        onValueChange={(value) => setIsComplete(value)}
      />
      </View>
    
     
      <DatePickerComponent dueDate={dueDate} setDueDate={setDueDate} mode={'date'} label={'Due Date'} />
     

    <View style={{marginVertical:10}}>
    <Text style={styles.label}>Assign this task to</Text>
          <Picker
            selectedValue={assignedTo}
            onValueChange={(value) => setAssignedTo(value)}
          >
            <Picker.Item label="Myself" value="Myself" />
            <Picker.Item label="John" value="John" />
            <Picker.Item label="Jane" value="Jane" />
            <Picker.Item label="Bob" value="Bob" />
          </Picker>
    </View>
 <SubmitButton handleSubmit={handleSubmit}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    heading:{
      fontSize: 32,
      fontWeight:'bold',
      alignSelf:'center',
      marginVertical:10
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
    datePicker: {
      width: 200,
      marginTop: 20,
    },
    input:{
width:"90%",height:50,
borderBottomWidth:1,
margin:8,
fontSize:24,
    }, label:{fontSize:20},
  });
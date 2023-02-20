import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AuthContext from '../../context/Context';

const EmployeeForm = () => {
  const { user, setUser } = useContext(AuthContext);

  const { employee, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);


  const [role, setRole] = useState('');
  const [schedule, setSchedule] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {

    if (employee.id) {
      updateEmployee(user.name, user.id, role, schedule, tasks);
    } else {
      addEmployee(user.name, user.id, role, schedule, tasks);
    }
  };

  return (
    <View style={styles.formContainer}>
   
      <Picker
        style={styles.picker}
        selectedValue={role}
        onValueChange={setRole}
      >
        <Picker.Item label="Select a role" value="" />
        <Picker.Item label="Intern" value="Intern" />
        <Picker.Item label="Director" value="Director" />
        <Picker.Item label="Sound " value="Sound" />
        <Picker.Item label="Editor" value="Editor" />
        <Picker.Item label="Developer" value="Developer" />
        <Picker.Item label="Chief Photographer" value="Chief Photographer" />
        <Picker.Item label="QA" value="QA" />
      </Picker>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleLabel}>Schedule</Text>
        <View style={styles.scheduleRowContainer}>
          <TextInput
            style={styles.scheduleInput}
            value={schedule.Monday}
            onChangeText={(text) => setSchedule({ ...schedule, Monday: text })}
            placeholder="Monday"
          />
          <TextInput
            style={styles.scheduleInput}
            value={schedule.Tuesday}
            onChangeText={(text) => setSchedule({ ...schedule, Tuesday: text })}
            placeholder="Tuesday"
          />
        </View>
        <View style={styles.scheduleRowContainer}>
          <TextInput
            style={styles.scheduleInput}
            value={schedule.Wednesday}
            onChangeText={(text) => setSchedule({ ...schedule, Wednesday: text })}
            placeholder="Wednesday"
          />
          <TextInput
            style={styles.scheduleInput}
            value={schedule.Thursday}
            onChangeText={(text) => setSchedule({ ...schedule, Thursday: text })}
            placeholder="Thursday"
          />
        </View>
        <View style={styles.scheduleRowContainer}>
          <TextInput
            style={styles.scheduleInput}
            value={schedule.Friday}
            onChangeText={(text) => setSchedule({ ...schedule, Friday: text })}
            placeholder="Friday"
          />
          <TextInput
            style={styles.scheduleInput}
            value={schedule.Saturday}
            onChangeText={(text) => setSchedule({ ...schedule, Saturday: text })}
            placeholder="Saturday"
          />
        </View>
      </View>
      <View style={styles.tasksContainer}>
        <Text style={styles.tasksLabel}>Tasks</Text>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskRowContainer}>
            <TextInput
              style={styles.taskInput}
              value={task.name}
              onChangeText={(text) => setTasks(tasks.map((task, i) => (index === i ? { ...task, name: text } : task)))}
              placeholder="Task Name"
            />
            <TextInput
              style={styles.taskInput}
              value={task.id}
              onChangeText={(text) => setTasks(tasks.map((task, i) => (index === i ? { ...task, id: text } : task)))}
              placeholder="Task ID"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.taskInput}
              value={task.isComplete}
              onChangeText={(text) => setTasks(tasks.map((task, i) => (index === i ? { ...task, isComplete: text } : task)))}
              placeholder="Task isComplete"
            />
            <TextInput
              style={styles.taskInput}
              value={task.estimated_completion_time}
              onChangeText={(text) => setTasks(tasks.map((task, i) => (index === i ? { ...task, estimated_completion_time: text } : task)))}
              placeholder="Estimated Completion Time"
            />
          </View>
        ))}
        <TouchableOpacity style={styles.addTaskButton} onPress={() => setTasks([...tasks, { name: '', id: '', isComplete: '', estimated_completion_time: '' }])}>
          <Text style={styles.addTaskButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    formContainer: {
      padding: 10,margin:20
    },
    input: {height: 40, borderColor: 'gray',borderWidth: 1,marginBottom: 10, padding: 5,},
     picker: {height: 40, marginBottom: 10,}, 
     scheduleContainer: { marginBottom: 10, },
     scheduleLabel: {fontWeight: 'bold',  marginBottom: 5, }, 
     scheduleRowContainer: {flexDirection: 'row',
      justifyContent: 'space-between', marginBottom: 5, },
      scheduleInput: {flex: 1,height: 40, borderColor: 'gray',
      borderWidth: 1,      padding: 5, }, tasksContainer: {
      marginBottom: 10, }, tasksLabel: { fontWeight: 'bold',
      marginBottom: 5, },taskRowContainer: {
      flexDirection: 'row',justifyContent: 'space-between',
      marginBottom: 5,},taskInput: {
      flex: 1, height: 40, borderColor: 'gray',borderWidth: 1,
      padding: 5, }, addTaskButton: {
      backgroundColor: '#0000FF', padding: 10,
      alignItems: 'center', marginTop: 10, },
      addTaskButtonText: { color: '#fff',fontWeight: 'bold', },
      submitButton: {backgroundColor: '#00FF00', padding: 10,
      alignItems: 'center', marginTop: 10, }, submitButtonText: { color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default EmployeeForm;




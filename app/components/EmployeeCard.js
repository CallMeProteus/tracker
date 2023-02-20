import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmployeeCard = ({ employee }) => {
  const { name, schedule, tasks } = employee;
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.scheduleContainer}>
        <View style={{marginRight:'40%'}}>
        {Object.entries(schedule).slice(0, 2).map(([day, time]) => (
            <Text key={day}>{`${day}: ${time}`}</Text>
          ))}
        </View>
       
          {tasks.length > 0 && !expanded && (
            <View style={styles.taskContainer}>
              <Text>{tasks[0].name}</Text>
            </View>
          )}
        </View>
        {expanded &&
          Object.entries(schedule).slice(2).map(([day, time]) => (
            <Text key={day}>{`${day}: ${time}`}</Text>
          ))}
        {expanded && tasks.map((task, index) => (
            <View key={index}>
              <Text>{task.name}</Text>
            </View>
          ))}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      marginHorizontal:10,
      borderRadius:10
    },
    name: {
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 10,
    },
    scheduleContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    taskContainer: {
      marginLeft: 10,
    },
  });
  
  export default EmployeeCard;
  
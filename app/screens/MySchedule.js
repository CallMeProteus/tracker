import React, { useContext,useState } from 'react';
import { View,Dimensions,  FlatList, SafeAreaView, StatusBar,StyleSheet, Text, TouchableOpacity, } from 'react-native';
import TaskContext from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmployeeCard from '../components/EmployeeCard';
import { EmployeeContext } from '../context/EmployeeContext';
const {width, height} = Dimensions.get('window')

export default function MySchedule() {
  const { employee } = useContext(EmployeeContext);
  const navigation = useNavigation()

console.log(employee.name?'true':'false')
  return (
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', width:'100%', padding:20}}>
      <Icon name="bars" size={28} color="#301934" onPress={()=>navigation.openDrawer()} />
        <Text style={styles.headerTitle}>My Schedule</Text>
      </View>
  <View style={styles.scheduleContainer}>
  {employee.name?
    <Text>{employee.name}</Text>
  :
<TouchableOpacity onPress={()=>navigation.navigate('employeeForm')} style = {{flex:1, justifyContent:'flex-start', alignItems:'center', marginTop:20}}>
    <Text style={{color:'grey'}} >
        Add a schedule
    </Text>
    <Icon name="plus" size={28} color="grey"  />

</TouchableOpacity>
  }
  
  </View>
   

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: StatusBar.currentHeight || 0 },
    item: { padding: 20, marginVertical: 4, marginHorizontal: 16, borderRadius:10,},
    title: {fontSize: 32, fontWeight:'bold' },
    headerTitle:{ fontSize: 32, fontWeight:'bold', color:'#301934', marginHorizontal:"21%" },
    scheduleContainer:{flex:1}
  });
import React, { useContext,useState } from 'react';
import { View,Dimensions,  FlatList, SafeAreaView, StatusBar,StyleSheet, Text, TouchableOpacity, } from 'react-native';
import TaskContext from '../context/TaskContext';import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmployeeCard from '../components/EmployeeCard';
import { EmployeeContext } from '../context/EmployeeContext';
const {width, height} = Dimensions.get('window')
export default function ScheduleScreen() {
  const { employee } = useContext(EmployeeContext);
  const [selectedId, setSelectedId] = useState();
  const navigation = useNavigation()

  const employee1=[
    {
      "name": "John Smith",
      "id": 12345,
      "role": "Manager",
      "schedule": {
          "Monday": "9am-5pm",
          "Tuesday": "9am-5pm",
          "Wednesday": "9am-5pm",
          "Thursday": "9am-5pm",
          "Friday": "9am-5pm"
      },
      "tasks": [
        {'name':"Meet with team",
        'id':1,
        'isComplete':'false',
        'estimated_completion_time':'23hrs',
      },
      {'name':"Review projects",
      'id':1,
      'isComplete':'false',
      'estimated_completion_time':'23hrs',
    },
    {'name':"Prepare reports",
    'id':1,
    'isComplete':'false',
    'estimated_completion_time':'23hrs',
  },
  {'name':"Attend meetings",
  'id':1,
  'isComplete':'false',
  'estimated_completion_time':'23hrs',
  },
      ]
  },
  {
    "name": "Ken Smith",
    "id": 12335,
    "role": "Manager",
    "schedule": {
        "Monday": "9am-5pm",
        "Tuesday": "9am-5pm",
        "Wednesday": "9am-5pm",
        "Thursday": "9am-5pm",
        "Friday": "9am-5pm"
    },
    "tasks": [
      {'name':"Meet with team",
      'id':1,
      'isComplete':'false',
      'estimated_completion_time':'23hrs',
    },
    {'name':"Review projects",
    'id':1,
    'isComplete':'false',
    'estimated_completion_time':'23hrs',
  },
  {'name':"Prepare reports",
  'id':1,
  'isComplete':'false',
  'estimated_completion_time':'23hrs',
},
{'name':"Attend meetings",
'id':1,
'isComplete':'false',
'estimated_completion_time':'23hrs',
},
    ]
}
]
// console.log(employee)
  return (
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', width:'100%', padding:20}}>
      <Icon name="bars" size={28} color="#301934" onPress={()=>navigation.openDrawer()} />
<Text style={styles.headerTitle}>Schedule</Text>
      </View>
  
      {employee1.map((emp, index) => (
          <EmployeeCard key={index} employee={emp} />
        ))}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 16,
      borderRadius:10,
    
    },
    title: {
      fontSize: 32,
      fontWeight:'bold'
    },
    headerTitle:{
      fontSize: 32,
      fontWeight:'bold',
      color:'#301934',
      marginHorizontal:"25%"
    }
  });
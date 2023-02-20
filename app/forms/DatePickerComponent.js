import { View, Text , Button, StyleSheet, TouchableOpacity} from 'react-native'
import React,{useState} from 'react';import { useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'


const DatePickerComponent = ({dueDate,setDueDate,mode,label}) => {
  const route = useRoute()
  const [datePicker, setDatePicker] = useState(false);
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDueDate(value);
    setDatePicker(false);
  };

  return (
  <>
<TouchableOpacity onPress={showDatePicker} style={styles.picker}>
<Text style={styles.label}>{label}</Text>
      <Text style={styles.label}> {route.name==='TaskForm'? dueDate.toDateString():dueDate.toLocaleTimeString('en-US')}</Text>
      {datePicker && (
        <DateTimePicker
          value={dueDate}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelected}
          style={styles.datePicker}
        />
      )}
  
</TouchableOpacity>

    </>
  )
}

export default DatePickerComponent


const styles = StyleSheet.create({

    datePicker: {
      width: 200,
      marginTop: 20,
    },
    label:{fontSize:20, color:'white'},picker:{marginVertical:10, borderRadius:10, backgroundColor:'purple', padding:20}
  });
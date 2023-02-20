import { EmployeeContext } from "../context/EmployeeContext";
import { View,Text,Button } from "react-native";
import { useContext } from "react";

 const Test = () => {
  const { employee, updateEmployee } = useContext(EmployeeContext);
  
  const handleUpdate = () => {
    updateEmployee('John Doe', '123', 'Manager', {Monday: '10-5'}, ['Task 1', 'Task 2']);
  }
  
  return (
    <View>
      <Text>Name: {employee.name}</Text>
      <Text>ID: {employee.id}</Text>
      <Text>Role: {employee.role}</Text>
      <Text>Monday Schedule: {employee.schedule.Monday}</Text>
      <Button title="Update Employee" onPress={handleUpdate} />
    </View>
  );
}
export default Test

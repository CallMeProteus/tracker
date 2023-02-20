import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeForm from "../forms/scheduleForms/EmployeeForm";
import TaskForm from "../forms/TaskForm";
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();


export default function HomeStack() {

  return (
    <>
    <Stack.Navigator>
    <Stack.Screen  name="Home"   component={HomeScreen}  options={{ headerShown: false }} />
    <Stack.Screen  name="TaskForm"   component={TaskForm}  options={{ headerShown: false }} />
    <Stack.Screen  name="employeeForm"   component={EmployeeForm}  options={{ headerShown: false }} />
    

    </Stack.Navigator>
    </>
    
  );
}


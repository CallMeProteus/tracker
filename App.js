import React, { useReducer,useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import TaskContext, {
  taskReducer,
  initialState,
} from "./app/context/TaskContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerComponent from "./app/components/Drawer";
import { EmployeeProvider } from "./app/context/EmployeeContext";
import AuthNavigator from "./app/navigation/AuthNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from "./app/context/Context";



export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState();

  

  useEffect(() => {

    const getUser = async () => {
      try {
          const userJson = await AsyncStorage.getItem('user');
          setUser(JSON.parse(userJson))
          return console.log(JSON.parse(userJson));
      } catch (error) {
          console.log(error);
      }
  };
    getUser()
      .catch(console.error);
  }, [])

  console.log('in appp js')
  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <EmployeeProvider>
      <TaskContext.Provider value={{ state, dispatch }}>
        <StatusBar style="auto" />
        <NavigationContainer>
        {user 
        ?<DrawerComponent />:
    <AuthNavigator/>
    }
        </NavigationContainer>
      </TaskContext.Provider>
    </EmployeeProvider>
    </AuthContext.Provider>

  );
}

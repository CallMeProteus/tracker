import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import ScheduleScreen from '../screens/ScheduleScreen';
import HomeStack from '../screens/HomeStack';
import MySchedule from '../screens/MySchedule';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }

const DrawerComponent = () => {
  return (
    <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <Drawer.Screen options={{headerShown:false}} name="home" component={HomeStack} />
      <Drawer.Screen options={{headerShown:false}} name="schedule" component={ScheduleScreen} />
      <Drawer.Screen options={{headerShown:false}} name="My schedule" component={MySchedule} />

    </Drawer.Navigator>
  )
}

export default DrawerComponent
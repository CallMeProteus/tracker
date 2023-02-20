import React, { useContext,useState } from 'react';
import { View,Dimensions,Switch,  FlatList, SafeAreaView, StatusBar,StyleSheet, Text, TouchableOpacity, } from 'react-native';
import TaskContext from '../context/TaskContext';import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const {width, height} = Dimensions.get('window')
export default function Tasks() {
  const { state } = useContext(TaskContext);
  const [selectedId, setSelectedId] = useState();
  const navigation = useNavigation()
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View>
      <Text>Assigned to: {item.assignedTo}</Text>
      <Text>Due date    {item.dueDate.toDateString()}</Text>
      </View>
      <View style={{width:'40%',height:'50%',alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
      <Text>Complete</Text>
      
      <Switch

style={{width:'50%'}}
  value={item.isComplete}
  //onValueChange={(value) => setIsComplete(value)}
/>
      </View>
  
</View>

    
   
     
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };  

  return (
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', width:'100%', padding:20}}>
      <Icon name="bars" size={28} color="#301934" onPress={()=>navigation.openDrawer()} />
<Text style={styles.headerTitle}>Activity</Text>
      </View>
  
      <FlatList
        data={state.tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />

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
      // alignSelf:'center',
      // marginVertical:2
      marginHorizontal:"25%"
    }
  });
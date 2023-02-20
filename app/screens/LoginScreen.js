import React,{useState,useContext} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-native-uuid';
import AuthContext from '../context/Context';







// saveUser(user);
const getUser = async () => {
    try {
        const userJson = await AsyncStorage.getItem('user');
        return JSON.parse(userJson);
    } catch (error) {
        console.log(error);
    }
};
export default function LoginScreen() {

    const { user, setUser } = useContext(AuthContext);




  const key='user';
  const [name, setName] = useState('');




  const saveUser = async (name) => {
    const user = {
        id:uuid.v4(),
        name: name,
        // email: 'johndoe@example.com',
    };
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setUser(user)
    } catch (error) {
        console.log(error);
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Set a UserName!</Text>
      
{/* <Text>{user}</Text> */}
    
      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        placeholder='username'
        onChangeText={text => setName(text)}
        value={name}
      />
 
      <Icon style={{alignSelf:'center',margin:'10%'}} name="arrow-right" size={28} color="#AA336A" onPress={()=>saveUser(name)} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '30%',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 38,
    color:'#AA336A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    
    borderColor: 'gray',borderBottomWidth:.4,
   fontSize:50,marginHorizontal:'25%',marginVertical:30,
    padding: 4,
  },
});

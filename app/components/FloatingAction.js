import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from "@react-navigation/native";




const actions = [
    {
      text: "Add Task",
      icon: require("../images/plus.png"),
      name: "TaskForm",
      position: 1,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    },
    {
      text: "My schedule",
      icon: require("../images/plus.png"),
      name: "employeeForm",
      position: 2,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    },
   
    {
      text: "Reports",
      //icon: require("./images/ic_videocam_white.png"),
      name: "flag",
      position: 3,
      textStyle:{fontWeight:'bold', color:"#fff", padding:4 },
      textBackground:'purple'
    }
  ];




const Floating = () => {
    const navigation = useNavigation()
    return (
        <FloatingAction
        actions={actions}
        color="purple"
        distanceToEdge={ 10 }
        buttonSize={60}
        onPressItem={name => {navigation.navigate(`${name}`)
          //console.log(`selected button: ${name}`);{panel(`${name}`, navigation)
        }}
      />
    );
  }


export default Floating;


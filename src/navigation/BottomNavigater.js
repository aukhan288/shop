import React,{useState, useEffect, useRef} from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
const Tab = createBottomTabNavigator();


const BottomNavigater=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Home1" component={HomeScreen}/>
      <Tab.Screen name="Home2" component={HomeScreen}/>
      <Tab.Screen name="Home4" component={HomeScreen}/>
      <Tab.Screen name="Home5" component={HomeScreen}/>
    </Tab.Navigator>
  );
}
export default BottomNavigater;





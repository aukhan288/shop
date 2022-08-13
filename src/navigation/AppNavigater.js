import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BottomNavigater from '../navigation/BottomNavigater';


const Stack = createNativeStackNavigator();

function AppNavigater(){
    return(
        <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Welcome',headerShown:false }}
        />    
       <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Welcome',headerShown:false }}
        />  
         <Stack.Screen
          name="BottomNavigater"
          component={BottomNavigater}
          options={{ title: 'Welcome',headerShown:false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
    )
}
export default AppNavigater;
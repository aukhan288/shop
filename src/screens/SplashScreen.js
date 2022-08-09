import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Dimensions, ActivityIndicator  } from "react-native";
import { LOGO } from "../constants/AppConstant"


const SplashScreen=()=>{
const { height, width }=Dimensions.get('screen');    
return(
    <>
    
    <View style={{height:height,width:width, alignItems:'center',justifyContent:'center',flex:1,position:'relative'}}>
    {/* <ActivityIndicator
    color={'#000'}
    size={'large'}
    
    style={{height:width/4,width:width/4,}}
    /> */}
        <Image
        style={{height:width*0.4,width:width*0.45}}
        source={LOGO}
        />
    </View>
    </>
)
}

export default SplashScreen;
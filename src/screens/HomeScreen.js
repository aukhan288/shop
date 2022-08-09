import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Dimensions, Image, TextInput, FlatList, TouchableHighlight } from "react-native";
import { LOGO, COLOR_CODE } from "../constants/AppConstant";
const { height, width } = Dimensions.get('screen');
const data=[
  {
    id:1,
    title:'All'
  },
  {
    id:2,
    title:'All'
  },
  {
    id:3,
    title:'All'
  },
  {
    id:4,
    title:'All'
  },
  {
    id:5,
    title:'All'
  },
  {
    id:6,
    title:'All'
  },
  {
    id:7,
    title:'All'
  },
]
const HomeScreen=()=>{
  return(
    <View style={{height:height,width:width,backgroundColor:'#fff',paddingTop:height*0.02,paddingHorizontal:width*0.05}}>
        <View style={{width:width}}>
            {/* <Image
            source={LOGO}
            style={{height:width*0.12,width:width*0.12}}
            /> */}
             <View >
                <Text style={{color:COLOR_CODE.DARK_RED,fontFamily:'PTSans-Bold',fontSize:width*0.1}}>Welcome!</Text>
                <Text style={{fontFamily:'PTSans-Bold',fontSize:width*0.05}}>Asadullah Khan</Text>
            </View> 
        </View>
        <FlatList
        horizontal={true}
  ItemSeparatorComponent={
    Platform.OS !== 'android' &&
    (({ highlighted }) => (
      <View
        style={[
          style.separator,
          highlighted && { marginLeft: 0 }
        ]}
      />
    ))
  }
  data={data}
  renderItem={({ item, index, separators }) => (
    <View
    style={{flex:1}}
      key={item.key}
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{}}>{item.title}</Text>
      </View>
    </View>
  )}
/>
    </View>
  )
}
export default HomeScreen;

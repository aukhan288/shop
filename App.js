

import React, { useState, useEffect, useRef } from "react";
import SplashScreen from './src/screens/SplashScreen';
import AppNavigater from './src/navigation/AppNavigater'

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={SplashScreen} />
//     </Drawer.Navigator>
//   );
// }


const App = (props) => {
  
  const [splashTimer,setSplashTimer]=useState(true)
  const timer=()=>{
    setTimeout(
      function() {
          setSplashTimer(false)
      }
      .bind(this),
      2000
    );
  }
  useEffect(()=>{},[
    timer()
  ])
  return (
    <>{
      splashTimer?<SplashScreen/>:<AppNavigater/>
    }
    </>
  );
};

export default App





import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {SplashProvider} from './context/SplashContextProvider';
import {NavigationContainer} from '@react-navigation/native';

// export default function App() {
//   return (
//     <SplashProvider>
//       <NavigationContainer>
//         <MyDrawer/>
//         {/* <Login /> */}
//       </NavigationContainer>
//     </SplashProvider>
//   );
// }

import {createDrawerNavigator} from '@react-navigation/drawer';
import { Login } from './screen/Login';
import { HomeScreen } from './screen/HomeScreen';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Login} />
        <Drawer.Screen name="Article" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;

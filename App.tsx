import React from 'react';
import {SplashProvider} from './context/SplashContextProvider';
import {Login} from './screen/Login';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <SplashProvider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </SplashProvider>
  );
}

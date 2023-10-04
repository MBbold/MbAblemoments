import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import React from 'react';
import SplashScreen from '../screen/SplashScreen';

const SplashContext = createContext();

export const SplashProvider = ({children}) => {
  const [isSplash, setIsSplash] = useState('');
  const {getItem, setItem} = useAsyncStorage('splash_key');
  const getItemData = async () => {
    const value = await getItem();
    setIsSplash(value);
  };
  const setItemData = async () => {
    await setItem('true');
  };
  useEffect(() => {
    setItemData();
    const myTimeout = setTimeout(getItemData, 2000);
  }, [isSplash]);
  return (
    <SplashContext.Provider value={{}}>
      {isSplash ? children : <SplashScreen />}
    </SplashContext.Provider>
  );
};

export const useSplashContext = () => useContext(SplashContext);
import React, {createContext} from 'react';
const LoginContex = createContext();

export const LoginProvider = ({children}) => {
    

//   async function getToken() {
//     let fcmToken = await AsyncStorage.getItem('device_token');
//     if (!fcmToken) {
//       fcmToken = await messaging().getToken();
//       if (fcmToken) {
//         console.log('FCM_TOKEN: ' + Platform.OS, fcmToken);
//         await AsyncStorage.setItem('device_token', fcmToken);
//       }
//     } else {
//       console.log('FCM_TOKEN: ' + Platform.OS, fcmToken);
//     }
//   }

  return <LoginContex.Provider value={{}}>{children}</LoginContex.Provider>;
};

export const useLoginContext = () => useContext(LoginContex);

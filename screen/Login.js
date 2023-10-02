import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {app_logo, login_password, login_user} from '../assets/icons';
import {SvgXml} from 'react-native-svg';
import {Button} from '../component/Button';
import messaging from '@react-native-firebase/messaging';
import {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginReq} from '../hook/GlobalFunc';
import {DomainModal} from '../modal/DomainModal';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [domainName, setDomainName] = useState({
    label: 'www.able.mn',
    value: 'https://www.able.mn/',
  });
  const [openDomainModal, setOpenDomainModal] = useState(false);
  bgImage = require('../assets/login_BG.jpg');

  async function checkApplicationPermission() {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
      getToken();
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log('User has provisional notification permissions.');
    } else {
      console.log('User has notification permissions disabled');
    }
  }
  async function getToken() {
    let fcmToken = await AsyncStorage.getItem('device_token');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // await AsyncStorage.setItem('device_token', fcmToken);
      }
    } else {
      console.log('FCM_TOKEN: ' + Platform.OS, fcmToken);
    }
  }
  return (
    <View className="flex-1 bg-black w-screen">
      <ImageBackground source={bgImage} className="flex-1">
        <KeyboardAvoidingView
          className="flex-1 items-center "
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            className="w-full"
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <SvgXml width={60} xml={app_logo('white')} />
            <View className="flex flex-row justify-center">
              <Text className="text-white font-extrabold text-xl">Able</Text>
              <Text className=" text-red-500 ml-2 text-xl font-extrabold">
                Moments
              </Text>
            </View>
            <View className=" flex flex-row w-4/6 text-white border-b-2 border-slate-300 justify-between items-center">
              <TextInput
                editable
                multiline
                placeholder="Нэвтрэх нэр"
                placeholderTextColor={'#ffff'}
                className=" text-white py-3 w-10/12"
                onChangeText={value => setUserName(value)}
              />
              <SvgXml width={30} height={30} xml={login_user('white')} />
            </View>
            <View className=" flex flex-row w-4/6 border-b-2 border-slate-300 justify-between items-center">
              <TextInput
                placeholder="Нууц үг"
                placeholderTextColor={'#ffff'}
                className=" text-white py-3 w-10/12"
                secureTextEntry={true}
                onChangeText={value => setPassword(value)}
              />
              <SvgXml width={30} height={30} xml={login_password('white')} />
            </View>
            <TouchableOpacity
              className=" w-4/6 h-14  justify-center items-center bg-red-500 rounded-md mt-8"
              onPress={() => LoginReq(userName, password, domainName.value)}>
              <Text className=" text-white text-base font-extrabold">
                Нэвтрэх
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // activeOpacity={1}
              onPress={() => setOpenDomainModal(true)}
              className=" w-3/5 h-24 bg-[#5F5E74] rounded-xl mt-10 items-center justify-center">
              <View className=" border-b-2 flex-0.5 w-5/6 mb-2 items-center border-teal-50">
                <Text className=" text-white mb-2 font-extrabold">
                  {domainName.label}
                </Text>
              </View>
              <Text className=" text-white flex-1.5 w-5/6">
                {'\b'}Able системийг хэрэглэдэг {'\n'} домайн хаягаа сонгоно уу!
              </Text>
            </TouchableOpacity>
            <DomainModal
              openDomainModal={openDomainModal}
              onClose={() => setOpenDomainModal(false)}
              setDomainName={setDomainName}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

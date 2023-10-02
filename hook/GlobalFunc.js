import { useState } from 'react';
import { Alert, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import RNFetchBlob from 'rn-fetch-blob';

export const FetchURL = async (url, method, body, header) => {
  let promise = new Promise(function (resolve, reject) {
    RNFetchBlob.config({
      trusty: true,
    })
      .fetch(
        method,
        `${url}`,
        header !== null ? header : null,
        body !== null ? body : null,
      )
      .then(response => {
        if (response.respInfo.status === 200) {
          return response.json();
        }
        return null;
      })
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        console.log('aldaaa', error);
        resolve(null);
      });
  });
  try {
    return await promise;
  } catch (err) {
    console.log('ererererer', err);
    return null;
  }
};
// const getWebUrl = ()=>{
//     setUrl(`${verfyDomain}moments.php?accessToken=${responseJson.data.accessToken}&serialNum=${DeviceInfo.getUniqueId().toString()}`)
// }
export const LoginReq = async (userName, password, verfyDomain) => {
  try {
    let deviceName = '';
    let ipAdd = '';
    DeviceInfo.getDeviceName().then(devName => {
      deviceName = devName;
    });
    DeviceInfo.getIpAddress().then(ip => {
      // "92.168.32.44"
      ipAdd = ip;
    });
    const body = [
      {name: 'uName', data: userName.toString()},
      {name: 'uPass', data: password.toString()},
      {name: 'appName', data: 'AbleNewsFeed'},
      {name: 'request', data: 'login'},
      {name: 'a', data: 'show'},
      {name: 't', data: 'read'},
      {name: 'isMobile', data: '1'},
      {name: 'versionCode', data: '10'},
      {name: 'osName', data: Platform.OS.toString()},
      {name: 'serialNum', data: DeviceInfo.getUniqueId().toString()},
      {name: 'deviceModel', data: deviceName.toString()},
      {name: 'osVersion', data: '10'},
      {name: 'appVersion', data: '10'},
      {name: 'ipAddress', data: ipAdd.toString()},
    ];
    if (userName === '' && password === '') {
      // Toast.show(
      //   'Нэвтрэлт амжилтгүй боллоо!\nХэрэглэгчийн нэр, нууц үг оруулна уу! ',
      //   failToast(3000),
      // );
      Alert.alert(
        'Нэвтрэлт амжилтгүй боллоо!\nХэрэглэгчийн нэр, нууц үг оруулна уу!',
      );
      return false;
    } else {
      return await FetchURL(verfyDomain + 'mobileApi.php?', 'POST', body)
        .then(async responseJson => {
            
          if (responseJson && responseJson.data.userId) {
            // setUserData(responseJson.data)
            Alert.alert('Амжилттай нэвтрэв');
            console.log('====================================');
            console.log('responseJson.data', responseJson.data);
            console.log('====================================');
            const url = `${verfyDomain}moments.php?accessToken=${responseJson.data.accessToken}&serialNum=${DeviceInfo.getUniqueId().toString()}` 
            console.log(url);
            console.log(Platform.OS.toString());
            console.log(DeviceInfo.getUniqueId().toString());
            console.log(deviceName.toString());
            console.log(ipAdd.toString());


          } else {
            // Toast.show(responseJson.data.message, failToast(3000));
            Alert.alert(responseJson.data.message);
            return false;
          }
        })
        .catch(err => {
          // Toast.show(
          //   'Нэвтрэлт амжилтгүй боллоо!\nХэрэглэгчийн нэр, нууц үг, домайн \nхаягаа шалгаад дахин оролдоно уу! ',
          //   failToast(4000),
          // );
          Alert.alert(
            'Нэвтрэлт амжилтгүй боллоо!\nХэрэглэгчийн нэр, нууц үг, домайн \nхаягаа шалгаад дахин оролдоно уу!',
          );
          console.log('error', err);
          return false;
        });
    }
  } catch (error) {
    console.log('eroor', error);
  }
};

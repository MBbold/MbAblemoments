import React from 'react';
import {Image, ImageBackground, View} from 'react-native';

const SplashScreen = () => {
    bgGif = require('../assets/animated_logo.gif');
  return (
    <View className="w-full h-full bg-[#3b4252] justify-center items-center">
      {/* <Image
        className=" h-20 bg-cover"
        source={require('../assets/animated_logo.gif')}
      /> */}
      <ImageBackground className=' w-64 h-96' source={bgGif}/>

    </View>
  );
};
export default SplashScreen;
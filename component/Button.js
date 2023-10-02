import {Text, TouchableOpacity} from 'react-native';

export const Button = ({value}) => {
  return (
    <TouchableOpacity className=" w-52 h-14  justify-center items-center bg-red-500 rounded-sm mt-8">
      <Text className=" text-white text-base font-extrabold">{value}</Text>
    </TouchableOpacity>
  );
};

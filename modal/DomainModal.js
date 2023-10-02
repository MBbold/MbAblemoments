import {useState} from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Xicon} from '../assets/icons';

export const DomainModal = ({openDomainModal, onClose, setDomainName}) => {
  //   const [selectedDomain, setSelectedDomain] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const domainlist = [
    {
      label: 'www.able.mn',
      value: 'https://www.able.mn/',
    },
    {
      label: 'ubtz.able.mn',
      value: 'https://ubtz.able.mn/',
    },
    {
      label: 'intranet.gov.mn',
      value: 'https://intranet.gov.mn/',
    },
    {
      label: 'able.tog.mn',
      value: 'https://able.tog.mn/',
    },
    {
      label: 'able.transco.mn',
      value: 'https://able.transco.mn/',
    },
    {
      label: 'able.e-mart.mn',
      value: 'https://able.e-mart.mn/',
    },
    {
      label: 'nots.able.mn',
      value: 'https://nots.able.mn/',
    },
    {
      label: 'intranet.mojha.gov.mn',
      value: 'https://intranet.mojha.gov.mn/',
    },
    {
      label: 'uia.able.mn',
      value: 'https://uia.able.mn/',
    },
    {
      label: 'eoffice.president.mn',
      value: 'https://eoffice.president.mn/',
    },
    // {
    //     label: 'intranet.mrpam.gov.mn(Local)',
    //     value: 'https://intranet.mrpam.gov.mn/',
    // },
    {
      label: 'intranet.mrpam.gov.mn',
      value: 'https://intranet.mrpam.gov.mn/',
    },
    {
      label: 'office.msue.edu.mn',
      value: 'https://office.msue.edu.mn/',
    },
    {
      label: 'mcud.able.mn',
      value: 'https://mcud.able.mn/',
    },
    {
      label: 'ndc.able.mn',
      value: 'https://ndc.able.mn/',
    },
    {
      label: 'able.audit.mn',
      value: 'https://able.audit.mn/',
    },
    {
      label: 'eoffice.nam.mn',
      value: 'https://eoffice.nam.mn/',
    },
    {
      label: 'able.mnb.mn',
      value: 'https://able.mnb.mn/',
    },
    {
      label: 'erp.mlsp.gov.mn',
      value: 'https://erp.mlsp.gov.mn/',
    },
    {
      label: 'able.itools.mn',
      value: 'https://able.itools.mn/',
    },
  ];
  //   useEffect(() => {
  //     (async function domainset() {
  //       var dd = await AsyncStorage.getItem('DomainAddress');
  //       if (dd !== undefined && dd) {
  //         setSelectedDomain(dd);
  //       } else {
  //         var domain = domainlist[0].value;
  //         setSelectedDomain(domain);
  //       }
  //     })();
  //   }, []);
  //   const getDomain = async domain => {
  //     verfyDomain = domain;
  //     const array = domain_list();
  //     const domainData = array.find(obj => obj.value === domain);
  //     setDomainLabel(domainData.label);
  //     await AsyncStorage.setItem('DomainAddress', domain);}
  return (
    <TouchableNativeFeedback
      onPress={() => console.log('heyx')}
      className=" w-full h-full">
      <Modal
        animationType="slide"
        transparent={true}
        visible={openDomainModal}
        onRequestClose={() => {
          onClose(false);
        }}>
        <View className="w-5/6 h-5/6 bg-white m-auto rounded-md">
          <TouchableOpacity className=' w-5/6 m-auto h-10 items-end' onPress={onClose}>
            <SvgXml width={25} xml={Xicon('#000')} />
          </TouchableOpacity>
          <View className=" w-5/6 m-auto my-5">
            <Text className=" text-center">
              Та Able системийг хэрэглэдэг домайн хаягаа оруулна уу!
            </Text>
          </View>
          <FlatList
            data={domainlist}
            showsVerticalScrollIndicator={false}
            className="w-5/6 m-auto"
            renderItem={({item, index}) => (
              <TouchableHighlight
                className=" h-10 rounded-md mx-1 px-2 mb-2 bg-white shadow-sm shadow-gray-500/70 justify-center"
                onPress={() => {
                  setDomainName(item);
                  // onClose();
                  onClose();
                }}
                underlayColor="#DDDDDD">
                <Text>{item.label}</Text>
              </TouchableHighlight>
            )}
          />
        </View>
      </Modal>
    </TouchableNativeFeedback>
  );
};

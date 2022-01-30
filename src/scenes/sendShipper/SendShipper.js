import React,{useState, useLayoutEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import { colors } from 'theme'
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base"

const SendShipper = ({ route, navigation }) => {
  const [info,setInfo] = useState(0);
  const firstUpdate = useRef(true);

  const [email, onChangeEmail] = useState('');
  const [name, onChangeName] = useState('');
  const [phone, onChangePhone] = useState('');
  const [address, onChangeAddress] = useState('');

  const from = route?.params?.price
  const [data, setData] = useState();

    const goNext = () => {
    setData({name: name, email: email, phone: phone, address: address})
    };
    useLayoutEffect(() => {
    if (firstUpdate.current) {
          firstUpdate.current = false;
          return;
        }
       console.log(data);
       console.log(name);
       navigation.navigate('SendReceiver',{ screen: 'SendReceiver' , param: {data}})
    }, [data]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

       <Center>
           <Box safeArea p="2" w="90%" maxW="290" py="8">
             <Heading
               size="lg"
               color="coolGray.800"
               _dark={{
                 color: "warmGray.50",
               }}
               fontWeight="semibold"
             >
               Shipper
             </Heading>
             <Heading
               mt="1"
               color="coolGray.600"
               _dark={{
                 color: "warmGray.200",
               }}
               fontWeight="medium"
               size="xs"
             >
               Please enter shipper data!
             </Heading>
             <VStack space={3} mt="5">
               <FormControl>
                 <FormControl.Label>Name and Surname</FormControl.Label>
                 <Input value={name}
                  onChangeText={(anything) =>onChangeName(anything)}
                 />
               </FormControl>
               <FormControl>
                 <FormControl.Label>Phone number</FormControl.Label>
                 <Input
                  onChangeText={(anything) =>onChangePhone(anything)}
                 />
               </FormControl>
               <FormControl>
                 <FormControl.Label>E-mail</FormControl.Label>
                 <Input
                  onChangeText={(anything) =>onChangeEmail(anything)}
                 />
               </FormControl>
               <FormControl>
                 <FormControl.Label>Locker / Flat address</FormControl.Label>
                 <Input
                  onChangeText={(anything) =>onChangeAddress(anything)}
                 />
               </FormControl>
               <Button mt="2" color="white" backgroundColor={colors.yellowish} onPress={goNext}>
                 Continue
               </Button>
             </VStack>
           </Box>
           </Center>
      <Button mt="2" color="white" backgroundColor={colors.gray} onPress={ navigation.goBack}>
                 Go back
      </Button>
    </View>
  )
}

SendShipper.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

SendShipper.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
   root: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.lightGrayPurple,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
});
export default SendShipper

import * as React from "react"
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
import { colors } from 'theme'

export const Register = ({ navigation }) => {
  return (
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
        Welcome
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
        Please enter your data!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" color="white" backgroundColor={colors.yellowish}
        onPress={() => {
                navigation.navigate('Login')
              }}
        >
          Register
        </Button>
      </VStack>
    </Box>
    </Center>
  )
}

export default Register;

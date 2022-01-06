import React from "react"
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
} from "native-base"
import { colors } from 'theme'
import Button from 'components/Button'
import PropTypes from 'prop-types'

export const Example = ({ navigation }) => {
  return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
<FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Login</FormControl.Label>
          <Input type="login" defaultValue="user" placeholder="login" />
        </Stack>
      </FormControl>

      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" defaultValue="12345" placeholder="password" />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details')
      }}
    />
    </Box>
  )
}
Example.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Example.defaultProps = {
  navigation: { navigate: () => null },
}
export default () => {
  return (
      <Center flex={1} px="3">
        <Example />
      </Center>
  )
}

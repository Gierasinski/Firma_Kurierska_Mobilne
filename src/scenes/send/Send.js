import React from "react"
import PropTypes from 'prop-types'
import { Center, Heading, Radio, NativeBaseProvider ,Text, Box, View, Icon} from "native-base"
import Button from 'components/Button'
import { colors } from 'theme'
import {Icon as IconM} from "react-native-vector-icons/MaterialCommunityIcons"
import { MaterialCommunityIcons} from "@expo/vector-icons"
export const Send = ({ navigation }) => {
  const [value, setValue] = React.useState("1")
  return (
    <Center>
      <Heading>
        Shipment type
      </Heading>
      <Box
            width="90%"
            bg="primary.500"
            p="4"
            shadow={2}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "white",
            }}
          >
      <Radio.Group
        name="exampleGroup"
        defaultValue="1"
        defaultIsChecked = "true"
        value={value}
              onChange={(nextValue) => {
                setValue(nextValue)
              }}
      >
        <Radio value="1" colorScheme="yellow" size="md" my={1}>
           <View style={{flexDirection: 'row'}}>
             <View style={{flex: 0.3 }} />
                <Icon
                  as={MaterialCommunityIcons}
                  name="locker-multiple"
                  color="coolGray.800"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
                <View style={{flex: 0.3 }} />
                 <Icon
                  as={MaterialCommunityIcons}
                  name="arrow-right"
                  color="coolGray.800"
                  alignSelf="flex-end"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
                <View style={{flex: 0.3 }} />
                <Icon
                  as={MaterialCommunityIcons}
                  name="locker-multiple"
                  color="coolGray.800"
                  marginRight = "10"
                  alignRight
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
           </View>
        </Radio>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.27 }} />
          <Text>Locker</Text>
          <View style={{flex: 0.52 }} />
          <Text>Locker</Text>
        </View>
        <Radio value="2" colorScheme="yellow" size="md" my={1}>
           <View style={{flexDirection: 'row'}}>
                       <View style={{flex: 0.3 }} />
                          <Icon
                            as={MaterialCommunityIcons}
                            name="locker-multiple"
                            color="coolGray.800"
                            _dark={{
                              color: "warmGray.50",
                            }}
                          />
                          <View style={{flex: 0.3 }} />
                           <Icon
                            as={MaterialCommunityIcons}
                            name="arrow-right"
                            color="coolGray.800"
                            alignSelf="flex-end"
                            _dark={{
                              color: "warmGray.50",
                            }}
                          />
                          <View style={{flex: 0.3 }} />
                          <Icon
                            as={MaterialCommunityIcons}
                            name="home-city-outline"
                            color="coolGray.800"
                            marginRight = "10"
                            alignRight
                            _dark={{
                              color: "warmGray.50",
                            }}
                          />
           </View>
        </Radio>
        <View style={{flexDirection: 'row'}}>
           <View style={{flex: 0.27 }} />
           <Text>Locker</Text>
           <View style={{flex: 0.52 }} />
           <Text>House</Text>
        </View>
      </Radio.Group>

     </Box>
     <Button
           title="Go to Details"
           color="white"
           backgroundColor={colors.yellowish}
           onPress={() => {
             navigation.navigate('Details', { from: value, size: Radio })
           }}
      />
    </Center>
  )
}
Send.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Send.defaultProps = {
  navigation: { navigate: () => null },
}
/*export default () => {
  return (
      <Center flex={1} px="3">
        <Send />
      </Center>
  )
}*/
export default Send

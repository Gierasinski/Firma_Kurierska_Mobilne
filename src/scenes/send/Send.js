import React from "react"
import PropTypes from 'prop-types'
import { Center, Heading, Radio, NativeBaseProvider ,Text, Box, View, Icon} from "native-base"
import Button from 'components/Button'
import { colors } from 'theme'
import { MaterialCommunityIcons } from "@expo/vector-icons"

export const Send = ({ navigation }) => {
  const [shipmentValue, setShipmentValue] = React.useState(4.99)
  const [sizeValue, setSizeValue] = React.useState(0.5)
  return (
    <Center flex={1} px="3">
      <Heading>
        Shipment type
      </Heading>
      <Box
            width="90%"
            bg="primary.500"
            p="4"
            rounded="xl"
            shadow={2}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
              color: "white",
            }}
          >
      <Radio.Group
        name="shipmentGroup"
        defaultValue="4.99"
        defaultIsChecked = "true"
        value={shipmentValue}
              onChange={(nextValue) => {
                setShipmentValue(nextValue)
              }}
      >
        <Radio value="4.99" colorScheme="yellow" size="md" my={1}>
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
        <Radio value="5.99" colorScheme="yellow" size="md" my={1}>
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



     <Heading>
        Parcel Size
     </Heading>
           <Box
                 width="90%"
                 bg="primary.500"
                 p="4"
                 rounded="xl"
                 shadow={2}
                 _text={{
                   fontSize: "md",
                   fontWeight: "bold",
                   color: "white",
                 }}
               >
           <Radio.Group
             name="exampleGroup"
             defaultValue="0.5"
             defaultIsChecked = "true"
             value={sizeValue}
                   onChange={(nextValue) => {
                     setSizeValue(nextValue)
                   }}
           >
             <Radio value="0.5" colorScheme="yellow" size="md" my={1}>
               <Icon
                 as={MaterialCommunityIcons}
                 name="package-variant-closed"
                 color="coolGray.800"
                 size="5"
                 alignRight
                 _dark={{
                   color: "warmGray.50",
                 }}
               />
               <Text>Small</Text>
               <Text color="grey"> (max.8 x 38 x 64cm up to 25kg)</Text>
             </Radio>
             <Radio value="1" colorScheme="yellow" size="md" my={1}>
                <Icon
                 as={MaterialCommunityIcons}
                 name="package-variant-closed"
                 color="coolGray.800"
                 size="7"
                 alignRight
                 _dark={{
                   color: "warmGray.50",
                 }}
               />
               <Text>Medium</Text>
               <Text color="grey"> (max.19 x 38 x 64cm up to 25kg)</Text>
             </Radio>
             <Radio value="1.5" colorScheme="yellow" size="md" my={1}>
                <Icon
                 as={MaterialCommunityIcons}
                 name="package-variant-closed"
                 color="coolGray.800"
                 size="9"
                 alignRight
                 _dark={{
                   color: "warmGray.50",
                 }}
               />
               <Text>Big</Text>
               <Text color="grey"> (max.41 x 38 x 64cm up to 25kg)</Text>
             </Radio>
           </Radio.Group>
          </Box>
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 0.1 }} />
       <Text fontSize="xl" >Shipment cost: </Text>
       <Text fontSize="2xl" color="yellow.500">{parseFloat(shipmentValue) + parseFloat(sizeValue)}$</Text>
      <View style={{flex: 0.1 }} />
        <Button
           title="Continue"
           color="white"
           backgroundColor={colors.yellowish}
           onPress={() => {
             navigation.navigate('SendDetails', { from: parseFloat(shipmentValue) + parseFloat(sizeValue), size: Radio })
           }}
        />
    </View>
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

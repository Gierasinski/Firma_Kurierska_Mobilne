import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { colors } from 'theme'
import Track from 'scenes/track'

// stack navigators
import { SendNavigator, ProfileNavigator, InsertNavigator, NotificationsNavigator, TrackNavigator} from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Send':
            return (
              <Icon
                name="cube-send"
                color={focused ? colors.yellowish : colors.gray}
                size={20}
                solid
              />
            )
          case 'Track':
            return (
              <FontIcon
                name="route"
                color={focused ? colors.yellowish: colors.gray}
                size={20}
                solid
              />
            )
           case 'Notifications':
                       return (
                         <FontIcon
                           name="bell"
                           color={focused ? colors.yellowish : colors.gray}
                           size={20}
                           solid
                         />
                       )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.yellowish,
      inactiveTintColor: colors.white,
      style: {
         backgroundColor: colors.lightBlue,
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Send"
    swipeEnabled={false}
  >
    <Tab.Screen name="Send" component={SendNavigator} />
    <Tab.Screen name="Track" component={TrackNavigator} />
    <Tab.Screen name="Notifications" component={NotificationsNavigator} />
  </Tab.Navigator>
)

export default TabNavigator

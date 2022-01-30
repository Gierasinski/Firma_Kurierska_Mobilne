import React, {useState, useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"
import { colors } from 'theme'
import Insert from 'scenes/input'
import Register from 'scenes/register'
import Notifications from 'scenes/notifications'
import Login from 'scenes/login'
import Text from 'scenes/text'
import Track from 'scenes/track'
import Home from 'scenes/home'
import Map from 'scenes/map'
import Send from 'scenes/send'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import SendShipper from 'scenes/sendShipper'
import SendReceiver from 'scenes/sendReceiver'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import { AsyncStorage } from 'react-native'
// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.lightBlue },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const SendNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Send"
      component={Send}
      options={({ navigation }) => ({
        title: 'Send',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="SendShipper"
      component={SendShipper}
      options={({ navigation }) => ({
        title: 'Send',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
          name="SendReceiver"
          component={SendReceiver}
          options={({ navigation }) => ({
            title: 'Send',
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitle: () => <HeaderTitle />,
          })}
        />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const LoginNavigator = () => {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('login')
            if(value !== null) {
                setLogin(value)
            }
        } catch(e) {
            // error reading value
        }
    }
return(
//<NavigationContainer>
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    {login ? <Stack.Screen
      name="Track"
      component={Track}
      options={({ navigation }) => ({
              title: 'Track',
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitle: () => <HeaderTitle />,
            })} /> :
    <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
                        title: 'Login',
                        headerLeft: () => <HeaderLeft navigation={navigation} />,
                        headerTitle: () => <HeaderTitle />,
                      })}
        />}
    <Stack.Screen
      name="Send"
      component={Send}
      options={({ navigation }) => ({
        title: 'Send',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
//</NavigationContainer>
)
}

export const InsertNavigator = () => (
  <Stack.Navigator
    initialRouteName="Insert"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Insert"
      component={Insert}
      options={({ navigation }) => ({
        title: 'Insert',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
    <Stack.Screen
          name="Texts"
          component={Text}
          options={{
            title: 'Text',
          }}
        />
  </Stack.Navigator>
)

export const RegisterNavigator = () => (
  <Stack.Navigator
    initialRouteName="Register"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Register"
      component={Register}
      options={({ navigation }) => ({
        title: 'Register',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={({ navigation }) => ({
        title: 'Login',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)
export const MapNavigator = () => (
  <Stack.Navigator
    initialRouteName="Map"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Map"
      component={Map}
      options={({ navigation }) => ({
        title: 'Map',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const NotificationsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Notifications"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Notifications"
      component={Notifications}
      options={({ navigation }) => ({
        title: 'Notifications',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const TrackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Track"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Track"
      component={Track}
      options={({ navigation }) => ({
        title: 'Track',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)
/*Export const FormNavigator = () => (
  <Stack.Navigator
    initialRouteName="Form"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Form"
      component={Form}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
     <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Details',
          }}
        />
      </Stack.Navigator>
    <Stack.Screen
          name="Text"
          component={Text}
          options={({ navigation }) => ({
            title: 'Text',
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitle: () => <HeaderTitle />,
          })}
        />
  </Stack.Navigator>
)*/


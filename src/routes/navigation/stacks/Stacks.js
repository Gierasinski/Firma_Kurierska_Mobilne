import React, {useState, useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import { colors } from 'theme'
import Insert from 'scenes/input'
import Form from 'scenes/form'
import Login from 'scenes/login'
import Text from 'scenes/text'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import { AsyncStorage } from 'react-native';
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

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
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
      name="Home"
      component={Home}
      options={{headerShown: false}} /> :
    <Stack.Screen
          name="Login"
          component={Login}
        />}
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

export const FormNavigator = () => (
  <Stack.Navigator
    initialRouteName="Form"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Form"
      component={Form}
      options={({ navigation }) => ({
        title: 'Form',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
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


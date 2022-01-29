import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { InsertNavigator, RegisterNavigator, LoginNavigator, MapNavigator} from '../stacks'
import Insert from 'scenes/input'
import Register from 'scenes/register'
import Login from 'scenes/login'
import Map from 'scenes/map'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home"
  // drawerContent={DrawerMenuContainer}
  >
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Lockers Map" component={MapNavigator} />
    <Drawer.Screen name="Register" component={RegisterNavigator}/>
    <Drawer.Screen name="Login" component={LoginNavigator}/>

  </Drawer.Navigator>
)

export default DrawerNavigator

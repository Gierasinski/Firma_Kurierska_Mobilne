import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { InsertNavigator, FormNavigator, LoginNavigator } from '../stacks'
import Insert from 'scenes/input'
import Form from 'scenes/form'
import Login from 'scenes/login'

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
    <Drawer.Screen name="Form" component={FormNavigator}/>
    <Drawer.Screen name="Login" component={LoginNavigator}/>

  </Drawer.Navigator>
)

export default DrawerNavigator

import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Snackbar } from 'react-native-paper';



const Login = ({ navigation }) => {
  const [login, onChangeLogin] = useState(null);
  const [pass, onChangePass] = useState(null);
  const [visiblePass, setVisiblePass] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const onToggleToastBar = () => setVisible(!visible);
  const onDismissToastBar = () => setVisible(false);

   const checkLogin = () => {
          if(login && pass && (login === pass)){
              storeData().then(() => {
                  navigation.navigate('Home', { from: 'Login' })
              })

          }else{
              setVisible(true);
          }
   }
   const storeData = async () => {
        try {
            await AsyncStorage.setItem('login', 'true')
        } catch (e) {
            // saving error
        }
   }
  return (
    <View style={styles.container}>
    <View style={{ flex: 1}} />
    <View style={{ flex: 2}} >
      <TextInput
        style={styles.input}
        onChangeText={onChangeLogin}
        value={login}
        placeholder="Login"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Password"
        secureTextEntry={visiblePass}
      />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVisiblePass(!visiblePass)}
            >
              <Icon name="package-variant-closed" size={25} style={{
                position: 'absolute',
                right:10,
                top: -25,
                color: "green"}}/>
            </TouchableOpacity>
      <Button
            title="Sign up"
            color="white"
            backgroundColor={colors.yellowish}
            onPress={() => checkLogin()}
          />
        </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
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
  container: {
    flexDirection: "column",
    padding: 30,
    flex: 1
    },
})


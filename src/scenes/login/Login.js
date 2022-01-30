import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Snackbar } from 'react-native-paper'
import { login } from '../../api/mock'


const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState(null);
  const [pass, onChangePass] = useState(null);
  const [visiblePass, setVisiblePass] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

   const checkLogin = () => {
     if(email&& pass && (email=== pass)){
                  login(email, pass, true)
                        .then(() => {
                          navigation.navigate('Home');
                        })
                        .catch((err) => setVisible(true));
             }else{
                  login(email, pass, false)
                        .then(() => {
                        })
                        .catch((err) => setVisible(true));
             }
   }

  return (
    <View style={styles.container}>
    <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{backgroundColor: 'red'}}>
        Login or password is incorrect
    </Snackbar>
    <View style={{ flex: 1}} />
    <View style={{ flex: 2}} >
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
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
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Login.defaultProps = {
  navigation: { navigate: () => null },
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


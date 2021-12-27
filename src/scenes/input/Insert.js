import React from 'react'
import { Input, Center , NativeBaseProvider} from "native-base"
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

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
})
const Insert = ({ navigation, route }) => {
  const [login, onChangeLogin] = React.useState(null);
  const [pass, onChangePass] = React.useState(null);

  React.useEffect(() => {
    if(route.params?.post) {e
    }
  },[route.params?.post]);

  return (
    <SafeAreaView>
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
        secureTextEntry={true}
      />
      <Button
            title="Sign up"
            color="white"
            backgroundColor={colors.yellowish}
            onPress={() => {
              navigation.navigate('Texts', {
              login: login,
              password: pass
               })
            }}
          />
    </SafeAreaView>
  );
};


Insert.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Insert.defaultProps = {
  navigation: { navigate: () => null },
}

/*export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Insert />
      </Center>
    </NativeBaseProvider>
  )
}*/
export default Insert

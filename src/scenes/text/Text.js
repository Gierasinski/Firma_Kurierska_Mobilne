import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
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

const Texts= ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`Login: ${route?.params?.login}`}</Text>
      <Text style={styles.title}>{`Haslo: ${route?.params?.password}`}</Text>
      <Button
        title="Go Back"
        color="white"
        backgroundColor={colors.pink}
        onPress={navigation.navigate('Insert', {
        name: 'Text',
        params: {login : 'hahaha'},
        merge: true,
        })}
      />
    </View>
  )
}

Texts.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Texts.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Texts

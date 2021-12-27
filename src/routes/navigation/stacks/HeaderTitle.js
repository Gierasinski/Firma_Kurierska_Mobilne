import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: -16,
    right: 10,
    width: 32,
    height: 32,

  },
})

const HeaderTitle = () => <Image source={images.package} style={styles.logo} />

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle

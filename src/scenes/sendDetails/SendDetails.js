import React,{useState} from 'react'
import PropTypes from 'prop-types'
import MapView,{Marker} from 'react-native-maps';
import {StyleSheet, Text, View, StatusBar, Dimensions} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import Geolocation from 'react-native-geolocation-service';

const SendDetails = ({ route, navigation }) => {
  const [info,setInfo]=useState(0)
  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <MapView style={styles.map}
        initialRegion={{
            latitude: 52.229676,
            longitude: 21.012229,
            latitudeDelta: 0.9922,
            longitudeDelta: 0.0421,
          }}
      >
        <Marker coordinate ={{latitude: 52.229676,longitude: 21.012229}}/>
      </MapView>
      <Text style={styles.title}>{`Details (from ${from})`}</Text>
      <Button
        title="Go Back"
        color="white"
        backgroundColor={colors.pink}
        onPress={navigation.goBack}
      />
    </View>
  )
}

SendDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

SendDetails.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
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
});
export default SendDetails

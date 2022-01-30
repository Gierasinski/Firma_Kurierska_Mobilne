import React, {useState,useEffect} from 'react';
import {Text,View, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import {Box} from "native-base"
import { useScrollToTop } from '@react-navigation/native';
import { colors } from 'theme'

const Track = ( ) => {
    const [data,setData] = useState([]);
    const ref = React.useRef(null);
    useScrollToTop(ref);
    // get our feed
    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('https://61f535d162f1e300173c4055.mockapi.io/api/parcels/parcels');
            const data = await resp.json();
            setData(data);
        }
        getData();
    });


    return(
        <View style={styles.mainView}>
            <View style={styles.mainPostView}>


                     <FlatList
                        data = {data}
                        keyExtractor = {item => item.id}
                        renderItem={({item}) => (
                            <View style={styles.postView}>
                            <TouchableOpacity width="90%" bg="primary.500">
                               <Box
                                          width="90%"
                                          bg="primary.500"
                                          p="4"
                                          rounded="xl"
                                          shadow={2}
                                          _text={{
                                            fontSize: "md",
                                            fontWeight: "bold",
                                            color: "white",
                                          }}
                                        >
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                          <Text style={styles.title}>Shipment address</Text>
                                                   </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                         <Text style={styles.description}>{item.shipAddress}</Text>
                                                   </View>


                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                          <Text style={styles.title}>Delivery address</Text>
                                                   </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                         <Text style={styles.description}>{item.reciveAddress}</Text>
                                                   </View>


                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                          <Text style={styles.title}>Parcel number</Text>
                                                   </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                         <Text style={styles.description}>{item.parcelNumber}</Text>
                                                   </View>
                               </Box>
                               </TouchableOpacity>


                            </View>
                        )}
                    />


            </View>
        </View>
    )
}
export default Track
const styles = StyleSheet.create({
    mainView:{
        flex:1,
    },
    title:{
        fontSize:18,
        color: colors.yellowish,
    },
    description:{
            fontSize:16,
        },
    mainPostView:{
      width:'100%',
    },
    postView:{
      width:'100%',
      alignItems:'center',
      marginTop:20,
    },
    photo:{
        width:'100%',
        height:'100%',
        borderRadius:8,
    },
    buttton:{
        width:'90%',
        height:200,
        backgroundColor:'rgba(0,0,0,0.06)',
        marginTop:10,
    }

})

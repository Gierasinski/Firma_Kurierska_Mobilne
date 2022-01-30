import React, {useState,useEffect} from 'react';
import {Text,View, FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import {Box} from "native-base"
import { useScrollToTop } from '@react-navigation/native';
import { colors } from 'theme'

const Notifications = ( ) => {
    const [data,setData] = useState([]);
    const [read,setRead] = useState();
    const [id,setId] = useState();
    const ref = React.useRef(null);
    useScrollToTop(ref);
    // get our feed
    useEffect(() => {
        const getData = async () => {
            const resp = await fetch('https://61f535d162f1e300173c4055.mockapi.io/api/parcels/notifications');
            const data = await resp.json();
            setData(data);
        }
        getData();
    });
    const update = async (item) => {
    try{
    console.log(item.id);
    setId(item.id);
            await fetch(`https://61f535d162f1e300173c4055.mockapi.io/api/parcels/notifications/${item.id}`,{
            method: 'PUT',
            mode: 'no-cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
				    read: true,
		    	}
            ),

            });
        } catch(e) {
          console.log(e);
        }
    };


    return(
        <View style={styles.mainView}>
            <View style={styles.mainPostView}>


                     <FlatList
                        data = {data}
                        keyExtractor = {item => item.id}
                        renderItem={({item}) => (
                            <View style={styles.postView}>
                            <TouchableOpacity width="90%" bg="primary.500" onPress={() => update(item)}>
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
                                                         <Text style={styles.title}>{item.title}</Text>
                                                   </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.5 }} />
                                                         <Text style={styles.description}>{item.Description}</Text>
                                                    </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.0 }} />
                                                         <Text style={styles.note}>Sender:</Text>
                                                    </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.0 }} />
                                                         <Text style={styles.smallData}>{item.sender}</Text>
                                                    </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.0 }} />
                                                         <Text style={styles.note}>Date:</Text>
                                                    </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.0 }} />
                                                         <Text style={styles.smallData}>{item.date}</Text>
                                                    </View>
                                        <View style={{flexDirection: 'row'}}>
                                                      <View style={{flex: 0.0 }} />
                                                          <Text style={styles.note}>Seen:</Text>
                                                     </View>
                                        <View style={{flexDirection: 'row'}}>
                                                     <View style={{flex: 0.0 }} />
                                                         <Text style={styles.smallData}>{item.read.toString()}</Text>
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
export default Notifications
const styles = StyleSheet.create({
    mainView:{
        flex:1,
    },
    title:{
        fontSize:18,
        color: colors.yellowish,
    },
    note:{
            fontSize:12,
            color: colors.gray,
        },
    description:{
            fontSize:16,
        },
    smallData:{
            fontSize:13,
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

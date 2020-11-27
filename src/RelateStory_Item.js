import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View,Image } from 'react-native';

class RelateStory_Item extends Component {
    render() {
        return (
            <View style={{width:'100%'}}>
                <View style={{width:'100%',height:120,marginTop:10,flexDirection:'row'}}>
                <Image style={{ width: '29%', height: '100%', borderRadius: 10 }} source={{ uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg', }} />
                <View style={{width:'71%',height:'100%',paddingLeft:10}}>
                      <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>There was still love v</Text>
                      <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
                          <Text style={{backgroundColor:'#f97c4a',marginRight:5,padding:3,borderRadius:3,color:'white',marginTop:5}}>Thiếu nhi</Text>
                          <Text style={{backgroundColor:'#f97c4a',marginRight:5,padding:3,borderRadius:3,color:'white',marginTop:5}}>kiếm hiệp</Text>
                          <Text style={{backgroundColor:'#f97c4a',marginRight:5,padding:3,borderRadius:3,color:'white',marginTop:5}}>kiếm hiệp</Text>
                          <Text style={{backgroundColor:'#f97c4a',marginRight:5,padding:3,borderRadius:3,color:'white',marginTop:5}}>kiếm hiệp</Text>
                      </View>
                </View>
                </View>                
            </View>
        );
    }
}

export default RelateStory_Item;
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <View style={{width:'85%'}}>
        <View style={{width:'95%',height:45,backgroundColor:'#f6f6f7',borderRadius:20,flexDirection:'row',}}>
          <View style={{width:45,height:45}}>
          <Icon name="search" size={30} color="#900" style={{textAlign:'center',lineHeight:43,color:'black'}} />
          </View>
          <TextInput style={{ height: 45,width:'80%'}} placeholder="Tìm kiếm"/>
        </View>
      </View>
      <View style={{width:'15%',height:45}}>
      <Icon name="bell" size={30} color="#900" style={{textAlign:'center',lineHeight:45,color:'black'}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    backgroundColor:'white',
    padding:'3%',
    flexDirection:'row',
  },
});

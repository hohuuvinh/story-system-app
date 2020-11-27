import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:'50%',height:250,padding:5}}>
          <View style={styles.shadowBoxImage}>
              <Image style={{width:'100%',height:'70%'}} source={{uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',}}/>
                <View style={{padding:5}}>
                <Text style={{fontWeight:'bold', textAlign:'center',marginTop:5,fontSize:16,color:'black'}}>Tieu de anh 1dhdhdh</Text>
                <Text style={{textAlign: 'right',color:'red',fontSize:20,fontWeight:'bold',marginTop:5}}>20000d</Text>
                </View>
          </View>
      </View>
      <View style={{width:'50%',height:250,padding:5}}>
          <View style={styles.shadowBoxImage}>
              <Image style={{width:'100%',height:'70%'}} source={{uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',}}/>
                <Text>Tieu de anh 1dhdhdh</Text>
          </View>
      </View>
      <View style={{width:'50%',height:250,padding:5}}>
          <View style={styles.shadowBoxImage}>
              <Image style={{width:'100%',height:'70%'}} source={{uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',}}/>
                <Text>Tieu de anh 1dhdhdh</Text>
          </View>
      </View>
      <View style={{width:'50%',height:250,padding:5}}>
          <View style={styles.shadowBoxImage}>
              <Image style={{width:'100%',height:'70%'}} source={{uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',}}/>
                <Text>Tieu de anh 1dhdhdh</Text>
          </View>
      </View>
      <View style={{width:'50%',height:250,padding:5}}>
          <View style={styles.shadowBoxImage}>
              <Image style={{width:'100%',height:'70%'}} source={{uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',}}/>
                <Text>Tieu de anh 1dhdhdh</Text>
          </View>
      </View>
      <View style={{width:'50%',height:250,padding:5}}>
          <View style={styles.shadowBoxImage}>
              <Image style={{width:'100%',height:'70%'}} source={{uri: 'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',}}/>
                <Text>Tieu de anh 1dhdhdh</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  shadowBoxImage:{
    width:'100%',height:'100%',backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,   
    elevation: 4,
  }
});

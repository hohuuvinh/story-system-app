import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View,Image } from 'react-native';
import Header from './src/Header';
import PopularStory from './src/PopularStory';
import RelateStory from './src/RelateStory';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>

        <View style={{ padding: 5 }}>
          <PopularStory />
          <RelateStory/>
        </View>
      </ScrollView>
      <Header />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
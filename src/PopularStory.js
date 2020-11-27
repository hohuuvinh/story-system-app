import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import PopularStory_Item from './PopularStory_Item';

export default function PopularStory() {
    return (
        <View style={{ width: '100%', padding: 5, paddingTop: 0, }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Top thịnh hành</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <PopularStory_Item imageUri={require('../Public/Image/cong-chua-be-bong.jpg')} title={'Thần Y Yêu Hậu'} rate={'130'}/>
                <PopularStory_Item imageUri={require('../Public/Image/nguyen-ton.jpg')} title={'Nữ đương gia Sương'} rate={'110'}/>
                <PopularStory_Item imageUri={require('../Public/Image/nu-duong-gia-suong-da-trai.jpg')} title={'Công chúa bé bỏng'} rate={'115'}/>
                <PopularStory_Item imageUri={require('../Public/Image/nu-hon-chay-bong.jpg')} title={'Nụ hôn cháy bỏng'} rate={'92'}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
});


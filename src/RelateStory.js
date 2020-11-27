import React, { Component } from 'react';
import {Text,View } from 'react-native';
import RelateStory_Item from './RelateStory_Item';

class RelateStory extends Component {
    render() {
        return (
            <View style={{ width: '100%', padding: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Đề xuất cho bạn</Text>
                <RelateStory_Item/>
            </View>
        );
    }
}

export default RelateStory;


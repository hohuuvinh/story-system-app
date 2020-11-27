
import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';

class PopularStory_Item extends Component {
    render() {
        return (
            <View style={{ width: 150, height: 250, marginRight: 10 }}>
                <Image style={{ width: '100%', height: '80%', borderRadius: 10 }} source={ this.props.imageUri } />
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', marginTop: 5, }}>{ this.props.title }</Text>
                <View style={{ width: '100%', height: 20, flexDirection: 'row', marginTop: 0 }}>
                    <View style={{ width: '80%', height: 3, backgroundColor: '#f97c4a', marginTop: 8 }}>
                    </View>
                    <View style={{ width: '20%', height: 20 }}>
                        <Text style={{ textAlign:'right' }}>{ this.props.rate }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default PopularStory_Item;


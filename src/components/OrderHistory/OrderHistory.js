import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class OrderHistory extends Component {
    static navigationOptions = { header: null }

    goBackToMain() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
               
            </View>
        );
    }
}

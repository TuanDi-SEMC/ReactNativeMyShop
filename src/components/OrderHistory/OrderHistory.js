import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class OrderHistory extends Component {

    goBackToMain() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Text>OrderHistory Component</Text>
                <Button onPress={this.goBackToMain.bind(this)} title="go back Main" />
            </View>
        );
    }
}

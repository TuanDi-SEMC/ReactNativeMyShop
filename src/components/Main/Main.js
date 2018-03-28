import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Main extends Component {

    goToAuthenication() {
        const { navigate } = this.props.navigation;
        navigate('Authenication');
    }

    goToChangeInfo() {
        const { navigate } = this.props.navigation;
        navigate('ChangeInfo');
    }

    goToOrderHistory() {
        const { navigate } = this.props.navigation;
        navigate('OrderHistory');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Text>Main Component</Text>
                <Button onPress={this.goToAuthenication.bind(this)} title="go to Authenication" />
                <Button onPress={this.goToChangeInfo.bind(this)} title="go to ChangeInfo" />
                <Button onPress={this.goToOrderHistory.bind(this)} title="go to OrderHistory" />
            </View>
        );
    }
}

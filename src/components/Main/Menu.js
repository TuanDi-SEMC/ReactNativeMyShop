import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

class Menu extends Component {

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
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Button title='Go to Authenication' onPress={this.goToAuthenication.bind(this)} />
                <Button title='Go to ChangeInfo' onPress={this.goToChangeInfo.bind(this)} />
                <Button title='Go to Order History' onPress={this.goToOrderHistory.bind(this)} />
            </View>
        );
    }
}

export default Menu;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#29BB9C',
    }
});


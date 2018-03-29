import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
               <Text>Menu Component</Text> 
               <Button title='Go to Authenication' onPress={this.goToAuthenication.bind(this)} />
               <Button title='Go to ChangeInfo' onPress={this.goToChangeInfo.bind(this)} />
               <Button title='Go to Order History' onPress={this.goToOrderHistory.bind(this)} />
            </View>
        );
    }
}

export default Menu;

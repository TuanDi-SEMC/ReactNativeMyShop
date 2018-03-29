import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Cart extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
            </View>
        );
    }
}

export default Cart;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});

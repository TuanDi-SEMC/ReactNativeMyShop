import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Contact extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
            </View>
        );
    }
}

export default Contact;


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});

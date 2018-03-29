import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Collection from './Collection';
import Category from './Category';

class Home extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Collection />
                <Category />
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});

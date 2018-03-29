import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Search extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});

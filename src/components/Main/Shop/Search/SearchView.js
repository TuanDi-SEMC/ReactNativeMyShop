import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SearchView extends Component {
    static navigationOptions = { header: null }
    goToProductDetail() {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail');
    }
    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Text>SearchView</Text>
                <TouchableOpacity onPress={this.goToProductDetail.bind(this)}>
                    <Text>go to detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchView;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#E2E1DF',
    }
});
